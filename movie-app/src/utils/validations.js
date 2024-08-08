const useValidations = () => {
    const validateRequired = (value) => {
        if (!value.trim()) {
            return 'this_field_is_required';
        }
        return '';
    };

    const validateEmail = (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return 'this_field_is_required';
        }
        if (!emailPattern.test(value)) {
            return 'invalid_email_address';
        }
        return '';
    };

    const validateMinLength = (minLength) => {
        return (value) => {
            if (!value) {
                return 'this_field_is_required';
            }
            if (value.length < minLength) {
                return `value_must_be_at_least_${minLength}_characters_long`;
            }
            return '';
        };
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        if (!confirmPassword) {
            return 'confirm_password_is_required';
        }
        if (!password) {
            return 'this_field_is_required';
        }
        if (password !== confirmPassword) {
            return 'passwords_do_not_match';
        }
        return '';
    };

    return {
        validateRequired,
        validateEmail,
        validateMinLength,
        validateConfirmPassword
    }
};

export default useValidations;