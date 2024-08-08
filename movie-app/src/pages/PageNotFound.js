import { useTranslate } from "@/hooks";

function PageNotFound() {
    const { t } = useTranslate();
    return (
        <div>
            <h1>404 - { t('not_found') }</h1>
            <p>{ t('the_page_you_are_looking_for_does_not_exist.') }</p>
        </div>
    );
}

export default PageNotFound;