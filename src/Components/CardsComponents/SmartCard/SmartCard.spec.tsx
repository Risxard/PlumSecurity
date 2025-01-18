import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SmartCard } from './SmartCard';

describe('SmartCard component', () => {
    it('should render Instagram, LinkedIn, and WhatsApp links with correct URLs and target="_blank"', () => {
        render(<SmartCard />);

        const instagramLink = screen.getByText('Instagram').closest('a');
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/PlumSecurity/');
        expect(instagramLink).toHaveAttribute('target', '_blank');


        const linkedinLink = screen.getByText('LinkedIn').closest('a');
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/PlumSecurity/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');

        const whatsappLink = screen.getByText('WhatsApp').closest('a');
        expect(whatsappLink).toHaveAttribute('href', 'https://api.whatsapp.com/send/');
        expect(whatsappLink).toHaveAttribute('target', '_blank');
    });
});
