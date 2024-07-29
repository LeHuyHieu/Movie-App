import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from "./Input.module.scss";

const cx = classNames.bind(style);

const Input = ({
    type = 'text',
    name = '',
    value = '',
    onChange = () => { },
    onBlur = () => { },
    placeholder = '',
    className = "",
    isFocused = false,
    isInvalid = false,
    isValid = false,
    options = [],
    ...props }) => {
    const commonProps = {
        name,
        className: cx(className, { 'is-invalid': isInvalid, 'is-valid': isValid }),
        autoFocus: isFocused,
        ...props,
    };
    
    if (type === 'textarea') {
        return (
            <>
                <textarea
                    {...commonProps}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </>
        );
    }

    if (type === 'select') {
        return (
            <>
                <select
                    {...commonProps}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </>
        );
    }

    return (
        <>
            <input
                {...commonProps}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        </>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'textarea', 'select', 'checkbox']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    isFocused: PropTypes.bool,
    isInvalid: PropTypes.bool,
    isValid: PropTypes.bool,
    validationFn: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
};

export default Input;
