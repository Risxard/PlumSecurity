
import { useTranslation } from "react-i18next";
import './ComandCard.css'
import '../Style.css'
import ComandCardSvg from "../../../assets/CardsComponents/ComandCardSvg";
export const ComandCard = () => {
    const { t } = useTranslation();

    return (
        <div className='phis-card dark-card order-5 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-3 md:col-span-3 lg:col-span-7 xl:order-5 xl:col-span-5'>
            <div className='m-card-content'>

                <div className="svg-container">
                    <div className="pis-svg">
                        <ComandCardSvg/>
                    </div>

                </div>
            </div>
            <div className='dark-card-title'>
                <h3>{t('everySection.cards.card5.title')}</h3>
                <p>{t('everySection.cards.card5.subTitle')}</p>
            </div>
        </div>
    )
}