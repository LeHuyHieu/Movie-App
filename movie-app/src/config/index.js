import routes from './routes';
import { SOCIAL_BUTTONS, ROUTER_NAVBAR_AUTH, ROUTER_NAVBAR_IS_LOGIN } from './constants';

const config = {
    routes,
    constants: {
        social_buttons: SOCIAL_BUTTONS,
        router_navbar_auth: ROUTER_NAVBAR_AUTH,
        router_navbar_is_login: ROUTER_NAVBAR_IS_LOGIN,
    }
}

export default config;