import React from 'react';
import './style.css';

/**
* @author
* @function Coffee
**/

const Coffee = (props) => {
  return(
    <div className="coffee">
        <h2>Coffee</h2>
        <div className="coffeeG">
          <ul>
              <li>Espresso</li>
              <li>Americano</li>
              <li>Cappuccino</li>
              <li>Cafe Latte</li>
          </ul>
          <ul>
            <li>Caramel Macchiato</li>
            <li>Vanilla Latte</li>
            <li>Cafe Mocha</li>
            <li>Hand Drip</li>
          </ul>
        </div>
    </div>
   )

 }

export default Coffee