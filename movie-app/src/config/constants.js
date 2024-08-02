import { toast } from "react-toastify";
import routes from "./routes";

export const SOCIAL_BUTTONS = [
    {
        name: "Facebook",
        icon: "fa-facebook-f",
    },
    {
        name: "Google",
        icon: "fa-google",
    },
    {
        name: "Twitter",
        icon: "fa-twitter",
    },
    {
        name: "Github",
        icon: "fa-github",
    },
];

export const ROUTER_NAVBAR_AUTH = [
    {
        name: "Home",
        path: routes.home,
        icon: "fa-house",
        separated: false,
    },
    {
        name: "Register",
        path: routes.register,
        icon: "fa-pen-to-square",
        separated: false,
    },
    {
        name: "Login",
        path: routes.login,
        icon: "fa-arrow-right-to-bracket",
        separated: false,
    }
];

export const ROUTER_NAVBAR_IS_LOGIN = [
    {
        name: "Hồ sơ",
        path: routes.user,
        icon: "fa-user",
        separated: false,
    },
    {
        name: "Yêu thích",
        path: routes.favourite,
        icon: "fa-heart",
        separated: false,
    },
    {
        name: "Cài đặt",
        path: routes.setting,
        icon: "fa-gear",
        separated: false,
    },
    {
        name: "logout",
        path: routes.login,
        icon: "fa-arrow-right-from-bracket",
        separated: true,
        onClick: () => {
            localStorage.removeItem("authToken");
            toast.success("Logout successfully");
        },
    },
];
