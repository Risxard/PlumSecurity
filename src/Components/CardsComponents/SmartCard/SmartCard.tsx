import { useTranslation } from 'react-i18next';
import CardMeetSvg from '../../../assets/CardsComponents/SmartCardSvg'
import './SmartCard.css'
import '../Style.css'

export const SmartCard = () => {
    const { t } = useTranslation();

    return (
        <div className='dark-card smart-card'>
            <div className='m-card-content'>
                <div className="m-card-inner p-m-card">
                    <div className="win-smart-card">
                        <div className="social-links">
                            <a href="https://www.instagram.com/PlumSecurity/" target="_blank">
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/PlumSecurity/" target="_blank">
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://api.whatsapp.com/send/" target="_blank">
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    <div className="svg-container bg-dynamic">
                        <CardMeetSvg />
                        <div className="b-gradient"></div>
                    </div>
                </div>
            </div>
            <div className='dark-card-title'>
                <h3>{t('meetSection.cards.card1.title')}</h3>
                <p>{t('meetSection.cards.card1.subTitle')}</p>
            </div>
        </div>
    )
}