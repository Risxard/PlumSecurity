import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArrowBtn, SpecialBtn } from './Buttons';
import { ModalProvider } from '../../context/ModalContext';



describe("Button Components", () => {
    it("should render ArrowBtn correctly", () => {
        const buttonText = 'buttons.learnBtn';
        render(<ArrowBtn textContent={buttonText} />);
        expect(screen.getByText(buttonText)).toBeVisible();
    });

    it("should render SpecialBtn correctly", () => {
        const buttonText = 'buttons.joinBtn';
        render(
            <ModalProvider>
                <SpecialBtn textContent={buttonText} />
            </ModalProvider>
        );
        expect(screen.getByText(buttonText)).toBeVisible();
    });
});
