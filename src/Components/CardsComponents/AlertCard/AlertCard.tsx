import { useTranslation } from "react-i18next";
import './AlertCard.css'
import '../Style.css'
import AlertSvg from "../../../assets/CardsComponents/AlertSvg";

export const AlertCard = () => {
    const { t } = useTranslation();

    return (
        <div className='alert-card dark-card order-3 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-4 md:col-span-3 lg:col-span-5 xl:order-3 xl:col-span-4'>
            <div className='m-card-content bottom-fade'>
                <div className="a-svg">
                    <AlertSvg/>
                </div>

            </div>
            <div className='dark-card-title'>
                <h3>{t('everySection.cards.card3.title')}</h3>
                <p>{t('everySection.cards.card3.subTitle')}</p>
            </div>
        </div>
    )
}