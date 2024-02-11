import _ from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = () =>
<h1 className={_.heading}>Фотогалерея</h1>

Heading.propTypes = {
  h1: PropTypes.string,
};

