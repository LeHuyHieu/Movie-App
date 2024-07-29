import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { publicRoutes, privateRoutes } from './routes';

import '@/app.module.scss';
import { BackendLayout, FrontendLayout } from './layouts';

function App() {
  return (
    <Router>
      <div className='App'>
        <ToastContainer />
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
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
