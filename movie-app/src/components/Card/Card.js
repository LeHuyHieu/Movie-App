import classNames from "classnames/bind";

import style from "./Card.module.scss";

const cx = classNames.bind(style);

function Card({ className, ...props }) {
    return (
        <div {...props} className={cx("card", className)}>
            <div className={cx("card-body")}>
                <p className={cx("card-text")}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default Card;