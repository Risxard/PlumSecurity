// Main.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Main.css';
import SpecialBtn from '../../Components/Buttons/SpecialBtn';
import ArrowBtn from '../../Components/Buttons/ArrowBtn';
import Particles from '../Particles/Particles';
import CardSmartSvg from '../../Components/SvgComponents/CardSmartSvg';
import CardMeetSvg from '../../Components/SvgComponents/CardMeetSvg';

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

                    <div className='dark-card  order-1 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:col-span-3 lg:col-span-5 xl:col-span-4'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('everySection.cards.card1.title')}</h3>
                            <p>{t('everySection.cards.card1.subTitle')}</p>
                        </div>
                    </div>
                    <div className='dark-card order-2 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:col-span-3 lg:col-span-7 xl:col-span-4'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('everySection.cards.card2.title')}</h3>
                            <p>{t('everySection.cards.card2.subTitle')}</p>
                        </div>
                    </div>

                    <div className='dark-card order-3 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-4 md:col-span-3 lg:col-span-5 xl:order-3 xl:col-span-4'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('everySection.cards.card3.title')}</h3>
                            <p>{t('everySection.cards.card3.subTitle')}</p>
                        </div>
                    </div>

                    <div className='dark-card order-4 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-5 xl:order-4 xl:col-span-7'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('everySection.cards.card4.title')}</h3>
                            <p>{t('everySection.cards.card4.subTitle')}</p>
                        </div>
                    </div>

                    <div className='dark-card order-5 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-3 md:col-span-3 lg:col-span-7 xl:order-5 xl:col-span-5'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('everySection.cards.card5.title')}</h3>
                            <p>{t('everySection.cards.card5.subTitle')}</p>
                        </div>
                    </div>
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

                    <div className='dark-card'>
                        <div className='m-card-content'>
                            <div className='m-card-gradient'></div>
                            <div className="svg-container">
                                <CardSmartSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('meetSection.cards.card1.title')}</h3>
                            <p>{t('meetSection.cards.card1.subTitle')}</p>
                        </div>
                    </div>

                    <div className='dark-card'>
                        <div className='m-card-content'>
                            <div className="svg-container">
                                <CardMeetSvg />
                            </div>
                        </div>
                        <div className='dark-card-title'>
                            <h3>{t('meetSection.cards.card2.title')}</h3>
                            <p>{t('meetSection.cards.card2.subTitle')}</p>
                        </div>
                    </div>

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
