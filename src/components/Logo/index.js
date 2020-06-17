import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  console.log('logo render');
  return(
    <div className="logo">
        <NavLink to="/CafeWeb">CafeWebDesign</NavLink>
    </div>
   )

 }

export default Logo