import React from "react";
import SecondNavbar from "./SecondNavbar";
import { useState, useEffect } from "react";

const OrdersReceived = () => {
  
  const [meow, setmeow] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let result = await fetch("http://localhost:7000/all-orders");
    result = await result.json();

    if (result) {
      setmeow(result);
     
    } else {
      console.log("No Record Found");
    }
  };
    function changeStatus(id){
     let duplicateArray = [...meow] 
     console.log(duplicateArray)
     let index= meow.findIndex(meow=> meow._id===id);
    duplicateArray[index] = {...meow[index], Status: "Delieverd"} 
    setmeow(duplicateArray);
     console.log(meow)
    }
    
   
  return (
    <><div className="container">
      <SecondNavbar />
      
      {meow.map((x , index) => (
        <>
         <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
    <h2 style={{marginTop: '100px'}}>Order Number {index + 1} </h2>
 </div>
 
          <h3>
            Buyer Details :
          </h3>
          <h5>
            Name : {x.Fname} {x.Lname}
          </h5>
          <h5>
            Cell Number : {x.Number}
          </h5>
          <h5>
            Delivery Address : {x.Address}
          </h5>
          <h5>Total Order Price : {x.OrderdPrice}</h5>
          
          <div className='col justify-content-center  d-flex'>
          <h1 >Status :    </h1>  
          
          <h1><button className="btn btn-danger" onClick={() =>changeStatus(x._id)}>{x.Status}</button>      </h1>
          </div><div>
          <table className="table table-striped">
      <thead>
        <tr>
          
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
            
        </tr>
      </thead>
      <tbody>  
            {x.OrderdItems.map((L) => (<>
              
      
      
              <tr>
              <td>{L.Name}{L.AddOnQty > 0 && <span> + Add On : PC Chicken </span>}</td>
                                <td >PKR : {L.Price  } {L.AddOnQty > 0 && <span> + { 210}</span>}  </td>
                                <td >{L.ItemQty} { L.AddOnQty > 0 && <span> + {L.AddOnQty}</span>}</td>
                                <td >{L.ItemPrice}</td>
                                
                                </tr>
       </>  
                                ))}</tbody></table> 
              
          </div><hr style= {{height:'5px',borderWidth: '0',color:'blue',backgroundColor:'blue'}}/>
        </>
      ))}
   </div> </>
  );
};

export default OrdersReceived;
