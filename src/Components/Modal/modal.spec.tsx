import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ModalProvider } from '../../context/ModalContext';
import Modal from './Modal';
import { SpecialBtn } from '../Buttons/Buttons';
import { fetchFormData, sendEmailJs } from '../../services/fetchFormData/fetchFormData';


jest.mock('../../services/fetchFormData/fetchFormData', () => ({
    fetchFormData: jest.fn(),
    sendEmailJs: jest.fn(),
}));

describe("modal", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should open the modal when button is clicked", async () => {
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

    it("should render the success component when data is submitted", async () => {
        const buttonText = 'buttons.joinBtn';

        (fetchFormData as jest.Mock).mockResolvedValue(true);


        render(
            <ModalProvider>
                <SpecialBtn textContent={buttonText} />
                <Modal />
            </ModalProvider>
        );

        fireEvent.click(screen.getByText(buttonText));
        await screen.findByRole('dialog'); 

        fireEvent.change(screen.getByRole('textbox', { name: /name/i }), { target: { value: 'Teste' } });
        fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'teste@teste.com' } });
        fireEvent.change(screen.getByRole('textbox', { name: /message/i }), { target: { value: 'Mensagem de teste' } });
        fireEvent.click(screen.getByRole('button', { name: 'submitBtn' }));

        await waitFor(() => {
            expect(screen.getByText('form-modal.formStatus.success.title')).toBeInTheDocument();
        });
    });

    it('should render the fail component when form submission fails', async () => {
        const buttonText = 'buttons.joinBtn';

        (fetchFormData as jest.Mock).mockResolvedValue(false);
        (sendEmailJs as jest.Mock).mockResolvedValue(false);

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
        console.log("Modal opened");

        const modalElement = await screen.findByRole('dialog');
        expect(modalElement).toBeVisible();

        fireEvent.change(screen.getByRole('textbox', { name: /name/i }), { target: { value: 'Teste' } });
        fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'teste@teste.com' } });
        fireEvent.change(screen.getByRole('textbox', { name: /message/i }), { target: { value: 'Mensagem de teste' } });
        console.log("Fields filled out");

        fireEvent.click(screen.getByRole('button', { name: 'submitBtn' }));

        await waitFor(() => {
            expect(screen.getByText('form-modal.formStatus.error.title')).toBeInTheDocument();
        });
        
    });
});
