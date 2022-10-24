import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    // add index of active link to navbar-container on page load
    // if called only once it stops working after a page refresh
    window.onload = () => {
       const navbarContainer = document.getElementById("navbar-container")

        // create array of items in navbar and add index to navbar-container showing active element
        Array.from(document.getElementsByClassName("navbar-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                navbarContainer.dataset.activeIndex = index;
            }
        });
    };
  return (
    <div id='navbar-container'>
        <nav id='navbar'>
            <div className='navbar-item'><Link to='/Home'>Home</Link> </div>
            <div className='navbar-item'><Link to='/skills'>Skills</Link></div>
            <div className='navbar-item'><Link to='/projects'>Projects</Link></div>     
            <div className='navbar-item'><Link to='/aboutMe'>About Me</Link></div>
        </nav>
        <div id='navbar-background-pattern'></div>
        <div id='navbar-background-image'></div>
    </div>
    );
}

export default Navbar