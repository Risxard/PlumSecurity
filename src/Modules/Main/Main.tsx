// Main.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.css';
import SpecialBtn from '../../Components/Buttons/SpecialBtn';

const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <main className='' id='Main'>

            <section className='intro-container m-auto'>
                <div>
                    <h2>{t('mainSection.firstContentText.title')}</h2>
                    <p
                        dangerouslySetInnerHTML={{ __html: t('mainSection.firstContentText.subTitle') }}
                    />
                </div>
            </section>


            <section className='join-section-container'>
                <span className='sep'>
                    <span className='sep-line'></span>
                    <span className='sep-light' />
                </span>
                <div className="join-section m-auto">
                    <h2>{t('joinSection.title')}</h2>
                    <p>{t('joinSection.subTitle')}</p>
                    <div className='button-container'>
                        <SpecialBtn textContent={t('Buttons.joinBtn')} />
                    </div>
                </div>
            </section>




            <div className="spectre">
                <div className="spectre-2"></div>
            </div>

        </main>
    );
}

export default Main;
