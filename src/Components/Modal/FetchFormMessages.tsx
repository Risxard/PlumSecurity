import { useTranslation } from "react-i18next";

export const SucessMessage = () => {

    const { t } = useTranslation();
    return (
        <div className="StatusMessage">
            <div className="form-svg">
                <div className="form-svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>

                <div className="form-content">
                <h1>erro ao enviar</h1>
                    <h1>{t('form-modal.formStatus.success.title')}</h1>
                    <p>{t('form-modal.formStatus.success.subtitle')}</p>

                    <div className="social-links">
                        <a href="https://www.instagram.com/PlumSecurity/" target="_blank">
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/company/PlumSecurity/" target="_blank">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const ErrorMessage = () => {

    const { t } = useTranslation();
    return (
        <div className="StatusMessage">
            <div className="form-svg">
                <div className="form-svg-container">
                    <svg className="errorSvg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    </div>

                <div className="form-content">

                    <h1>{t('form-modal.formStatus.error.title')}</h1>
                    <p>{t('form-modal.formStatus.error.subtitle')}</p>
                </div>
            </div>
        </div>
    )
}

