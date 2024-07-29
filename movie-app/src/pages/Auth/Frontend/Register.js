import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { toast } from 'react-toastify';

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postData } from '@/services/api';
import { useDocumentTitle } from '@/hooks';

import config from "@/config";
import style from "./Auth.module.scss";
// import { validateConfirmPassword, validateEmail, validateMinLength } from '@/services/validation';

const cx = classNames.bind(style);

function Register() {
    useDocumentTitle('Register');
    // const [touched, setTouched] = useState(false);
    // const [error, setError] = useState('');
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

    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }, []);

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        switch (name) {
            case 'name':
                error = validateRequired(value);
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
    };

    const handleRegister = async (e) => {
        e.preventDefault();
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
    };

    return (
        <section>
            <div className={cx("sticky-top shadow-sm")} style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                <nav className={cx("navbar")}>
                    <div className="container-fluid">
                        <div>
                            <Button to={config.routes.home} className={cx("nav-item")}>
                                <FontAwesomeIcon icon={["fa-solid", "fa-house"]} />
                                <span className={cx("ps-2")}>Home</span>
                            </Button>
                            <Button to={config.routes.login} className={cx("nav-item")}>
                                <FontAwesomeIcon icon={["fa-solid", "fa-arrow-right-to-bracket"]} />
                                <span className={cx("ps-2")}>Login</span>
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={cx("py-3 py-md-5 px-md-5 d-flex align-items-center justify-content-center", "min-h-100vh")} style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                <div className={cx("container")}>
                    <div className={cx("row gx-lg-5 align-items-center")}>
                        <div className={cx("col-lg-6 mb-5 mb-lg-0")}>
                            <h1 className={cx("my-3 my-md-5 display-3 fw-bold ls-tight")}>
                                The best offer <br />
                                <span className={cx("text-primary")}>for your business</span>
                            </h1>
                            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                quibusdam tempora at cupiditate quis eum maiores libero
                                veritatis? Dicta facilis sint aliquid ipsum atque?
                            </p>
                        </div>

                        <div className={cx("col-lg-6 mb-5 mb-lg-0")}>
                            <div className={cx("card")}>
                                <div className={cx("card-body py-5 px-md-5")}>
                                    <form onSubmit={handleRegister}>
                                        <div className={cx("form-outline mb-4")}>
                                            <label className={cx("form-label")} htmlFor="name">Full name</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <FontAwesomeIcon icon={["fas", "fa-user"]} />
                                                </span>
                                                <Input
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    className={cx("form-control")}
                                                    isFocused={true}
                                                />
                                            </div>
                                        </div>

                                        <div className={cx("form-outline mb-4")}>
                                            <label className={cx("form-label")} htmlFor="email">Email address</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <FontAwesomeIcon icon={["fas", "fa-at"]} />
                                                </span>
                                                <Input
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="example@gmail.com"
                                                    className={cx("form-control")}
                                                />
                                            </div>
                                        </div>

                                        <div className={cx("form-outline mb-4")}>
                                            <label className={cx("form-label")} htmlFor="password">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <FontAwesomeIcon icon={["fas", "fa-lock"]} />
                                                </span>
                                                <Input
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter password"
                                                    className={cx("form-control")}
                                                />
                                            </div>
                                        </div>

                                        <div className={cx("form-outline mb-4")}>
                                            <label className={cx("form-label")} htmlFor="password_confirmation">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <FontAwesomeIcon icon={["fas", "fa-lock"]} />
                                                </span>
                                                <Input
                                                    value={formData.password_confirmation}
                                                    onChange={handleChange}
                                                    type="password"
                                                    name="password_confirmation"
                                                    id="password_confirmation"
                                                    placeholder="Enter confirm password"
                                                    className={cx("form-control")}
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            className={cx("btn-primary w-100 btn-block mb-4")}
                                        >
                                            <FontAwesomeIcon icon={["fas", "fa-key"]} /> Sign up
                                        </Button>

                                        <div className="text-center">
                                            <p>or sign in with:</p>
                                            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                                                <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} />
                                            </Button>

                                            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                                                <FontAwesomeIcon icon={["fab", "fa-google"]} />
                                            </Button>

                                            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                                                <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                                            </Button>

                                            <Button type="button" className={cx("btn-link btn-floating mx-1")}>
                                                <FontAwesomeIcon icon={["fab", "fa-github"]} />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;