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
    iconSm = false,
    className = '',
    isDisabled = false,
    children,
    onClick,
    ...passProps
}, ref) => {
    let Component = "button";
    const props = {
        onClick,
        ...passProps
    }

    if (isDisabled) {
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

    const classes = cx("", {
        [className]: className,
    });
    
    return (
        <Component ref={ref} disabled={isDisabled} className={classes} {...props}>
            {iconLeft && <span className={cx("iconLeft", iconSm && "icon-sm")}><FontAwesomeIcon icon={iconLeft} /></span>}
            <span>{children}</span>
            {iconRight && <span className={cx("iconRight", iconSm && "icon-sm")}><FontAwesomeIcon icon={iconRight} /></span>}
        </Component >
    );
});

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    iconRight: PropTypes.array,
    iconLeft: PropTypes.array,
    isDisabled: PropTypes.bool,
    iconSm: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button;