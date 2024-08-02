import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fontawesome';

import '@/app.scss';
import '@/assets/styles/main.module.scss';
import AppRoutes from '@/routes/AppRoutes';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
