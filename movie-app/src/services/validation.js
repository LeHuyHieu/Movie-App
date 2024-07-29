export const validateRequired = (value) => {
    if (!value.trim()) {
        return 'This field is required';
    }
    return '';
};

export const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        return 'This field is required';
    }
    if (!emailPattern.test(value)) {
        return 'Invalid email address';
    }
    return '';
};

export const validateMinLength = (minLength) => {
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

export const validateConfirmPassword = (password, confirmPassword) => {
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