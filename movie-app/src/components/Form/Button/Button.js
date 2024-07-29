import { forwardRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(style);

const Button = forwardRef(({
    to,
    href,
    iconRight = '',
    iconLeft = '',
    className = '',
    disabled = false,
    children,
    onClick,
    ...passProps
}, ref) => {
    let Component = "button";
    const props = {
        onClick,
        ...passProps
    }

    //Remove event listeners btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith("on") && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }

    const classes = cx("btn", {
        [className]: className,
    });

    return (
        <Component ref={ref} className={classes} {...props}>
            {iconLeft && <span className={cx("iconLeft")}><FontAwesomeIcon icon={["fa", iconLeft]} /></span>}
            <span>{children}</span>
            {iconRight && <span className={cx("iconRight")}><FontAwesomeIcon icon={["fa", iconRight]} /></span>}
        </Component >
    );
});

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    iconRight: PropTypes.string,
    iconLeft: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button;