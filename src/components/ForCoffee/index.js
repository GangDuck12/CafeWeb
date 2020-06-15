import React from 'react';
import './style.css';

/**
* @author
* @function ForCoffee
**/

const ForCoffee = (props) => {
  return(
    <div className="ForCoffee">
      <div className="wayTitle">
        <h1>Efforts for coffee</h1>
        <p>People, memories and coffee. Everyone looks at a space that is a memory.</p>
      </div>
      <div className="contents">
        <div className="contents1">
          <div className="fac1"></div>
          <div className="fac2"></div>
        </div>
        <div className="contents2">
          <div className="fac3"></div>
          <div className="fac4"></div>
        </div>
        <div className="contents3">
          <div className="infor">
            <h3>open</h3>
            <p>10:00</p>
            <h3>close</h3>
            <p>00:00</p>
          </div>
        </div>
      </div>
    </div>
   )

 }

export default ForCoffee