import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <header>
    <h1 className='text-center'>{title}</h1>
  </header>
)

//documentar la aplicación para saber el tipo de dato que se espera y si es obligatorio o no.
Header.propTypes = {
  title : PropTypes.string.isRequired
}

export default Header;