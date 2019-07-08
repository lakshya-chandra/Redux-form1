import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import './PageLayout.scss'
export const PageLayout = ({ children }) => (
  <div className = 'container text-center'>
    <h1>User Community</h1>
    <IndexLink to = '/' activeClassName = 'page-layout__nav-item--active'>Home</IndexLink>
    {' | '}
    <Link to = '/student' activeClassName = 'page-layout__nav-item--active'>Register</Link>
    {' | '}
    <Link to = '/list' activeClassName = 'page-layout__nav-item--active'>List</Link>
    <div className = 'page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
