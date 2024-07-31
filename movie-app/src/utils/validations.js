const validateRequired = (value) => {
    if (!value.trim()) {
        return 'This field is required';
    }
    return '';
};

const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        return 'This field is required';
    }
    if (!emailPattern.test(value)) {
        return 'Invalid email address';
    }
    return '';
};

const validateMinLength = (minLength) => {
    return (value) => {
        if (!value) {
            return 'This field is required';
        }
        if (value.length < minLength) {
            return `Value must be at least ${minLength} characters long.`;
        }
        return '';
    };
};

const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
        return 'Confirm Password is required';
    }
    if (!password) {
        return 'Password is required';
    }
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return '';
};

const validations = {
    validateRequired,
    validateEmail,
    validateMinLength,
    validateConfirmPassword
}

export default validations;