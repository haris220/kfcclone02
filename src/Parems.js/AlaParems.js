import  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals } from "../CartSlice";



const data = [
  {
    id : 0,
    name: "Pc Chicken",
    qty: 0,
    Price: 210,
  }
];




 


const Alaparems = () => {

  const dispatch = useDispatch();
  const cartnine = useSelector((state) => state.cart);
  console.log(cartnine);

  //for loading the Product on page
  const [user, setUser] = useState([]); 
 useEffect(() =>{
  getUsers();
},[])

const getUsers =  () =>{

fetch('https://kfcclone220.herokuapp.com/all-products')
.then((res)=>{if(res.ok){
return res.json();
}else{console.log("res error");}})
.then((paremproduct)=>{
const filteredparemproduct = paremproduct.find((item)=>item.Id ===  parseInt(id));
//console.log(newUser);
setUser(filteredparemproduct)
})
.catch((err) => console.log(err));}
let userone = {...user , uniqueId : Math.floor(Math.random() * 1000)}
let Data = userone
Object.defineProperty(Data, 'Qty', {
  value: 1
}) 

 


const {id} = useParams()
//state for add on management
  let [product0, setProduct] = useState(data)
// state for item management
  let [product1, setProduct1] = useState(Data)

  


  //For Increment by 1 of add ons
  function increaseQty(L){
    let duplicateArray = [...product0];
    let index= product0.findIndex(meow=> meow.id===L.id);
    duplicateArray[index] = {...product0[index], qty: product0[index].qty + 1} 
    setProduct(duplicateArray);
    
  }
   //For Decrement by 1
   function decreaseQty(p){
    let duplicateArray = [...product0];
    let index = duplicateArray.findIndex(product0 => product0.id === p.id)  
    duplicateArray[index] = {...product0[index], qty: product0[index].qty - 1} 
    setProduct(duplicateArray);
  } 

  //for increment by 1 of item (addon+item)
   function  increaseQty1(L){
    let duplicateArray = {...product1, Qty: product1.Qty + 1};
    
    setProduct1(duplicateArray);}
    function  DecreaseQty1(L){
      let duplicateArray = {...product1, Qty: product1.Qty - 1};
      
      setProduct1(duplicateArray);}
  
    //Function for Adding Products in Cart
    const navigate = useNavigate();
    const onAdd = (product) =>{

      product.ItemPrice = addedItemPriceAndAddon;
      product.ItemQty = product1.Qty;
      product.AddOnQty= product0[0].qty
      product.AddOnPrice = 210 * product0[0].qty;
     
        
        console.log(product)
   

      dispatch(addToCart(product));
      navigate("/addprodtocartdisplayed")
      cartnine.cartItems = []
      cartnine.cartTotalAmount = 0
      cartnine.cartTotalQuantity = 0;
       };

//managing the price of item on page with add ons
let price = Data.Price
const addedItemPriceAndAddon = price * product1.Qty + data[0].Price * product0[0].qty 
const addedItemPrice = price * product1.Qty 
console.log(addedItemPrice)
console.log(price)

 


return (
     <> 

     <div className='container   '>
   <section className="headerTop" style={{marginLeft : '00px', marginRight : '100px'}} >
            <div clasName="Product w-75  ">
                  <div className="row  mt-3">
         
            
                     <div className="d-flex" key={id} > 
                     
                     <div className="col-md-5   dx-flex " >
                            <div className="imagebox2 " >
                                <div className="breadcrum">
                                        <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb py-2" style={{fontSize: '12px'}}>
                                        <li className="breadcrumb-item ps-1">Home</li>
                                        <li className="breadcrumb-item " ><span >Ala Cart & Combo</span ></li>
                                    </ol>
                                    </nav>
                                    <h4 className="ps-1">{Data.Name}</h4>
                                     <p className="ps-1"> 
                                     <small>
                                     {Data.Description}
                                    </small></p>   
                                    </div>
                               <div class="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header  d-flex justify-content-between" id="headingOne">
     
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Add Drink <span className="text-danger"  > </span> 
     
      </button>
     
    </h2>
    <div id="collapseOne"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body  ">
        <div className="adddrinkbtn  d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>  <span className="adddrinkincre">Pepsi</span></p>
        
       </div>
        <div className="adddrinkbtn d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> <span className="adddrinkincre">7UP</span></p>
       
       </div>
        <div className="adddrinkbtn d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> <span className="adddrinkincre">Mirinda</span></p>
       
       </div>
        <div className="adddrinkbtn d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> <span className="adddrinkincre">Mountain Dew</span></p>
       
       </div>
        <div className="adddrinkbtn d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> <span className="adddrinkincre">Diet Pepsi</span></p>
       
       </div>
       <div className="adddrinkbtn d-flex justify-content-between">
       <p ><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> <span className="adddrinkincre">Diet 7UP</span></p>
       
       </div>
      </div>
    </div>
  </div>



  <div className="accordion-item  ">
    <h2 className="accordion-header " id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Add Ons <span className="text-danger" > </span>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">       
      <div className="adddrinkbtn  d-flex justify-content-between">
        <p className="adddrinkincre">{data[0].name}</p>
       <p style={{width : '100px'}} className="adddrinkincre">{data[0].Price} 
         <button  onClick={()=> decreaseQty(data[0])}  className="adddrinkbtn1  btn btn-outline-danger"  style={{height : '35px', width : '20px',padding:'5px'}}>-</button>
          <span value={product0[0].qty}    className=" adddrinkbtn1 me-1">{product0[0].qty}</span>
          <button onClick={()=> increaseQty(data[0])}  className="adddrinkbtn1  btn btn-outline-danger"  style={{height : '35px', width : '20px',padding:'5px'}}>+</button>  
                 
          </p> </div>
          
        
         </div>
         </div>
         </div>
</div> 



{//burger price
      }      <div className="mt-5">
       <div  className='row'>
<div style={{ width:"220px"}} className='col-4'><p style={{fontSize:"13px"}}>{Data.Name}</p></div>
                        <div className=' col-6 justify-content-end d-flex' >
                        
                          <span>{price } </span>
                          <button onClick={()=> DecreaseQty1(Data)}  className="adddrinkbtn1  btn btn-outline-danger"  style={{height : '30px', width : '20px',padding:'5px'}}>-</button>
                          {product1.Qty}
                          <button onClick={()=> increaseQty1(Data)}  className="adddrinkbtn1  btn btn-outline-danger"  style={{height : '30px', width : '20px',padding:'5px'}}>+</button>
                        </div>
                        <div>
                          { product0[0].qty>0 && <span>AddOn: {data[0].name}  {product0[0].qty} * { data[0].Price } </span>} </div></div>
                        
                      


       
          
           
           {product0[0].qty>0 && <h3>PKR:{addedItemPriceAndAddon} </h3>  }
            {product0[0].qty== 0  && <h3>PKR:{addedItemPrice} </h3>  }
       
       
       
       <div className="d-flex text-center py-2 px-1"> 
      <button onClick={() => onAdd(Data)} style={{marginLeft: '1px',height: '35px'}} className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    Add To Cart</button> </div>
 <p className="mt-2"><small>*Prices may vary at motorway outlets</small> </p></div>
 </div>
  </div>
</div></div> </div></section></div>

           
     
     
      

      





    </>)}
    





  
   
    
   
    
                
