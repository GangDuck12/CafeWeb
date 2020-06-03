import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <NavLink to="/">CafeWebDesign</NavLink>
    </div>
   )

 }

export default Logo