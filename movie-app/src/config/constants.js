import { toast } from "react-toastify";
import i18next from "i18next";
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
        name: "home",
        path: routes.home,
        icon: "fa-house",
        separated: false,
    },
    {
        name: "register",
        path: routes.register,
        icon: "fa-pen-to-square",
        separated: false,
    },
    {
        name: "login",
        path: routes.login,
        icon: "fa-arrow-right-to-bracket",
        separated: false,
    }
];

export const ROUTER_NAVBAR_IS_LOGIN = [
    {
        name: "profile",
        path: routes.user,
        icon: "fa-user",
        separated: false,
    },
    {
        name: "favourite",
        path: routes.favourite,
        icon: "fa-heart",
        separated: false,
    },
    {
        name: "setting",
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
            toast.success(i18next.t("logout_successfully"));
        },
    },
];
