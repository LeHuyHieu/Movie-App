import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Form/Button";

import config from "@/config";

const cx = classNames.bind();

const SOCIAL_BUTTONS = config.constants.social_buttons || [];

function SocialButtons() {
    return (
        <div className="text-center">
            <p>or sign in with:</p>
            {SOCIAL_BUTTONS.map((item, index) => {
                return <Button type="button" key={index} className={cx("btn-link btn-floating mx-1")}>
                    <FontAwesomeIcon icon={["fab", item.icon]} />
                </Button>
            })}
        </div>
    );
}

export default SocialButtons;