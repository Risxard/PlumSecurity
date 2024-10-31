import { useTranslation } from 'react-i18next';
import WppCardSvg from '../../../assets/CardsComponents/WppCardSvg';
import './WppCard.css';
import '../Style.css';
import { useState } from 'react';

export const WppCard = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        const phoneNumber = '+5527999769330'; // Número de WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className='dark-card meet-card'>
            <div className='m-card-content'>
                <div className="m-card-inner p-m-card">

                    <div className="m-card-inner p-m-card meet-card-content">
                        <div className="how-btn-container">
                            <div className="inner-how-btn">
                                <div className='how-btn'>{t('meetSection.cards.card2.introTitle')}</div>
                            </div>
                        </div>
                        <div className="how-wpp-container">
                            <span className='wpp-input-container'>
                                ✨
                                <input
                                    type="text"
                                    name='wppinput'
                                    placeholder={t('meetSection.cards.card2.inputPlaceholder')}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </span>
                            <span className='wpp-btn' role='button' onClick={sendMessage}>
                                <span className='wpp-text-btn' >{t('meetSection.cards.card2.wppBtnText')}</span>
                                <span className='wpp-btn-blur'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div className="svg-container">
                        <WppCardSvg />
                    </div>
                </div>
            </div>

            <div className='dark-card-title'>
                <h3>{t('meetSection.cards.card2.title')}</h3>
                <p>{t('meetSection.cards.card2.subTitle')}</p>
            </div>
        </div>
    );
}