import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Form/Button";

import config from "@/config";
import { useTranslate } from "@/hooks";

const cx = classNames.bind();

const SOCIAL_BUTTONS = config.constants.social_buttons || [];

function SocialButtons() {
    const { t } = useTranslate();
    return (
        <div className="text-center">
            <p>{ t("or_sign_in_with") }:</p>
            {SOCIAL_BUTTONS.map((item, index) => {
                return <Button type="button" key={index} className={cx("btn-link btn btn-floating mx-1")}>
                    <FontAwesomeIcon icon={["fab", item.icon]} />
                </Button>
            })}
        </div>
    );
}

export default SocialButtons;