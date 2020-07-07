import React,{ useState} from 'react';
import map from '../../../images/map.jpg';
import './style.css';

/**
* @author
* @function Store
**/

const Store = (props) => { 
  console.log('store render');

  const [newyork,setNewyork] = useState(false);
  const [la,setLa] = useState(false);
  const [ld,setLd] = useState(false);
  const [su,setSu] = useState(false);
  const [zr,setZr] = useState(false);
  const [hk,setHk] = useState(false);
  const [mb,setMb] = useState(false);

  const activeNY = () => {
    setNewyork(!newyork);
  }  
  const activeLA = () => {
    setLa(!la);
  }  
  const activeLD = () => {
    setLd(!ld);
  }  
  const activeSU = () => {
    setSu(!su);
  }  
  const activeZR = () => {
    setZr(!zr);
  }  
  const activeHK = () => {
    setHk(!hk);
  }  
  const activeMB = () => {
    setMb(!mb);
  }  

  const NewYork =newyork? 'NewYork active':'NewYork';
  const LA =la? 'LA active':'LA';
  const London =ld? 'London active':'London';
  const Seoul =su? 'Seoul active':'Seoul';
  const Zurich =zr? 'Zurich active':'Zurich';
  const Hongkong =hk? 'Hongkong active':'Hongkong';
  const Melbourne =mb? 'Melbourne active':'Melbourne';

  return(
    <div className="Store">
      <div className="storeTitle">
        <h2>
          Worldwide store locations
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum dui, accumsan a fringilla ut, dignissim vitae quam. Vivamus ac mollis ex. Integer tristique interdum ullamcorper. Donec vehicula nibh id dolor vehicula consectetur. Pellentesque pharetra, magna vitae blandit congue,</p>
      </div>
      <img src={map} alt=""></img>  
      <button className={NewYork} style={{top:'48%' ,left:'27%'}} onClick={activeNY}>
      </button>  
      <button className={LA} style={{top:'52%' ,left:'18%'}} onClick={activeLA}>
      </button>  
      <button className={London} style={{top:'40%' ,left:'47%'}} onClick={activeLD}>
      </button>  
      <button className={Seoul} style={{top:'47%' ,left:'80%'}} onClick={activeSU}>
      </button>  
      <button className={Zurich} style={{top:'42%' ,left:'50%'}} onClick={activeZR}>
      </button>  
      <button className={Hongkong} style={{top:'52%' ,left:'79%'}} onClick={activeHK}>
      </button>  
      <button className={Melbourne} style={{top:'75%' ,left:'83%'}} onClick={activeMB}>
      </button>  
    </div>
   )

 }

export default Store