import './Style.css';

interface SpecialBtnProps {
    textContent: string;
}

const SpecialBtn = ({ textContent }: SpecialBtnProps) => {
    return (
        <div className="special-btn">
            <div className="inner-special-btn">
                {textContent}
            </div>
            <div className="transition"></div>
        </div>
    );
}

export default SpecialBtn;
