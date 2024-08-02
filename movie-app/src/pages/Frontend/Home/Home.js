import React from "react";
import { useTranslation } from "react-i18next";

import { useDocumentTitle } from "@/hooks";
import { parseJwt } from "@/utils";
import '@/i18n';

function Home() {
    useDocumentTitle('Home');
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        const user = parseJwt(authToken);
        console.log(user);
    }

    return (
        <div>
            <h1>{t('welcome_message')}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
}

export default Home;