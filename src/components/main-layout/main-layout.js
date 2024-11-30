import PropTypes from 'prop-types';
import './main-layout.css';

const MainLayout = ({ children }) => (
  <main className="mainLayout">
    {children}
  </main>
);

MainLayout.Column = ({ children }) => (
  <div className="mainLayout__col">
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

MainLayout.Column.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