export default Alaparems;
/*


            










<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className=" containerFluid " style={{height : "100px",backgroundColor:'#303230'}}>
   
<div className='col justify-content-between  d-flex'>
<h3 className='col justify-content-between  d-flex'style={{color : 'white',marginTop:'10px'}}>Your Bucket</h3>
<h2 className='col justify-content-center  d-flex' style={{color : 'white', marginLeft:'50px'}}>{cartItems.Qty}</h2>
  <h2 className='col justify-content-end  d-flex'  style={{fontSize: '25px',color : 'white',marginTop : "20px"}}>
  {
                      
                      cartItems.map((item) => (
                        
                        <div>
                          PKR:{ item.Qty * addedItemPrice}
                        </div>
                    
                  ))}
</h2>
</div>

    
  </div>
  <div className="offcanvas-body">
  <div className=" containerFluid " style={{marginLeft:"20px",marginRight:"20px",height : "1000px"}}>
  
       
          
          <div>
                  {cartItems.length === 0 && <div>Cart is empty</div>}
                  {
                    cartItems.map((item) => (
                      <div key={item.Id} className='row'>
                        <h3>ITEM</h3>
                        <div>
                        <div  className='col'><span >{item.Name}: {product1.Qty} * {price }  </span></div> 
                        
                         
                        
                        <div>
                          { product0[0].qty>0 && <span>AddOn: {data[0].name}  {product0[0].qty} * { data[0].Price } </span>}

                        </div>
                        
                        <div>
                          Item:{item.Qty} * { addedItemPrice};
                        </div>
                        
                       
                        <div className=' col-4 justify-content-start d-flex'>
                            <button className='btn btn-outline-danger' onClick={() => onAdd2(item)}>+</button>
                            <button className='btn btn-outline-danger' onClick={() => onRemove2(item)}>-</button>
                        </div>
                        
                        <div>Total Price:{ item.Qty * addedItemPrice }</div>
                        
                        
                       
                      </div>
                      </div>
                    ))
                  }
            </div>
            <Link to ={`/ala-carte-and-combos`} ><a href="#" style={{marginTop: '10px',height: '35px', width:'310px'}} className="btn btn-danger" onClick={OrderHandler}>
            Place Your Order
          </a></Link>
        
 
 </div>
  </div>
</div>*/



                
