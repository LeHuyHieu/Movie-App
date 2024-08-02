import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { BackendLayout, FrontendLayout } from '@/layouts';
import { publicRoutes, privateRoutes } from '@/routes';
import PageNotFound from '@/pages/PageNotFound';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = FrontendLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return <Route key={index} path={route.path} element={
                        <Layout>
                            <Page />
                        </Layout>
                    } />
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = BackendLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return <Route key={index} path={route.path} element={
                        <ProtectedRoute requiredRole={route.role}>
                            <Layout>
                                <Page />
                            </Layout>
                        </ProtectedRoute>
                    } />
                })}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;