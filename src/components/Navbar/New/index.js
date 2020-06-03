import React,{ useState } from 'react';
import img1 from '../../../images/21.jpg';
import img2 from '../../../images/22.jpg';
import img3 from '../../../images/23.jpg';
import img4 from '../../../images/24.jpg';
import img5 from '../../../images/25.jpg';
import img6 from '../../../images/26.jpg';
import img7 from '../../../images/27.jpg';
import img8 from '../../../images/28.jpg';
import img9 from '../../../images/29.jpg';
import img10 from '../../../images/cafeLatte.jpg';
import './style.css';

/**
* @author
* @function New
**/

const New = (props) => {

  const[data,setData] = useState([
    {id:1, img:(img1), title:"1stNew", desc:"description"},
    {id:2, img:(img2), title:"2ndNew", desc:"description"},
    {id:3, img:(img3), title:"3rdNew", desc:"description"},
    {id:4, img:(img4), title:"4rdNew", desc:"description"},
    {id:5, img:(img5), title:"5thNew", desc:"description"},
    {id:6, img:(img6), title:"6thNew", desc:"description"},
    {id:7, img:(img7), title:"7thNew", desc:"description"},
    {id:8, img:(img8), title:"8thNew", desc:"description"},
    {id:9, img:(img9), title:"9thNew", desc:"description"},
    {id:10, img:(img10), title:"10thNew", desc:"description"}
  ]);

  return(
    <div className="New">
      <div className="newHeader">
        News about coffee
      </div>
      <div className="newContents">
        <div className="newC1">
            <img src={data[0].img} style={{width:'80%'}}></img>
          <h3>{data[0].title}</h3>
          <p>{data[0].desc}</p>
            <img src={data[3].img} style={{width:'80%'}}></img>
          <h3>{data[3].title}</h3>
          <p>{data[3].desc}</p>
            <img src={data[6].img} style={{width:'80%'}}></img>
          <h3>{data[6].title}</h3>
          <p>{data[6].desc}</p>
        </div>
        <div className="newC2">
            <img src={data[1].img} style={{width:'80%'}}></img>
          <h3>{data[1].title}</h3>
          <p>{data[1].desc}</p>
            <img src={data[4].img} style={{width:'80%'}}></img>
          <h3>{data[4].title}</h3>
          <p>{data[4].desc}</p>
            <img src={data[7].img} style={{width:'80%'}}></img>
          <h3>{data[7].title}</h3>
          <p>{data[7].desc}</p>
            <img src={data[9].img} style={{width:'80%'}}></img>
          <h3>{data[9].title}</h3>
          <p>{data[9].desc}</p>
        </div>
        <div className="newC3">
          <img src={data[2].img} style={{width:'80%'}}></img>
          <h3>{data[2].title}</h3>
          <p>{data[2].desc}</p>
          <img src={data[5].img} style={{width:'80%'}}></img>
          <h3>{data[5].title}</h3>
          <p>{data[5].desc}</p>
          <img src={data[8].img} style={{width:'80%'}}></img>
          <h3>{data[8].title}</h3>
          <p>{data[8].desc}</p>
        </div>
      </div>
    </div>
   )

 }

export default New