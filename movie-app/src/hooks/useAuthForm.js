import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { postData } from '@/services/api';
import { validations } from '@/utils';
import config from '@/config';
import { useTranslate } from '@/hooks';

const useAuthForm = (layout = 'register') => {
    const navigate = useNavigate();
    const { t } = useTranslate();
    const [loading, setLoading] = useState(false);
    const { validateRequired, validateEmail, validateMinLength, validateConfirmPassword } = validations();

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
                error = validateMinLength(6)(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'password':
                error = validateMinLength(6)(value);
                break;
            case 'password_confirmation':
                error = validateConfirmPassword(formData.password, value);
                break;
            default:
                error = validateRequired(value);
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    }, [formData, validateConfirmPassword, validateEmail, validateMinLength, validateRequired]);

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
            name: validateRequired(formData.name),
            email: validateEmail(formData.email),
            password: validateMinLength(6)(formData.password),
            password_confirmation: validateConfirmPassword(formData.password, formData.password_confirmation),
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
                    toast.success(t("register_successful")+"!");
                }
            } catch (error) {
                console.error('Error posting data:', error.response?.data || error.message);
                toast.error("register_failed._please_try_again.");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const validationErrors = {
            email: validateEmail(formData.email),
            password: validateMinLength(6)(formData.password),
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
                    toast.success(t("login_successful") + "!");
                }
            } catch (error) {
                console.error('Error posting data:', error.response?.data || error.message);
                toast.error(t("login_failed._please_try_again."));
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