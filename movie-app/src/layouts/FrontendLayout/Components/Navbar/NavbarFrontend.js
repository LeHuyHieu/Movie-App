import classNames from "classnames/bind";

import Button from "@/components/Form/Button";
import FormSearch from "@/layouts/FrontendLayout/Components/Navbar/FormSearch";
import config from "@/config";
import Dropdown from "@/components/Dropdown";
import style from "./Navbar.module.scss";

import avatar_default from "@/assets/images/avatars/user_default.jpg";

const ROUTER_NAVBAR_IS_LOGIN = config.constants.router_navbar_is_login || [];
const cx = classNames.bind(style);

function NavbarFrontend() {
    const authToken = localStorage.getItem('authToken');
    
    return (
        <nav className={cx("navbar navbar-expand-lg navbar-light")}>
            <div className={cx("container-fluid")}>
                <Button to={config.routes.home} className={cx("btn navbar-brand")}>Logo</Button>
                <Button className={cx("btn navbar-toggler")} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span className={cx("navbar-toggler-icon")}></span>
                </Button>
                <div className={cx("collapse navbar-collapse")} id="navbarSupportedContent">
                    <div className={cx("d-flex align-items-center pt-3 pt-lg-0 w-100")}>
                        <div className={cx("mx-auto")}>
                            <FormSearch />
                        </div>
                        {authToken ? (
                            <Dropdown data={ROUTER_NAVBAR_IS_LOGIN}>
                                <div className={cx("avatar")}>
                                    <div className={cx("avatar-image")}>
                                        <img className={cx("rounded-circle img-fluid")} src={avatar_default} alt="avatar" />
                                    </div>
                                </div>
                            </Dropdown>
                        ) : (
                                <Button
                                    to={config.routes.login}
                                    title="Đăng nhập"
                                    iconLeft={["fa-solid", "fa-arrow-right-to-bracket"]}
                                    className={cx("btn btn-link text-decoration-none text-dark")}
                                >
                                    <div className="d-none d-lg-inline-block">
                                        Đăng nhập
                                    </div>
                                </Button>
                        )}
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarFrontend;