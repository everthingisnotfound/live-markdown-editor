import PropTypes from 'prop-types';
import './title-bar.css';

const TitleBar = ({ title, aside }) => (
  <div className="titleBar mb-4">
    <div className="titleBar__wrap">
      {title && <h4 className="mb-2">{title}</h4>}
      {aside && <h6>{aside}</h6>}
    </div>
    <hr />
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string,
  aside: PropTypes.string,
};

TitleBar.defaultProps = {
  title: 'Title',
  aside: null,
};

export default TitleBar;
