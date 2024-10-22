import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.css';
import Particles from '../../services/particles/Particles';

import {
    SmartCard,
    WppCard,
    ComandCard,
    AlertCard,
    InsightCard,
    PlataformsCard,
    ManageCard
} from '../CardsComponents';
import { ArrowBtn, SpecialBtn } from '../Buttons/Buttons';

const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <main id='Main'>
            <section className='main-intro-container'>
                <div id="gradient" />
                <Particles />
                <div className='align-container'>
                    <div className='m-auto padding-inline-center'>
                        <span className='intro-text'>
                            <div className="h1-text">
                                <h1 dangerouslySetInnerHTML={{ __html: t('header.mainText') }} />
                            </div>

                            <p>{t('header.subText')}</p>
                        </span>
                        <span className='intro-btns'>
                            <SpecialBtn textContent={t('buttons.joinBtn')} />
                            <ArrowBtn textContent={t('buttons.learnBtn')} />
                        </span>

                    </div>
                </div>
            </section>

            <section className='intro-img m-auto l-section'>

            </section>

            <section className='intro-container m-auto' id='Intro'>
                <div>
                    <h2>{t('mainSection.firstContentText.title')}</h2>
                    <p
                        dangerouslySetInnerHTML={{ __html: t('mainSection.firstContentText.subTitle') }}
                    />
                </div>
            </section>

            <section className='l-section m-auto'>
                <div className='intro-section'>
                    <div className="intro-section-h2">
                        <h2>{t('everySection.title')}</h2>
                    </div>
                    <div className="intro-section-p">
                        <p dangerouslySetInnerHTML={{ __html: t('everySection.subTitle') }} />
                    </div>
                </div>

                <div className='mt-16 grid grid-cols-6 gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-8'>
                    <InsightCard />
                    <ManageCard />
                    <AlertCard />
                    <PlataformsCard />
                    <ComandCard />
                </div>
            </section>

            <section className='l-section m-auto'>
                <div className='intro-section'>
                    <div className="intro-section-h2">
                        <h2>{t('meetSection.title')}</h2>
                    </div>
                    <div className="intro-section-p">
                        <p dangerouslySetInnerHTML={{ __html: t('meetSection.subTitle') }} />
                    </div>
                </div>

                <div className='meet-cards'>
                    <SmartCard />
                    <WppCard />
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
                        <SpecialBtn textContent={t('buttons.joinBtn')} />
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
