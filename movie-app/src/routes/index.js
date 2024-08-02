import config from '@/config';

//Layouts
import { BackendLayout, FrontendLayout } from '@/layouts';

//Pages
//Frontend
import Home from '@/pages/Frontend/Home';
import { Login } from '@/pages/Auth/Frontend/Login';
import Register from '@/pages/Auth/Frontend/Register';
//Frontend auth
import { UserProfile } from '@/pages/Frontend/Users';
//Backend
import Dashboard from '@/pages/Backend/Dashboard';
import LoginAdmin from '@/pages/Auth/Backend/Login';

//Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: FrontendLayout,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.loginAdmin,
        component: LoginAdmin,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: null,
    },
];

const privateRoutes = [
    {
        path: config.routes.dashboard,
        component: Dashboard,
        layout: BackendLayout,
        role: 'admin',
    },
    {
        path: config.routes.user,
        component: UserProfile,
        layout: FrontendLayout,
        role: 'user',
    },
];

export { publicRoutes, privateRoutes };