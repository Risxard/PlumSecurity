import { useTranslation } from "react-i18next";
import './PlataformsCard.css'
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash, faBuildingShield, faEyeSlash, faFileShield, faFileSignature, faFingerprint, faIdCardClip, faUserGear, faUserLock, faUserSecret, faUsersGear, faUserShield, faVault } from "@fortawesome/free-solid-svg-icons";
import { faBtc, faEthereum } from "@fortawesome/free-brands-svg-icons";
export const PlataformsCard = () => {
    const { t } = useTranslation();

    return (
        <div className='dark-card order-4 col-span-full flex h-[480px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 md:order-5 xl:order-4 xl:col-span-7'>
            <div className='m-card-content '>
                <div className="m-card-inner">
                    <span className='line-column-container'>
                        <div className="line-column-icons">
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faBtc} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faUserShield} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faUserLock} />
                            </div>
                        </div>
                        <div className="line-column-icons">
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faUsersGear} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faUserGear} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faIdCardClip} />
                            </div>
                        </div>
                        <div className="line-column-icons">
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faFileSignature} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faEthereum} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faUserSecret} />
                            </div>
                        </div>
                        <div className="line-column-icons">
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faFingerprint} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faBugSlash} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faVault} />
                            </div>
                        </div>
                        <div className="line-column-icons">
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faFileShield} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faEyeSlash} />
                            </div>
                            <div className="m-card-icon">
                                <FontAwesomeIcon icon={faBuildingShield} />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div className='dark-card-title'>
                <h3>{t('everySection.cards.card4.title')}</h3>
                <p>{t('everySection.cards.card4.subTitle')}</p>
            </div>
        </div>
    )
}