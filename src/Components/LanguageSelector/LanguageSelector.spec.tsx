import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('LanguageSelector Component', () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en-US',
        changeLanguage: jest.fn(),
      },
    });
  });

  it('should render the flag of current language', () => {

    render(<LanguageSelector />);

    const currentFlag = screen.getByTestId('language-selector');
    expect(currentFlag).toBeInTheDocument();
    expect(currentFlag.querySelector('.fi-us')).toBeInTheDocument();
  });

  it('should open and close the dropdown when click', () => {
    render(<LanguageSelector />);
    const languageSelector = screen.getByTestId('language-selector');

    fireEvent.click(languageSelector);
    const dropdown = screen.getByTestId('lng-dropdown');
    expect(dropdown).toBeVisible();

    fireEvent.mouseDown(document);
    expect(dropdown).not.toBeInTheDocument();
  });

  it('should call changeLanguage when select a language', () => {
    const changeLanguageMock = jest.fn();
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        language: 'en-US',
        changeLanguage: changeLanguageMock,
      },
    });

    render(<LanguageSelector />);
    const languageSelector = screen.getByTestId('language-selector');

    fireEvent.click(languageSelector);

    const portugueseOption = screen.getByTestId('portugueseOption');
    fireEvent.click(portugueseOption);

    expect(changeLanguageMock).toHaveBeenCalledWith('pt-BR');
  });
});
