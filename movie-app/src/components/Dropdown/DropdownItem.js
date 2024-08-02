import React from "react";
import classNames from "classnames/bind";

import style from "./Dropdown.module.scss";

const cx = classNames.bind(style);

function DropdownItem({ separated = false, className, children, ...props }) {
    const classes = cx(className, {
        separated: separated,
    });

    return (
        <li {...props} className={classes}>
            {children}
        </li>
    );
}

export default DropdownItem;