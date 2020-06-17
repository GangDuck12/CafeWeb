import React,{ useState } from 'react';
import './style.css';

/**
* @author
* @function Space
**/

const Space = (props) => {
  console.log('space render');
  return(
    <div className="Space">
      <div className="title">
          <h1>Bean Type</h1>
          <p>coffee style</p>
      </div>
        <div className="contents">
          <div className="leftCon">
            <h2>Brazil Santos</h2>
            <p>Aroma Sweet Body</p>
            <h2>Colombia Supremo</h2>
            <p>Aroma Acidity Body</p>
            <h2>Guatemala Antigua</h2>
            <p>Aroma Acidity Bitterness Body</p>
            <h2>Kenya AA</h2>
            <p>Acidity Body</p>
          </div>
          <div className="centerCon">
            <h2>Ethiopia Yirgacheffe</h2>
            <p>Acidity Aroma Sweet Body</p>
            <h2>Indonesia Mandheling</h2>
            <p>Body Bitterness</p>
          </div>
          <div className="rightCon">
            <h2>Costarica Tarrazu</h2>
            <p>Body Acidity</p>
            <h2>Ethiopia Harrar</h2>
            <p>Aroma Acidity Sweet</p>
          </div>
        </div>
    </div>
   )
 
 }

export default Space
