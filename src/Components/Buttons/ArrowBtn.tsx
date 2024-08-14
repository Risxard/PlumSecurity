import './Style.css';

interface SpecialBtnProps {
    textContent: string;
}

const ArrowBtn = ({ textContent }: SpecialBtnProps) => {

    const scrollToSection = (refClass: string) => {
        const element = document.getElementById(refClass);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${refClass} not found.`);
        }
    }

    return (
        // Pass a function reference to onClick
        <span className='learn-more' onClick={() => scrollToSection('Main')}>
            <p>{textContent}</p>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.48438 3.8125V14.3125" stroke="#A1A1AA" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.7344 9.0625L9.48438 14.3125L4.23438 9.0625" stroke="#A1A1AA" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

export default ArrowBtn;
