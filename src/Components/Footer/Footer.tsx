import { useTranslation } from 'react-i18next';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { t, } = useTranslation();

    return (
        <footer className='m-auto mx-width padding-inline-center'>
            <div className='footer-div-1'>
                <div className="f-social-links ">
                    <a href=''><FontAwesomeIcon icon={faXTwitter} target="_blank"/></a>
                    <a href='https://www.linkedin.com/company/byteguard-security/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    {/* <a href=''><FontAwesomeIcon icon={faFacebook} target="_blank"/></a> */}
                </div>

                <div className="polices-and-rights">
                    <div className='terms-div'>
                        {/* <a href="">{t('footer.footerLinks.privacyPolicy')}</a>
                        <a href="">{t('footer.footerLinks.terms')}</a> */}
                    </div>
                    <div><p>{t('footer.byteRights')}</p></div>
                </div>
            </div>

            <div className='footer-div-2'>
                <p>{t('footer.byteRightText1')}</p>
                <p className='p-footer'>{t('footer.byteRightText2')}</p>
            </div>
        </footer>
    );
}

export default Footer;
