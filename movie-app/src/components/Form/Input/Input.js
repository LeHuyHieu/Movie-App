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
    isDisabled = false,
    options = [],
    error = '',
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
                    disabled={isDisabled}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {error && <div className={cx("invalid-feedback")}>{error}</div>}
            </>
        );
    }

    if (type === 'select') {
        return (
            <>
                <select
                    {...commonProps}
                    value={value}
                    disabled={isDisabled}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <div className={cx("invalid-feedback")}>{error}</div>}
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
                disabled={isDisabled}
                placeholder={placeholder}
            />
            {error && <div className={cx("invalid-feedback")}>{error}</div>}
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
    isDisabled: PropTypes.bool,
    validationFn: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    error: PropTypes.string,
};

export default Input;
