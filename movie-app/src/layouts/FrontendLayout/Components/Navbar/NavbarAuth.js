import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "@/components/Form/Button";
import config from "@/config";

const ROUTER_NAVBAR_AUTH = config.constants.router_navbar_auth || [];

const cx = classNames.bind();

function NavbarAuth({ layout = 'register' }) {
    return (
        <div className={cx("sticky-top shadow-sm")} style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
            <nav className={cx("navbar")}>
                <div className="container-fluid">
                    <div>
                        {ROUTER_NAVBAR_AUTH.map((item, index) => {
                            if (layout === item.name) {
                                return null;
                            }

                            return <Button to={item.path} key={index} className={cx("btn nav-item")} >
                                <FontAwesomeIcon icon={["fa-solid", item.icon]} />
                                <span className={cx("ps-2")}>{item.name}</span>
                            </Button>
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarAuth;