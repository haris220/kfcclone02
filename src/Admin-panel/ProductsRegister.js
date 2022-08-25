import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import SecondNavbar from './SecondNavbar';

const ProductsRegister = () => {

    const navigate = useNavigate();

   

    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Id, setId] = useState('');
    const [Cart, setCart] = useState('');
    const [Price, setPrice] = useState('');

    // http://localhost:7000/register

    const registerUser = async (event) =>{

        event.preventDefault();
        // console.log(name, email, password);
        //
    

        let result = await fetch('http://localhost:7000/registerproducts',{
            method: 'post',
            body: JSON.stringify({Name, Description, Id, Price,Cart}),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        result = await result.json();
        console.log(result);
        navigate('/registration/admin-panel/products-detail');

        // if(result){
            // alert("You are successfully registered")
           

        // }
        // else{
        //     alert("invalid credentials")
    }

    return (

      <div className='container mt-5'>
        <SecondNavbar/>
      <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
          <h2>Register New Products Here</h2>
       </div>
      
    <form>
              <div className="mb-3">
                  <label htmlFor="exampleInputName1" className="form-label">Name</label>
                  <input type="text" required name='Name' value={Name} onChange={(event) =>setName(event.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                  <input type="text" required name='Description' value={Description} onChange={(event) =>setDescription(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
                  <input type="Number" required name='Id' value={Id} onChange={(event) =>setId(event.target.value)} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Cart</label>
                  <input type="Text" placeholder="For Example: SIGNAUTE,ALACART,SNAKCS,SHARING,MIDNIGHT" required name='Cart' value={Cart} onChange={(event) =>setCart(event.target.value)} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                  <input type="Text" required name='price' value={Price} onChange={(event) =>setPrice(event.target.value)} className="form-control" id="exampleInputPassword1" />
              </div>
     

              
    
          <button onClick={registerUser} type="submit" className="btn btn-primary">Register</button>
    
  </form>
  
  
      </div>
    )
  }
  
  export default ProductsRegister;