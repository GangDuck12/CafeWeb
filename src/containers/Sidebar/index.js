import React from 'react';
import side from './../../images/coffeeShow.png';
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  console.log('sidebar render');
  return(
    <div className="sidebar">
        <img className="sideImg" src={side} alt="sideImg" ></img>
    </div>
   )

 }

export default Sidebar