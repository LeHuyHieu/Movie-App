import { useEffect } from 'react';

const APP_NAME = process.env.REACT_APP_NAME;

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = APP_NAME + ' | ' + title;
    }, [title]);
};

export default useDocumentTitle;
