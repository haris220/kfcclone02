import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const SecondNavbar = () => {
  const navigate = useNavigate();
  function logoutHandler(){
    localStorage.clear();
    navigate('/registration');
    
  }
  return (
    <>
      <div className='container'>
      <h1 className='text-success text-center fw-bold fs-2 mt-5'>Admin-Panel</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">



              
              <li className="nav-item">
                <Link className="nav-link" to="/registration/admin-panel/users-detail">
                  View Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration/admin-panel/register-products">
                  PRDOUCTS ENROLLING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration/admin-panel/products-detail">
                  PRDOUCTS DETAILS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration/admin-panel/orders-details">
                  ORDERS DETAILS
                </Link>
              </li>
              
              <li className="nav-item" >
                <button className="nav-link "  style={{color:"white",fontWeight : '600', fontSize : '18px',backgroundColor :"#0d6efd",border: "none"}}  onClick={logoutHandler} >
                  Log-Out 
                </button>
                </li>


              
              
            </ul>
            
          </div>
       </nav>  </div>
     
      
    </>
  );
};

export default SecondNavbar;
