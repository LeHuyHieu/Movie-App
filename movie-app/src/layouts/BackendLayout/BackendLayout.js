import PropTypes from 'prop-types';

function BackendLayout({ children }) {
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

BackendLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BackendLayout;