import React from 'react';
import './style.css';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';

/**
* @author
* @function Header
**/

const Header = (props) => {
  console.log('header render');
  return(
    <header className="header">
        <Logo />
        <Navbar />
    </header>
   )

 }

export default Header