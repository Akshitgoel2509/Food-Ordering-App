import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
import Footer from  "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";

const Home = () => {
  
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search, setsearch] = useState("") 

  const loadData=async()=>{
    let response= await fetch("http://localhost:4000/api/foodData",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    })
    response=await response.json();
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])
  

  return (
    <>
      <div><Navbar/></div>
      <div> <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-indicators " style={{zIndex:"11"}}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
  <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white border-3 border-success " type="submit">Search</button> */}
    </div>
    </div> 
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/800×500/?burger" className="d-block w-100 " alt="..." style={{"filter":"brightness(40%)",objectFit:"cover"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/800×500/?fruits" className="d-block w-100" alt="..."style={{"filter":"brightness(40%)",objectFit:"cover"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/800×500/?pastry" className="d-block w-100" alt="..."style={{"filter":"brightness(40%)",objectFit:"cover"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      <div className="container">
        {
          foodCat!=[] && foodCat.map((data)=>{
            return (
              <div key={data._id} className="row mb-3 justify-content-around ">
              <div  className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr/>
              {foodItem!=[]? foodItem.filter((item)=>item.CategoryName===data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))
              .map(filterItem=>{
                return(
                  <div key={filterItem._id} className="col-7 col-md-5 col-lg-4  ">
                    <Card 
                     foodItem={filterItem} 
                     options={filterItem.options[0]}  
                    //  desc= {filterItem.description}
                    ></Card>
                  </div>
                )
              })
              :<div>No such Data Found</div>
              }
              </div>
            )
          })
        }
      </div>
      <div><Footer/></div>
    </>
  );
};

export default Home;
