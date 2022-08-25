import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SecondNavbar from './SecondNavbar'
import { useParams } from 'react-router-dom'




const ViewProducts = () => {
    const [user, setUser] = useState([])

    useEffect(() =>{
            getUsers();
    },[])

    const getUsers = async () =>{

        let result = await fetch('http://localhost:7000/all-products');
        result = await result.json();

        if(result){
            setUser(result)
        }else{
            console.log("No Record Found")
        }
    }

    // for deleting products detail / information from database

    

   /* const delproducts = async (id) =>{
      let result = await fetch(`http://localhost:7000/all-products/${id}`,{
       method:"Delete"
      });
      result = await result.json()
      if(result)
      {
       alert("are u sure , u want to delete it"),getUsers()
     }
*/
    
       
     const delproducts = async (id) =>{
      let result = await fetch(`http://localhost:7000/all-products/${id}`,{
       method:"Delete"
      });
      result = await result.json()
      
      if(result){getUsers()
       }}
      


        

   
      
   

 
    
  
    
    
    
  return (
    <>
  
    
    
    
  

<div className="container">
<SecondNavbar/>
      

<div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
          <h2>All Products Are Displayed Here</h2>
       </div>


      <div className="row">


         {
      user.map(obj=>{
        return(
          <div className="col col-sm-6 col-md-4 col-lg-3 g-3">
        <div className="card" style={{width: '17rem', marginLeft: '0px'}}>
  
  <h3>Product Id:{obj.Id}</h3>
  
  <div className="card-body">
  <>Cart: {obj.Cart}</>
  <h5 className="card-title" style={{textDecoration:"none"}}>{obj.Name}</h5>
    <p className="card-text">{obj.Description}</p>
    <p className="card-text">Price :{obj.Price}</p>

    
    
    <button onClick={() =>delproducts(obj._id)} className='btn btn-outline-danger '>
                                    <p>Remove </p>
                                </button>
    
                                
                                 <Link to ={`/registration/admin-panel/update/${obj.Id }`} ><a href="#" style={{marginLeft: '1px',height: '55px'}} className="btn btn-outline-success">
            Update
          </a></Link> 

  </div>
</div>  
        </div>
      )
      })

    }
    </div>
    </div>
    





  
   
    </>
  )
}

export default ViewProducts;
