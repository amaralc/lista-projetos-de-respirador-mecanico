/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

/* --------------------------------- EXPORTS ---------------------------------*/
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

/**
 * Define proptypes do componente
 */
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};