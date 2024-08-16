import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import ByteGuardLogo from '../../assets/ByteLogo.png';
import SpecialBtn from '../../Components/Buttons/SpecialBtn';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const NavBar: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [active, setActive] = useState(false);
    const languageSelectorRef = useRef<HTMLSpanElement>(null);

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setActive(false);
    };

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
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const flagMapping: { [key: string]: string } = {
        'pt-BR': 'br',
        'en-US': 'us',
        'es': 'es',
    };

    const currentFlag = flagMapping[i18n.language] || 'br';

    return (
        <div className='NavBar'>
            <div>
                <nav>
                    <div className="logo-container">
                        <img src={ByteGuardLogo} alt="ByteGuard Logo" id="Logo" />
                    </div>

                    <div className="join-ul-container">
                        <ul>
                            <li>
                                <span
                                    id="languageSelector"
                                    className='lgn-selector'
                                    onClick={() => setActive(!active)}
                                    ref={languageSelectorRef}
                                >
                                    <span className={`fi fi-${currentFlag}`} />
                                    {active && (
                                        <div className='lng-dropdown'>
                                            <div className={`${i18n.language === 'pt-BR' ? 'selected' : ''}`}>
                                                <span
                                                    className="fi fi-br"
                                                    onClick={() => handleLanguageChange('pt-BR')}
                                                ></span>
                                            </div>
                                            <div className={`${i18n.language === 'en-US' ? 'selected' : ''}`}>
                                                <span
                                                    className="fi fi-us"
                                                    onClick={() => handleLanguageChange('en-US')}
                                                ></span>
                                            </div>
                                            <div className={`${i18n.language === 'es' ? 'selected' : ''}`}>
                                                <span
                                                    className="fi fi-es"
                                                    onClick={() => handleLanguageChange('es')}
                                                ></span>
                                            </div>
                                        </div>
                                    )}
                                </span>
                            </li>
                            <li>
                                <SpecialBtn textContent={t('buttons.joinBtn')} />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
