import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import config from '@/config';
import { parseJwt } from '@/utils';

const ProtectedRoute = ({ requiredRole, children }) => {
    const { role } = parseJwt(localStorage.getItem('authToken')) || {};

    if (role === requiredRole) {
        toast.error('You do not have permission to access this page.');
        return children;
    }
    return <Navigate to={config.routes.home} />;
};

export default ProtectedRoute;
