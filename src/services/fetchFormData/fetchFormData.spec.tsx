import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchFormData } from "./fetchFormData";

describe("fetchFormData", () => {
    it("should send data and return true", async () => {
        const mock = new MockAdapter(axios);
        const data = { name: "Teste", email: "teste@teste.com", message: "Mensagem de teste" };

        mock.onPost('https://formsubmit.co/ajax/richadson@ymail.com').reply(200, {
            message: "Formulário enviado com sucesso!"
        });

        const result = await fetchFormData(data);

        console.log(result)
        expect(result).toBe(true);
    });

    it("should return false in case of error", async () => {
        const mock = new MockAdapter(axios);
        const data = { name: "Teste", email: "teste@teste.com", message: "Mensagem de teste" };

        mock.onPost('https://formsubmit.co/ajax/richadson@ymail.com').networkError();

        const result = await fetchFormData(data);
        expect(result).toBe(false);
    });
});
