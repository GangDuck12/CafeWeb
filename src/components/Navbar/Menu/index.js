import React from 'react';
import './style.css';
import Coffee from './Coffee';
import Beverage from './Beverage';
import Dessert from './Dessert';

/**
* @author
* @function Menu
**/

const Menu = (props) => {
  console.log('menu render');
  return(
    <div className="Menu">
      <div className="menuBack">
        <div className="menuTitle">Menu</div>
        <Coffee />
        <Beverage />
        <Dessert />
      </div>
    </div>
   )

 }

export default Menu