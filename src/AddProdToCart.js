import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addToCart, decreaseCart, getTotals } from "./CartSlice";


const Store = () => {

  const navigate = useNavigate()

  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/addprodtocartdisplayed")
    
  };
  useEffect(() =>{
    getUsers();
  },[])
 
  
  const [user, setUser] = useState([]); 
  
  const getUsers =  () =>{

    fetch('http://localhost:7000/all-products')
    .then((res)=>{if(res.ok){
    return res.json();
    }else{console.log("res error");}})
    .then((paremproduct)=>{
    const filteredparemproduct = paremproduct.find((item)=>item.Id ===  1);
    //console.log(newUser);
    setUser(filteredparemproduct)
    })
    .catch((err) => console.log(err));}
    const product = user
    const cart = useSelector((state) => state.cart);
    console.log(cart)
  


  return (
    <>
    <div className="home-container">
      
       
          <h2>New Arrivals</h2>
          <div className="products">
            {
            
                <div key={product.Id} className="product">
                  <h3>{product.Name}</h3>
                  
                  <div className="details">
                    <span>{product.Description}</span>
                    <span className="price">${product.Price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              }
          </div>
        
      
    </div> 
    </>  );
 
}; 

export default Store;