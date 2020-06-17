import React ,{useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    console.log('navbar render');
    const[search,setSearch] =useState(false);
    const[toggleOn,setToggle] =useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched!!');
    }

    const openSearch = () =>{
        setSearch(!search);
    }

    const toggle = () =>{
        setToggle(!toggleOn);
    }
    
    const searchClass = search? 'searchInput active' : 'searchInput';

    const toggleClass = toggleOn? 'toggle active': 'toggle';
    
    const navCon = toggleOn? 'navCon active': 'navCon';
    

  return(
    <div className="navbar">
        <div className={navCon}>
            <ul>
                <li><NavLink to="/menu" onClick={toggle}>Menu</NavLink></li>
                <li><NavLink to="/store" onClick={toggle}>Store</NavLink></li>
                <li><NavLink to="/new" onClick={toggle}>New</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input className={searchClass} type="text" placeholder="Search"></input>
                    <img onClick={openSearch} className="searchIcon" src={require("../../icons/search.png")} alt=""></img>
                </form>
            </div>
        </div>
        <div className="toggleIn">
            <div className={toggleClass} onClick={toggle}></div>
        </div>
    </div>
   )

 }

export default Navbar