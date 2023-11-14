import React from 'react'
import '../Header/header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (

    <div className='Header-content'>
      <div className='header absolute-center'>
        <span className='heading-gradient'>
          Develops
        </span>
      </div>
      <div className='header__right'>
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/brandIntegration">
              Explore
            </NavLink>
          </li>
          
          
          
        </ul>
      </div>
    </div>
  )
}

export default Header
