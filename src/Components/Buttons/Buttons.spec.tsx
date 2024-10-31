import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArrowBtn, SpecialBtn } from './Buttons';
import { ModalProvider } from '../../context/ModalContext';
import Modal from '../Modal/Modal';



describe("Button Components", () => {
    beforeAll(() => {
        Element.prototype.scrollIntoView = jest.fn();
      });
    
      afterAll(() => {
        (Element.prototype.scrollIntoView as jest.Mock).mockRestore();
      });
    
      it('should to call scrollToSection and scrollIntoView when clicked', () => {
        const textContent = 'Learn More';
        
        render(<ArrowBtn textContent={textContent} />);
        
        const introElement = document.createElement('div');
        introElement.id = 'Intro';
        document.body.appendChild(introElement);
    
        const buttonElement = screen.getByText(textContent);
        expect(buttonElement).toBeInTheDocument();
    
        fireEvent.click(buttonElement);

        expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    
        document.body.removeChild(introElement);
      });


    it("should render SpecialBtn and open modal when clicked", async () => {
        const buttonText = 'buttons.joinBtn';
        render(
            <ModalProvider>
                <SpecialBtn textContent={buttonText} />
                <Modal/>
            </ModalProvider>
        );

        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        const modalElement = await screen.findByRole('dialog');
        expect(modalElement).toBeVisible();

    });
});
