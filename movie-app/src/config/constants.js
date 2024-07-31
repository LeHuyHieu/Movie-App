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
    },
    {
        name: "Register",
        path: routes.register,
        icon: "fa-pen-to-square",
    },
    {
        name: "Login",
        path: routes.login,
        icon: "fa-arrow-right-to-bracket"
    }
];
