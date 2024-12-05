import React from 'react'
import Logo from '../assets/Logo.jpeg'
import "./HomeNavbar.css"


export default function HomeNavbar() {
  return (
    <div>
            <nav className="nav-bar">
        <div className="nav-bar-container">
            <a className="nav-bar-home" href="#">
            <img src={Logo} alt="Logo" width="30" height="24" className="nav-bar-logo"/>
            <p className="nav-bar-title">Blue Sentinel</p>
            </a>
        </div>
        <div className="nav-bar-content">
            <a href="">Home</a>
            <a href="#edu-cation">Features</a>
            <a href="#Con-tact">Contact</a>
            <a href="">Others</a>
        </div>
</nav>
   
    </div>

   )
}
