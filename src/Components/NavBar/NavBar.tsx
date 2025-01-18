import React from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import PlumSecurityLogo from '../../assets/plumLogo.png';

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { SpecialBtn } from '../Buttons/Buttons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const NavBar: React.FC = () => {

    const { t } = useTranslation();
    
    return (
        <div className='NavBar'>
            <div>
                <nav>
                    <div className="logo-container">
                        <img src={PlumSecurityLogo} alt="PlumSecurity Logo" id="Logo" loading='lazy' />
                    </div>

                    <div className="join-ul-container">
                        <ul>
                            <li>
                                <LanguageSelector />
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
