import React from 'react';

import Button from "@/components/Form/Button";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDocumentTitle } from '@/hooks';

import config from "@/config";
import style from "@/pages/Auth/Frontend/Auth.module.scss";
import Form from './components/Form';

const cx = classNames.bind(style);

function Register() {
    useDocumentTitle('Register');

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
                                    <Form />
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