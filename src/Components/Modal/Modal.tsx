import { useTranslation } from 'react-i18next';
import { useModal } from '../../context/ModalContext';
import './Modal.css';
import { useEffect, useState } from 'react';
import { ErrorMessage, SucessMessage } from './FetchFormMessages';
import { fetchFormData, sendEmailJs } from '../../services/fetchFormData/fetchFormData';



const Modal = () => {
  const { isModalOpen, closeModal } = useModal();
  const { t } = useTranslation();

  const initialFormState = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<null | 'success' | 'error'>(null);
  const [loadingText, setLoadingText] = useState('');


  

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
      resetForm();
    }

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, [isModalOpen]);

  const resetForm = () => {
    setFormData(initialFormState);
    setIsSubmitting(false);
    setSubmitResult(null);
    setLoadingText('');
  };





  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoadingText('');

    const intervalId = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    const axiosSuccess = await fetchFormData(formData);

    clearInterval(intervalId);

    if (!axiosSuccess) {
      const emailJsSuccess = await sendEmailJs(formData);
      if (emailJsSuccess) {
        setSubmitResult('success');
      } else {
        setSubmitResult('error');
      }
    } else {
      setSubmitResult('success');
    }

    setIsSubmitting(false);
    setLoadingText('');
  };

  const handleChange = (e: { target: { name: unknown; value: unknown; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value
    });
  };

  if (!isModalOpen) return null;

  return (
    <div className="Modal" role='dialog' aria-modal='true'>
      <div className='form-modal animate'>
        <button className='form-exit' onClick={closeModal}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 6.75L6.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M6.75 6.75L17.25 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>

        {submitResult === null && (
          <div className="form-container">
            <div className="form-svg">
              <div className="form-svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                  <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  <path d="M19 16v6"></path>
                  <path d="M16 19h6"></path>
                </svg>
              </div>
            </div>

            <div className="form-content">
              <h1>{t('form-modal.title')}</h1>
              <p>{t('form-modal.subTitle')}</p>
              <form onSubmit={handleSubmit}>
                <div className="flex-input">
                  <p>{t('form-modal.name.title')}</p>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('form-modal.name.placeholder')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-input">
                  <p>{t('form-modal.email.title')}</p>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('form-modal.email.placeholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-input">
                  <p>{t('form-modal.message.title')}</p>
                  <textarea
                    name="message"
                    placeholder={t('form-modal.message.placeholder')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>


                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? `${t('form-modal.buttonSubmitting')}${loadingText}` : t('form-modal.button')}
                </button>

                
              </form>
            </div>
          </div>
        )}

        {submitResult === 'success' && <SucessMessage />}
        {submitResult === 'error' && <ErrorMessage />}
      </div>

      <span className='blur-modal' onClick={closeModal} />
    </div>
  );
}

export default Modal;
