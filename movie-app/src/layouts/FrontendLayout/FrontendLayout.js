import PropTypes from 'prop-types';

function FrontendLayout({ children }) {
    return (
        <div>
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