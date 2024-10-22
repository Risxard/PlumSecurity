import { useTranslation } from "react-i18next";

import './InsightCard.css'
import '../Style.css'
import AnaliseSvg from "../../../assets/CardsComponents/AnaliseSvg";



export const InsightCard = () => {
    const { t } = useTranslation();

    return (
        <div className='insight-Card dark-card  order-1 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:col-span-3 lg:col-span-5 xl:col-span-4'>
            <div className='m-card-content bottom-fade'>
                <div className="m-card-inner p-m-card">
                    <div className="in-svg">
                            <AnaliseSvg />
                        <div className="VisibleMen">
                            <AnaliseSvg />
                        </div>
                    </div>
                </div>
            </div>
            <div className='dark-card-title'>
                <h3>{t('everySection.cards.card1.title')}</h3>
                <p>{t('everySection.cards.card1.subTitle')}</p>
            </div>
        </div>
    )
}