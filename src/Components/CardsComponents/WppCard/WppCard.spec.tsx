import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { WppCard } from "./WppCard";

describe('whatsapp component', () => {
    beforeAll(() => {
        global.open = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the WhatsApp component and call window.open with correct URL and message', () => {
        const phoneNumber = '+5527999769330';
        const baseUrl = `https://wa.me/${phoneNumber}`;
        const message = 'mensagem de teste';

        render(<WppCard />);

        const wppInput = screen.getByRole('textbox');
        expect(wppInput).toBeVisible();

        fireEvent.change(wppInput, { target: { value: message } });

        const btn = screen.getByRole('button');
        expect(btn).toBeVisible();

        fireEvent.click(btn);

        expect(global.open).toHaveBeenCalledWith(
            `${baseUrl}?text=${encodeURIComponent(message)}`,
            '_blank'
        );
    });
});
