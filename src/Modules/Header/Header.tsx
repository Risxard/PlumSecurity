// Header.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowBtn from '../../Components/Buttons/ArrowBtn';
import SpecialBtn from '../../Components/Buttons/SpecialBtn';
import NavBar from '../NavBar/NavBar';
import ParticlesComponent from '../Particles/Particles';
import './Header.css';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className='padding-inline-center'>
            <NavBar />

            <div className='align-container'>
                <span className='intro-text'>
                    <div className="h1-text">
                        <h1 dangerouslySetInnerHTML={{ __html: t('header.mainText') }} />
                    </div>

                    <h3>{t('header.subText')}</h3>
                    <SpecialBtn textContent={t('Buttons.joinBtn')} />
                </span>
                <ArrowBtn textContent={t('Buttons.learnBtn')} />
            </div>

            <ParticlesComponent />
            <div id="gradient" />
        </header>
    );
}

export default Header;
