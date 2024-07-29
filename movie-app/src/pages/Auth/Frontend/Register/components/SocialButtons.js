import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Form/Button";

const cx = classNames.bind();

function SocialButtons() {
    return (
        <div className="text-center">
            <p>or sign in with:</p>
            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
            </Button>

            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                <FontAwesomeIcon icon={["fab", "fa-google"]} />
            </Button>

            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
            </Button>

            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                <FontAwesomeIcon icon={["fab", "fa-github"]} />
            </Button>
        </div>
    );
}

export default SocialButtons;