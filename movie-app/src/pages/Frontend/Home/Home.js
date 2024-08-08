import React from "react";
import { useTranslate } from "@/hooks";

import { useDocumentTitle } from "@/hooks";
import { parseJwt } from "@/utils";

function Home() {
    useDocumentTitle('Home');
    const { t, changeLanguage } = useTranslate();

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        const user = parseJwt(authToken);
        console.log(user);
    }

    return (
        <div>
            <h1>{t('welcome_to')}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
}

export default Home;