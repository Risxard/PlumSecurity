import emailjs from '@emailjs/browser';
import { sendEmailJs } from './fetchFormData';

jest.mock('@emailjs/browser');

describe("sendEmailJs", () => {
    it("should send email successfully", async () => {

        (emailjs.send as jest.Mock).mockResolvedValue({ text: 'OK' });

        const result = await sendEmailJs({ name: "Teste", email: "teste@teste.com", message: "Mensagem de teste" });
        expect(result).toBe(true);
    });

    it("should return false in case of error", async () => {

        (emailjs.send as jest.Mock).mockRejectedValue(new Error("Erro ao enviar email"));

        const result = await sendEmailJs({ name: "Teste", email: "teste@teste.com", message: "Mensagem de teste" });
        expect(result).toBe(false);
    });
});
