import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import style from "./Dropdown.module.scss";
import DropdownItem from "./DropdownItem";
import Button from "@/components/Form/Button";

const cx = classNames.bind(style);


function Dropdown({ children, data, ...props }) {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    }

    const renderDropdown = () => (
        data.map((item, index) => (
            <DropdownItem separated={item.separated} key={index} className={cx("dropdown-tippy-item")}>
                <Button iconLeft={["fa-solid", item.icon]} onClick={item.onClick || null } className={cx("dropdown-tippy-link")} to={item.path || '#'}>
                    {item.name}
                </Button>
            </DropdownItem>
        ))
    );

    return (
        <Tippy
            visible={visible}
            interactive
            offset={[15, 10]}
            delay={500}
            duration={[200, 200]}
            placement="bottom-end"
            render={(attrs) => (
                <ul {...props} className={cx("dropdown-tippy")} tabIndex="-1" {...attrs}>
                    {renderDropdown()}
                </ul>
            )}
            onClickOutside={() => setVisible(false)} 
        >
            <div onClick={toggleVisible}>{children}</div>
        </Tippy>
    );
}

export default Dropdown;