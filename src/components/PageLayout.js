import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Redux from '../assets/redux.png'
import '../styles/PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h3>
      Welcome to our repair center
      <img className='icon' src={Redux} />
    </h3>
    <NavLink to='/' activeClassName='page-layout__nav-item--active'>Home</NavLink>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
