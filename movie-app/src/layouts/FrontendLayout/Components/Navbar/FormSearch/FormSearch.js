import classNames from "classnames/bind";

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./FormSearch.module.scss";
import { useTranslate } from "@/hooks";

const cx = classNames.bind(style);

function FormSearch({ ...props }) {
    const { t } = useTranslate();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} { ...props } className={cx("form")}>
            <div className={cx("d-flex bg-white rounded-pill overflow-hidden", "form-search")}>
                <Input className={cx("me-1")} type="text" placeholder={t("search")} />
                <Button className={cx("btn rounded-0", "btn-search")} type="submit">
                    <FontAwesomeIcon icon={["fa-solid", "fa-magnifying-glass"]} />
                </Button>
            </div>
        </form>
    );
}

export default FormSearch;