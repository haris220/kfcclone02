import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import SecondNavbar from './SecondNavbar';


const UpdateProduct = () => {
    const [Name, setName] = React.useState('');
    const [Price, setPrice] = React.useState('');
   /* const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState(''); */
    const params = useParams();
    const navigate = useNavigate();


    const [user, setUser] = useState([]);
    const {id} = params
    
  
      useEffect(() =>{
              getUsers();
      },[])
  
      const getUsers =  () =>{
  
           fetch('https://kfcclone220.herokuapp.com/all-products')
           .then((res)=>{if(res.ok){
            return res.json();
           }else{console.log("res error");}})
          .then((lundata)=>{
          const newUser = lundata.find((item)=>item.Id ===  parseInt(id));
        //console.log(newUser);
        setUser(newUser)
      })
          .catch((err) => console.log(err));
  
          
      }
      let Data = user;






    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`https://kfcclone220.herokuapp.com/all-products/${params.id}`);
        result = await result.json();
        setName(result.Name);
        setPrice(result.Price);
      /*  setCategory(result.category);
        setCompnay(result.company) */
    }

    const updateProduct = async () => {
        console.warn(Name, Price)
         let result = await fetch(`https://kfcclone220.herokuapp.com/all-products/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ Name, Price }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/registration/admin-panel/products-detail')
        }

    }

    return (
        <>
        <div className='container'>
            <SecondNavbar/>
        <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>   <h1>PRODUCT PREVIOUS DETAILS</h1> </div>
        <div className='col justify-content-center  d-flex'   > <h3>Fill Both Fields</h3> </div>
        <div className="col justify-content-center  d-flex col-sm-6 col-md-4 col-lg-3 g-3">
        <div className="card col justify-content-center  d-flex" style={{width: '17rem', marginLeft: '0px'}}>
  
  <h3>Product Id:{Data.Id}</h3>
  
  <div className="card-body">
  <>Cart: {Data.Cart}</>
  <h5 className="card-title" style={{textDecoration:"none"}}>{Data.Name}</h5>
    <p className="card-text">{Data.Description}</p>
    <p className="card-text">Price:{Data.Price}</p>
    
    
  </div>
</div>  
        </div>

        
        <div className='product'>
        <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}> <h1>Update PRODUCT</h1> </div><p>Only Product name and Price can be updated</p>
            <input placeholder='Change Product Name' className='inputBox'
                value={Name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder='Change Product price' className='inputBox'
                value={Price} onChange={(e) => { setPrice(e.target.value) }}
            />

        
                  

            <button onClick={updateProduct} className='appButton'>Update Product</button>
            </div>
        </div>
        </>
    )
}

export default UpdateProduct;