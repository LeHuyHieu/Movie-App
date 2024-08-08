import { parseJwt } from '@/utils';
import PageNotFound from '@/pages/PageNotFound';

const ProtectedRoute = ({ requiredRole, children }) => {
    const { role } = parseJwt(localStorage.getItem('authToken')) || {};

    if (role === requiredRole) {
        return children;
    }
    return <PageNotFound />;
};

export default ProtectedRoute;
