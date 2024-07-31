import React from 'react';
import classNames from "classnames/bind";

import { useDocumentTitle } from '@/hooks';
import style from "@/pages/Auth/Frontend/Auth.module.scss";
import Form from "@/pages/Auth/Frontend/components/Form";
import NavbarAuth from '@/components/Navbar/NavbarAuth';

const cx = classNames.bind(style);

function Login() {
    useDocumentTitle('Login');

    return (
        <section>
            <NavbarAuth layout='login' />
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
                                    <Form layout="login" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;