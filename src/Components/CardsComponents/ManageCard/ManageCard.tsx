import { useTranslation } from "react-i18next";
import ManageCardSvg from "../../../assets/CardsComponents/ManageCardSvg";
import '../Style.css'
import './ManageCard.css'

export const ManageCard = () => {
    const { t } = useTranslation();

    return (
        <div className='manage-card dark-card order-2 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:col-span-3 lg:col-span-7 xl:col-span-4'>
            <div className='m-card-content bottom-fade'>

                <div className="m-card-inner p-m-card">
                    <div className="manage-svg">
                        <ManageCardSvg />
                    </div>
                </div>
            </div>
            <div className='dark-card-title'>
                <h3>{t('everySection.cards.card2.title')}</h3>
                <p>{t('everySection.cards.card2.subTitle')}</p>
            </div>
        </div>
    )
}