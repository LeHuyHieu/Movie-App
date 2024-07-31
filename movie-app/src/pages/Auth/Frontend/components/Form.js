import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "@/config";
import { useAuth } from "@/hooks";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import SocialButtons from "./SocialButtons";

const cx = classNames.bind();

function Form({ layout = 'register', ...props }) {
    const {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleRegister,
        handleLogin,
        isDisabled,
    } = useAuth(layout);
    
    return (
        <form {...props} onSubmit={layout === 'register' ? handleRegister : handleLogin}>
            {layout === 'register' && (
                <div className={cx("form-outline mb-4")}>
                    <label className={cx("form-label")} htmlFor="name">Full name</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={["fas", "fa-user"]} />
                        </span>
                        <Input
                            value={formData.name || ''}
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className={cx("form-control")}
                            isFocused={layout === 'register' ? true : false}
                            onBlur={handleBlur}
                            error={errors.name}
                            isInvalid={errors.name !== ''}
                            isValid={errors.name === '' && formData.name.length >= 6}
                        />
                    </div>
                </div>
            )}

            <div className={cx("form-outline mb-4")}>
                <label className={cx("form-label")} htmlFor="email">Email address</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={["fas", "fa-at"]} />
                    </span>
                    <Input
                        value={formData.email || ''}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className={cx("form-control")}
                        onBlur={handleBlur}
                        isFocused={layout === 'login' ? true : false}
                        error={errors.email}
                        isInvalid={errors.email !== ''}
                        isValid={errors.email === '' && formData.email.length > 0}
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
                        value={formData.password || ''}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        className={cx("form-control")}
                        onBlur={handleBlur}
                        error={errors.password}
                        isInvalid={errors.password !== ''}
                        isValid={errors.password === '' && formData.password.length > 0}
                    />
                </div>
            </div>

            {layout === 'login' && (
                <div className={cx("d-flex justify-content-between align-items-center flex-wrap mb-4")}>
                    <div className={cx("form-check d-flex justify-content-center")}>
                        <Input
                            className={cx("form-check-input me-2")}
                            type="checkbox"
                            name="remembered"
                            id="remember"
                            checked={formData.remembered || false}
                            onChange={handleChange}
                        />
                        <label className={cx("form-check-label")} htmlFor="remember">
                            Remember me
                        </label>
                    </div>
                    <Button
                        to={config.routes.forgotPassword}
                        className={cx("btn-link p-0 text-decoration-none")}
                    >
                        Forgot password?
                    </Button>
                </div>
            )}

            {layout === 'register' && (
                <div className={cx("form-outline mb-4")}>
                    <label className={cx("form-label")} htmlFor="password_confirmation">Confirm password</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={["fas", "fa-lock"]} />
                        </span>
                        <Input
                            value={formData.password_confirmation || ''}
                            onChange={handleChange}
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            placeholder="Enter confirm password"
                            className={cx("form-control")}
                            onBlur={handleBlur}
                            isDisabled={formData.password === '' || errors.password !== ''}
                            error={errors.password_confirmation}
                            isInvalid={errors.password_confirmation !== ''}
                            isValid={errors.password_confirmation === '' && formData.password_confirmation.length > 0}
                        />
                    </div>
                </div>
            )}

            <Button
                type="submit"
                isDisabled={isDisabled()}
                className={cx("btn-primary w-100 btn-block mb-4")}
            >
                <FontAwesomeIcon icon={["fas", "fa-key"]} /> {layout === 'register' ? 'Sign up' : 'Sign in'}
            </Button>

            <SocialButtons />
        </form>
    );
}

export default Form;