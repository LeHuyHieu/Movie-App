import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { toast } from 'react-toastify';

import { postData } from '@/services/api';
import { validateConfirmPassword, validateEmail, validateMinLength, validateRequired } from '@/services/validation';
import config from '@/config';

const useRegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

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
    }, [formData]);

    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));

        handleErrors(name, value);
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
            }
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleRegister,
    };
}

export default useRegisterForm;