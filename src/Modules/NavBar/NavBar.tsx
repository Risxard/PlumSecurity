import React from 'react';
import { useTranslation } from 'react-i18next';
// import SpecialBtn from '../../Components/Buttons/SpecialBtn';
import './NavBar.css';
import ByteGuardLogo from '../../assets/ByteLogo.png';

const NavBar: React.FC = () => {
    const {  i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='NavBar'>
            <img src={ByteGuardLogo} alt="ByteGuard Logo" id="Logo" />
            <ul>
                {/* <li>{t('navBar.blog')}</li>
                <li><SpecialBtn textContent={t('Buttons.joinBtn')} /></li> */}
                <li>
                    <select id="languageSelector" onChange={handleLanguageChange} value={i18n.language}>
                        <option value="pt">Português</option>
                        <option value="en">Inglês</option>
                        <option value="es">Espanhol</option>
                    </select>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
