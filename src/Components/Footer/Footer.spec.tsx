import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';


describe('SmartCard component', () => {
    it('should render X, and Link links with correct URLs and target="_blank"', () => {
        render(<Footer/>);

        const linkedinLink = screen.getByTestId('f-X-link');

        expect(linkedinLink).toBeVisible();
        expect(linkedinLink).toHaveAttribute('href', 'https://www.x.com/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');

        const instagramLink = screen.getByTestId('f-In-link');
        expect(instagramLink).toHaveAttribute('href', 'https://www.linkedin.com/company/PlumSecurity/');
        expect(instagramLink).toHaveAttribute('target', '_blank');

    });
});
