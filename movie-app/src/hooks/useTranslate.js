import { useTranslation } from "react-i18next";

const useTranslate = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return { t, changeLanguage };
}

export default useTranslate;