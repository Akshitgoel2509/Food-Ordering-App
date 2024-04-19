import React, { useContext,useState } from "react";
// import { counterContext } from "./context";
import { NavLink,useNavigate } from "react-router-dom";
// import letseat from "../photos/lets-eat.svg"
import Badge from 'react-bootstrap/Badge'
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./context";

const Navbar = () => {
  let data=useCart();
  // const image = useContext(counterContext);
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }
  const [cartview, setcartview] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-md bg-success ">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white fs-1 fst-italic" to="/">
           {/* <img src={letseat} alt="LetsEAT" style={{width:"40" ,height:"24",paddingRight:"10px"}} /> */}
           <h1>LetsEAT</h1>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <NavLink className="nav-link text-white active fs-5 ms-2 " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {(localStorage.getItem("authToken"))
                ? <NavLink className="nav-link text-white active fs-5 ms-2" aria-current="page" to="/myOrder">
                  My Order
                </NavLink>
                : ""}
              </li>
            </ul>
            {(localStorage.getItem("authToken")) ? 
            <div>
            <div className="btn bg-white text-success mx-2" onClick={()=>{setcartview(true)}}>
              My Cart &nbsp;
              <Badge pill bg="danger"> {data.length} </Badge>
              </div>
              {cartview?<Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
            <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
            </div>
            :
            <div className=" d-sm-inline-flex ">
                <NavLink className="btn bg-white text-success mx-1 rounded " to="/login">
                  Login
                </NavLink>
                <NavLink className="btn bg-white text-success mx-1 rounded" to="/createuser">
                  SignUp
                </NavLink>
            </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
