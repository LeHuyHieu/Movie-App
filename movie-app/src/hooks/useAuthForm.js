import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { postData } from '@/services/api';
import { validations } from '@/utils';
import config from '@/config';

const useAuthForm = (layout = 'register') => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const initialFormData = layout === 'login'
        ? { email: '', password: '', remembered: false }
        : { email: '', password: '', name: '', password_confirmation: '' };

    const initialErrors = layout === 'login'
        ? { email: '', password: '' }
        : { email: '', password: '', name: '', password_confirmation: '' };

    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState(initialErrors);

    const handleErrors = useCallback((name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                error = validations.validateMinLength(6)(value);
                break;
            case 'email':
                error = validations.validateEmail(value);
                break;
            case 'password':
                error = validations.validateMinLength(6)(value);
                break;
            case 'password_confirmation':
                error = validations.validateConfirmPassword(formData.password, value);
                break;
            default:
                error = validations.validateRequired(value);
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    }, [formData]);

    const handleChange = useCallback((e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (type !== 'checkbox') {
            handleErrors(name, value);
        }
    }, [handleErrors]);

    const handleBlur = (e) => {
        const { name, value } = e.target;
        handleErrors(name, value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = {
            name: validations.validateRequired(formData.name),
            email: validations.validateEmail(formData.email),
            password: validations.validateMinLength(6)(formData.password),
            password_confirmation: validations.validateConfirmPassword(formData.password, formData.password_confirmation),
        };

        setErrors(validationErrors);
        if (Object.values(validationErrors).every((err) => err === '')) {
            setLoading(true);
            try {
                const result = await postData(config.routes.register, formData);
                console.log(result);
                if (result) {
                    const token = result.token;
                    localStorage.setItem('authToken', token);
                    navigate(config.routes.home);
                    toast.success("Register successful!");
                }
            } catch (error) {
                console.error('Error posting data:', error.response?.data || error.message);
                toast.error("Register failed. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const validationErrors = {
            email: validations.validateEmail(formData.email),
            password: validations.validateMinLength(6)(formData.password),
        };

        setErrors(validationErrors);
        if (Object.values(validationErrors).every((err) => err === '')) {
            setLoading(true);
            try {
                const result = await postData(config.routes.login, formData);
                if (result) {
                    console.log(result);
                    const token = result.token;
                    localStorage.setItem('authToken', token);
                    navigate(config.routes.home);
                    toast.success("Login successful!");
                }
            } catch (error) {
                console.error('Error posting data:', error.response?.data || error.message);
                toast.error("Login failed. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    const isDisabled = () => {
        if (layout === 'login') {
            return !(
                formData.email &&
                formData.password &&
                Object.values(errors).every((err) => err === '')
            );
        }

        return !(
            formData.email &&
            formData.password &&
            formData.name &&
            formData.password_confirmation &&
            Object.values(errors).every((err) => err === '')
        );
    };

    return {
        formData,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleRegister,
        handleLogin,
        isDisabled,
    };
}

export default useAuthForm;