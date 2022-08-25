import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  removeFromCart, getTotals } from "./CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
 
 
  const cart = useSelector((state) => state.cart);
//  const dispatch = useDispatch();

 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getTotals());
}, [cart, dispatch ]);
 // const handleAddToCart = (product) => {
  //  dispatch(cartActions.addToCart(product));
  console.log(cart)
//  let sum = 0
//  for(let i = 0; i < cart.cartItems.length; i++){
 //   sum  += cart.cartItems[i].ItemPrice
    
    
 // }console.log(sum)
  
  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="container">
    <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
          <h2 style={{marginTop: '80px'}}>SHOPPING CART</h2>
       </div>
  {cart.cartItems.length === 0 ? (
   
      <h3>Your cart is currently empty</h3>
      ) : (<div>
      <table className="table table-striped">
      <thead>
        <tr>
          
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          
          <th scope="col">Total</th>          
        </tr>
      </thead>
      
      <tbody>
            {
                cart.cartItems.map((cartItem) => (
                        
                            <tr key={cartItem._id}>
                                
                                <td><img style={{width : '15rem'}} src={cartItem.source} className="card-img-top" alt="..." />{cartItem.Name} ({cartItem.ItemQty}){cartItem.AddOnQty > 0 && <span> + Add On : PC Chicken ({cartItem.AddOnQty})</span>}</td>
                                <td style={{paddingTop : '70px'}}>{cartItem.ItemQty} { cartItem.AddOnQty > 0 && <span> + {cartItem.AddOnQty}</span>}</td>
                                <td style={{paddingTop : '70px'}}>PKR : {cartItem.Price *  cartItem.ItemQty } {cartItem.AddOnQty > 0 && <span> + {cartItem.AddOnQty * 210}</span>}  </td>
                               
                                <td style={{paddingTop : '70px'}}>{cartItem.ItemPrice}</td>  
                                <button style={{textColor: 'red'}} className="btn btn-outline-danger" onClick={() => handleRemoveCart(cartItem)}>X</button>
                            </tr>
                            
                        
                ))
            }
            </tbody>
    </table>
    <h1>Your Total Bill Will be {cart.cartTotalAmount}</h1>
    <h1>Total Number of Products {cart.cartTotalQuantity}</h1>
     <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
  <Link to={'/checkout'}>  <button style={{border: "none" ,backgroundColor: '#000000', /* Green */
  border: 'none',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '50%',
}}>  Check Out</button></Link>
  </div>
    
    
  </div>)}
</div>

    
    
    
    
    
    /*(<div className="cart-container">
  <h2>Shopping Cart</h2>
  {cart.cartItems.length === 0 ? (
    <div className="cart-empty">
      <p>Your cart is currently empty</p>
      <div className="start-shopping">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <span>Start Shopping</span>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <div className="titles">
        <h3 className="product-title">Product: {cart.cartItems.Name}</h3>
        <h3 className="price">Price</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      <div className="cart-items">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <div className="cart-item" >Name{cartItem.Name}
              
              
              <div className="cart-product-quantity">
                
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={() => handleAddToCart(cartItem)}>+</button>
              </div>
              <div className="cart-product-total-price">
                ${cartItem.price * cartItem.cartQuantity}
              </div>
            </div>
          ))}
      </div>
      
    </div>
  )}
</div>*/);
};

export default Cart;
