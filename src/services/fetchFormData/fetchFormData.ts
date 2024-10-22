import axios from "axios";
import emailjs from '@emailjs/browser';

export const fetchFormData = async (data: { name: string; email: string; message: string; }) => {
    try {
        const response = await axios.post('https://formsubmit.co/ajax/contato@byteguardsecurity.com.br', data, {
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
        const result = await emailjs.send('your_service_id', 'your_template_id', data, 'your_user_id');
        console.log('Email enviado com sucesso:', result.text);
        return true;
    } catch (error) {
        console.error('Erro ao enviar email com EmailJS:', error);
        return false;
    }
};