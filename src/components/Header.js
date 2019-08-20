import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <header>
    <h1 className='text-center'>{title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.array.isRequired
}

export default Header;