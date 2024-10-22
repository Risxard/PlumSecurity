import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalProvider } from '../../context/ModalContext';
import Modal from './Modal';
import { SpecialBtn } from '../Buttons/Buttons';

describe("modal", () => {
    it("should open modal after button was clicked", async () => {
        const buttonText = 'buttons.joinBtn';

        render(
            <ModalProvider>
                <SpecialBtn textContent={buttonText} />
                <Modal />
            </ModalProvider>
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        const buttonElement = screen.getByText(buttonText);
        
        expect(buttonElement).toBeInTheDocument();

        fireEvent.click(buttonElement);

        const modalElement = await screen.findByRole('dialog');

        expect(modalElement).toBeVisible();
    });
});
