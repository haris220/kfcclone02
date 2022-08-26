import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
<div className='container' >
  <div classname="container" >
    <div className='row justify-content-between align-items-end'>
           <div className='col-sm-2  justify-content-start  d-flex'>  
          <img src="./images/kfc.png" width="150px" height="100px"  /></div>
     <div className="col-md-4 col-sm-4  justify-content-end d-flex " >
         <span>To Access Admin-Panel Click Sign-In</span>
            <Link className="nav-link active link-dark" href="#" style={{fontWeight : '700'}} to="registration" >SIGN IN</Link>
     </div>
    </div>
       </div>
    
  
 
      
       

        
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <p className="navbar-toggler-icon"style={{color:"black"}}>MENU</p>
          </button>


          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
          <ul className="navbar-nav  mb-2 mb-lg-0 text-center ">



              
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color:"black",fontWeight : '600', fontSize : '18px'}} to="everyday-value">EVERYDAY VALUE</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active"  style={{color:"black",fontWeight : '600', fontSize : '18px'}} to="ala-carte-and-combos"> ALA CARTE COMBOS </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active "  style={{color:"black",fontWeight : '600', fontSize : '18px'}} to="signature-boxes" >SIGNATURE BOXES</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active"  style={{color:"black",fontWeight : '600', fontSize : '18px'}} to="sharing">SHARING</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active"  style={{color:"black",fontWeight : '600', marginRight:'40px',fontSize : '18px'}} to="snacks">SNACKS</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active"  style={{color:"black",fontWeight : '600',fontSize : '18px'}} to="midnight-deals-starts-1200am" >MIDNIGHT DEALS</Link>
              </li>
             
              
             


              
              
            </ul>
           
          </div>
       </nav>  
        
         
        
        
        
        
        
     









</div>



    </>
  )
}

export default Header