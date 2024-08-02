import PropTypes from 'prop-types';
import { NavbarFrontend } from '@/layouts/FrontendLayout/Components/Navbar';

function FrontendLayout({ children }) {
    return (
        <div>
            <header className="shadow-sm sticky-top bg-light">
                <div className="container">
                    <NavbarFrontend />
                </div>
            </header>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

FrontendLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FrontendLayout;