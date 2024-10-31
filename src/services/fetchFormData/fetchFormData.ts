import axios from "axios";
import emailjs from '@emailjs/browser';

export const fetchFormData = async (data: { name: string; email: string; message: string; }) => {
    try {
        const response = await axios.post('https://formsubmit.co/ajax/richadson@ymail.com', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Resposta do servidor:', response.data);
        return true;

    } catch (error) {
        console.error('Erro ao enviar dados com Axios:', error);
        return false;
    }
};

export const sendEmailJs = async (data: Record<string, unknown> | undefined) => {
    try {
        const result = await emailjs.send('service_qrr7a0p', 'template_zrptdro', data, 'W15P-HcRGyq90Swya');
        console.log('Email enviado com sucesso:', result.text);
        return true;
    } catch (error) {
        console.error('Erro ao enviar email com EmailJS:', error);
        return false;
    }
};