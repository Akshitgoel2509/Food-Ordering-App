// import React,{useState} from 'react'



// const Carousel = () => {
//   const [search, setSearch] = useState('');
//   return (
//     <>
//       <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//   <div className="carousel-indicators " style={{zIndex:"11"}}>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner" id='carousel'>
//     <div className="carousel-caption" style={{zIndex:"10"}}>
//   <div className="d-flex justify-content-center">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
//       {/* <button className="btn btn-outline-success text-white border-3 border-success " type="submit">Search</button> */}
//     </div>
//     </div>
//     <div className="carousel-item active">
//       <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="d-block w-100" alt="..." style={{"filter":"brightness(40%)"}}/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="d-block w-100" alt="..."style={{"filter":"brightness(40%)"}}/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="d-block w-100" alt="..."style={{"filter":"brightness(40%)"}}/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     </>
//   )
// }

// export default Carousel

import React, { useState } from 'react';


const Carousel = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', search);
    // Add your search logic here
  };

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: 'contain !important' }}
      >
        <div className="carousel-indicators" style={{ zIndex: '11' }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: '10' }}>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-success text-white border-3 border-success"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
              className="d-block w-100"
              alt="..."
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
              className="d-block w-100"
              alt="..."
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
              className="d-block w-100"
              alt="..."
              style={{ filter: 'brightness(40%)' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
