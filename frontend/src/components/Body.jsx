import React from 'react'
import "./Body.css"
import water2 from '../assets/water2.jpg'
import water3 from '../assets/water3.jpg'
import water4 from '../assets/water4.jpg'


export default function Body() {
  return (
    <div>
                <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={water2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Marine Sustainability</h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src={water3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Marine Ecosystem</h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src={water4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Blue Sentinel</h5>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}