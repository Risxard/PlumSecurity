
const useTranslation = () => {
    return {
        t: (key) => key,
        i18n: {
            changeLanguage: () => new Promise(() => { }),
        },
    };
};

module.exports = {
    useTranslation,
};
