import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
      <> 
      

      



<div className="card" >
  <img src={props.newData.source} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.newData.Name}</h5>
    <p className="card-text">{props.newData.Description}</p>
    <a href="#" style={{height: '35px'}} className="btn btn-danger">{props.newData.Price}</a>
    <Link to ={`/snacks/${props.newData.Id }`} >  <a href="#" style={{marginLeft: '1px',height: '35px'}} className="btn btn-outline-danger">
            Add to Bucket
          </a></Link>
  </div>
</div>

</>)}

const Snacks = () => {
    const [user, setUser] = useState([])

    useEffect(() =>{
            getUsers();
    },[])

    const getUsers = async () =>{

        let result = await fetch('https://kfcclone220.herokuapp.com/all-products');
        result = await result.json();

        if(result){
            setUser(result)
        }else{
            console.log("No Record Found")
        }
    }

    // for deleting user detail / information from database

    

      // write your logic to delete from the FrontEnd 
      
     let filteredmf = user.filter(OnlySignature);
     function OnlySignature(user){
      return user.Cart === 'SNACKS'
     }
    console.log(filteredmf)
  return (
    <>
    
  

<div className="container">

<div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
          <h2>Snacks</h2>
       </div>


      <div className="row">


         {
      filteredmf.map(obj=>{
        return(
          <div className="col-sm-12 col-md-4 col-lg-3  g-3">
        <Card newData={obj}/>
        </div>
      )
      })

    }
    </div>
    </div>





  
   
    </>
  )
}

export default Snacks;
