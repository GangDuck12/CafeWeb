import React from 'react';
import './style.css';


/**
* @author
* @function HomeCoffee
**/

const HomeCoffee = (props) => {
  return(
    <div className="HomeCoffee">
        <h2>Coffee Beans</h2>
        <p>It is a popular blend that anyone can drink comfortably and a bean that can taste the taste of singles.</p>
        <div className="beans">
            <div className="Ble">
                <h3>Roasting Wear Dynamic Blend</h3>
                <p>It is a popular blend that anyone can drink comfortably, and the balance between the sweetness of dark chocolate and a profound body feel is good.</p>
            </div>
            <div className="Ori">
                <h3>Single Origin</h3>
                <p>You can feel popular beans and beans that you have often encountered with blending beans.</p>
            </div>
        </div>
    </div>
   )

 }

export default HomeCoffee