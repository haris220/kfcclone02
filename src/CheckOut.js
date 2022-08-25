import { useSelector } from 'react-redux';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




 

const CheckOut = () => {
 
  
  
  const cart = useSelector((state) => state.cart);
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
    const [Number, setNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState('')
    const [Zcode, setZcode] = useState('')
    const Status= 'Pending'
    let meow = JSON.parse(localStorage.getItem("cartItems"))
    let OrderdItems = meow
    let OrderdPrice = JSON.parse(cart.cartTotalAmount);
    console.log(OrderdItems)
    
    
    const [error, setError ] = useState(false)
    const navigate = useNavigate();


    const collectData = async (event) =>{
      event.preventDefault();
      

      if (!Lname || !Fname || !Email || !Number || !Address || !Zcode  || Number.length < 10 || Number.length > 13 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(Email)){
         
 console.log('error function activated')
 
        setError(true);
        return false;
        

 
       }
       
       console.log(Number);
      
  

      let result = await fetch('http://localhost:7000/ordersreceived',{
          method: 'post',
          body: JSON.stringify({Fname, Lname , Email, Number ,Address, City,  Zcode, Status, OrderdPrice, OrderdItems }),
          headers: { 
              'Content-Type': 'application/json'
          }
      });

      result = await result.json();
      console.log(result);
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartAmount');
      
   //  dispatch(cleareverything());
        alert("Your Order Has Been Placed, Thank-You")
       navigate('/ala-carte-and-combos')
       window.location.reload(false);
  }
 console.log(cart)
 
 
 



  return (
    <>
    <div className='container'> 
   
    <div className='col justify-content-center  d-flex' style={{marginBottom : '50px',marginTop: '20px'}}> 
    <h2>Fill This Form To Place Your Order</h2></div>
    {cart.cartItems.length === 0 ? (
   
   <h3>Your cart is currently empty</h3>
   ) : (
    <form>
  <div className="row">
    <div className="col-md-8"><h4>Contact Information</h4>
      <input type='Number'  value={Number} onChange={(event) =>setNumber(event.target.value)} className="form-control" placeholder="Mobile Phone Number" />
      <p style={{fontSize:"13px"}}>We’ll send you an order receipt and recurring shipping updates via text message. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our Privacy policy and Terms of service.</p>
    </div>
    </div>
    {error && !Number   &&<p style={{color:"red",justifyContent:'flex-end'}}> Enter Valid Number! </p>}
    {(Number.length <10 || Number.length > 14) && error   &&<p style={{color:"red",justifyContent:'flex-end'}}>  Numbers must be more than 10 and less than 14 </p>}
    
    <h4 style={{marginTop:"70px"}}> Delivery Address</h4>
    <div className="row">
    <div class="form-group col-md-4">
      <label for="inputState"><h6>Country/Region</h6></label>
      <select id="inputState" class="form-control">
        <option disabled selected>Choose Your Country</option>
        <option >PAKISTAN</option>
      </select>
    </div>
</div>

<div style={{marginTop:"30px"}}className="row">
    <div className="col-md-4"><h6>First Name</h6>
      <input type='text' value={Fname} onChange={(event) =>setFname(event.target.value)} className="form-control" placeholder="First Name" />
      {error && !Fname   &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter First Name! </span>}
      </div>
    <div   className="col-md-4"><h6>Last Name</h6>
      <input type='text' value={Lname} onChange={(event) =>setLname(event.target.value)} className="form-control" placeholder="Last Name" />
      {error && !Lname   &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter Last Name! </span>}
      </div>
    </div>
    <div style={{marginTop:"30px"}} className="col-md-8"><h6>Delivery Address</h6>
      <input type='text' value={Address} onChange={(event) =>setAddress(event.target.value)} className="form-control" placeholder="1234 Main ST" />
      {error && !Address   &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter Delivery Address </span>}
      </div>
      <div style={{marginTop:"30px"}}className="row">
      <div class="form-group col-md-4">
      <label value={City} onChange={(event) =>setCity(event.target.value)} for="inputState"><h6>City</h6></label>
      <select id="inputState" class="form-control">
        <option selected disabled>Choose Your City</option>
        <option>Lahore</option>
        <option>Islamabad</option>
        <option>Karachi</option>
        <option>Faislabad</option>
        <option>Multan</option>
        <option>Peshawar</option>
        <option>Sialkot</option>
        <option>Quetta</option>

      </select>
    </div>
    <div   className="col-md-4"><h6>ZIP Code</h6>
      <input type='number' value={Zcode} onChange={(event) =>setZcode(event.target.value)} className="form-control" placeholder="00000" />
      {error && !Zcode && Zcode.length !==5   &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter 5 digit ZIP Code </span>}
      </div>
    </div>

    <div  style={{marginTop:"30px"}} className="col-md-4"><h6>Email</h6>
      <input type='Email' value={Email} onChange={(event) =>setEmail(event.target.value)} className="form-control" placeholder="abc@test.com" />
      {error && !Email &&  !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(Email) &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter Valid Email Address </span>}
      </div>



      <div className="col-md-8"><h4 style={{marginTop:"70px"}}>Payment Method</h4>
      <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Cash On Delivery
  </label>
</div>

      </div>
      <h3>Your Total Bill Will Be :PKR {cart.cartTotalAmount}</h3>


      <div className='col justify-content-center  d-flex' >  
    <button onClick={collectData} type="sumbit" style={{border: "none" ,backgroundColor: '#000000', /* Green */
  border: 'none',
  color: 'white',
  padding: '15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '3px 2px',
  cursor: 'pointer',
  borderRadius: '05%',
  marginTop : '30px'
}}>  COMPLETE ORDER</button>
  </div>
 
    
    
  


    
  
</form>)}


      </div>
    </>
  )
}

export default CheckOut