import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SmartCard } from './SmartCard';

describe('SmartCard component', () => {
    it('should render Instagram, LinkedIn, and WhatsApp links with correct URLs and target="_blank"', () => {
        render(<SmartCard />);

        const instagramLink = screen.getByText('Instagram').closest('a');
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/byteguardsecurity/');
        expect(instagramLink).toHaveAttribute('target', '_blank');


        const linkedinLink = screen.getByText('LinkedIn').closest('a');
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/byteguard-security/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');

        const whatsappLink = screen.getByText('WhatsApp').closest('a');
        expect(whatsappLink).toHaveAttribute('href', 'https://api.whatsapp.com/send/?phone=%2B5527999769330&text&type=phone_number&app_absent=0');
        expect(whatsappLink).toHaveAttribute('target', '_blank');
    });
});
