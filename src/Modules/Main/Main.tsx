// Main.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.css';

const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <main className='padding-inline-center' id='Main'>
            <div className='div-text-content'>
                <h2>{t('mainSection.firstContentText.title')}</h2>

                <p
                    dangerouslySetInnerHTML={{ __html: t('mainSection.firstContentText.subTitle') }}
                />
            </div>
        </main>
    );
}

export default Main;
