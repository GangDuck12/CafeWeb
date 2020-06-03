import React from 'react';
import './style.css';

/**
* @author
* @function Beverage
**/

const Beverage = (props) => {
  return(
    <div className="beverage">
        <h2>Beverage</h2>
        <div className="beverageG">
          <ul>
              <li>Iced Tea</li>
              <li>Strawberry smoothie</li>
              <li>Mango smoothie</li>
              <li>Lemonade</li>
          </ul>
          <ul>
            <li>Chocolate Latte</li>
            <li>Green Tea Latte</li>
            <li>Black Tea Latee</li>
            <li>Orange Juice</li>
          </ul>
        </div>
    </div>
   )

 }

export default Beverage