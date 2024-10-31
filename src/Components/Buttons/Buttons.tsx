import ArrowSvg from "../../assets/ArrowSvg";
import { useModal } from "../../context/ModalContext";
import './Style.css';


interface SpecialBtnProps {
    textContent: string;
}

export const SpecialBtn = ({ textContent }: SpecialBtnProps) => {

    const { openModal } = useModal();

    return (
        <div className="special-btn-container" role="button">
            <div className="special-btn" onClick={() => openModal()}>
                <div className="inner-special-btn">
                    {textContent}
                </div>
                <div className="transition"></div>
            </div>
        </div>
    );
}


interface SpecialBtnProps {
    textContent: string;
}

export const ArrowBtn = ({ textContent }: SpecialBtnProps) => {

    const scrollToSection = (refClass: string) => {
        const element = document.getElementById(refClass);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID ${refClass} not found.`);
        }
    }

    return (
        <span className='learn-more' role="button" onClick={() => scrollToSection('Intro')}>
            <p>{textContent}</p>
            <ArrowSvg />
        </span>
    );
}

