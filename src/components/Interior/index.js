import React,{ useState } from 'react';
import img9 from '../../images/9.jpg';
import img10 from '../../images/10.jpg';
import img12 from '../../images/12.jpg';
import img14 from '../../images/14.jpg';
import './style.css';

/**
* @author
* @function Interior
**/

const Interior = (props) => {
  console.log('interior render');
  return(
    <div className="Interior">
        <div className="int">
            <h1>Lorem ipsum</h1>
            <input type="radio" name="r" id="f2" readOnly checked></input>
            <input type="radio" name="r" id="f3" readOnly checked></input>
            <input type="radio" name="r" id="f4" readOnly checked></input>
            <input type="radio" name="r" id="f1" readOnly checked></input>
            <div className="slide s1">
              <img src={img9} alt=""></img>
            </div>
            <div className="slide s2">
              <img src={img10} alt=""></img>
            </div>
            <div className="slide s3">
              <img src={img12} alt=""></img>
            </div>
            <div className="slide s4">
              <img src={img14} alt=""></img>
            </div>
        <div className="navigation">
            <label htmlFor="f1" className="bar"></label>
            <label htmlFor="f2" className="bar"></label>
            <label htmlFor="f3" className="bar"></label>
            <label htmlFor="f4" className="bar"></label>
        </div>
        </div>
    </div>
   )

 }

export default Interior