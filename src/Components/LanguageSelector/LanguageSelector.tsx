import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [active, setActive] = useState(false);
    const languageSelectorRef = useRef<HTMLSpanElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            languageSelectorRef.current &&
            !languageSelectorRef.current.contains(event.target as Node)
        ) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        console.log('teste')
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (language: string) => {

        i18n.changeLanguage(language);
        setActive(false);
    };

    const flagMapping: { [key: string]: string } = {
        'pt-BR': 'br',
        'en-US': 'us',
        'es': 'es',
    };

    const currentFlag = flagMapping[i18n.language] || 'br';

    return (
        <span ref={languageSelectorRef}>
            <button
                id="languageSelector"
                className='lgn-selector'
                data-testid="language-selector"
                onClick={() => setActive(!active)}
                
            >
                <span className={`fi fi-${currentFlag}`} />
            </button>

            {active && (
                <div className='lng-dropdown' data-testid="lng-dropdown">
                    <button className={`${i18n.language === 'pt-BR' ? 'selected' : ''}`} onClick={() => handleLanguageChange('pt-BR')} data-testid="portugueseOption">
                        <span className="fi fi-br"></span>
                    </button>
                    <button className={`${i18n.language === 'en-US' ? 'selected' : ''}`} onClick={() => handleLanguageChange('en-US')}>
                        <span className="fi fi-us"></span>
                    </button>
                    <button className={`${i18n.language === 'es' ? 'selected' : ''}`} onClick={() => handleLanguageChange('es')}>
                        <span className="fi fi-es"></span>
                    </button>
                </div>
            )}
        </span>
    );
};

export default LanguageSelector;
