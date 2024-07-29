import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import SocialButtons from "./SocialButtons";

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import useRegisterForm from "@/hooks/useRegisterForm";

const cx = classNames.bind();

function Form() {
    const {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleRegister,
    } = useRegisterForm();

    return (
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
                        onBlur={handleBlur}
                        error={errors.name}
                        isInvalid={errors.name !== ''}
                        isValid={errors.name === '' && formData.name.length >= 6}
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
                        onBlur={handleBlur}
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
                        value={formData.password}
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
                        onBlur={handleBlur}
                        isDisabled={formData.password === '' || errors.password !== ''}
                        error={errors.password_confirmation}
                        isInvalid={errors.password_confirmation !== ''}
                        isValid={errors.password_confirmation === '' && formData.password_confirmation.length > 0}
                    />
                </div>
            </div>

            <Button
                type="submit"
                className={cx("btn-primary w-100 btn-block mb-4")}
            >
                <FontAwesomeIcon icon={["fas", "fa-key"]} /> Sign up
            </Button>

            <SocialButtons />
        </form>
    );
}

export default Form;