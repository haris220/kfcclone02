import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'

import Everyday  from './Components/Everyday' ;
import AlaCart   from './Components/AlaCart'  ;
import Snacks    from './Components/Snacks'   ;
import Midnight  from './Components/Midnight' ;
import Sharing   from './Components/Sharing'  ;
import Signature from './Components/Signature';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

import AlaParems        from './Parems.js/AlaParems'      ;
import MidnightParems   from './Parems.js/MidnightParems' ; 
import SnacksParems     from './Parems.js/SnacksParems'   ; 
import SharingParems    from './Parems.js/SharingParems'  ;
import SignatureParems  from './Parems.js/SignatureParems';
import EverydayParems   from './Parems.js/EverydayParems' ;

import Register         from './Admin-panel/reigstration'    ;
import SecondNavbar     from './Admin-panel/SecondNavbar'    ;
import ViewUsers        from './Admin-panel/ViewUsers'       ;
import PrivateComp      from './Admin-panel/PrivateComp'     ;
import ProductsRegister from './Admin-panel/ProductsRegister';
import OrdersReceived from './Admin-panel/OrdersReceived';
import ViewProducts     from './Admin-panel/ViewProducts'    ;

import UpdateProduct    from './Admin-panel/UpdateComponent' ;
import Store from './AddProdToCart';
import Cart from './Cartfrontend';
import CheckOut from './CheckOut';
import ScrollToTop from './ScrollToTop';






const App = () => {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop />
       <Header/>
       <Routes>

          <Route exact path="/" element={<Everyday />} />
          <Route path="everyday-value" element={<Everyday />} />
          <Route path="ala-carte-and-combos" element={<AlaCart />} />
          <Route path="signature-boxes" element={<Signature />} />
          <Route path="sharing" element={<Sharing />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="midnight-deals-starts-1200am" element={<Midnight />} />
          <Route path="addprodtocart" element={<Store />} />
          <Route path="addprodtocartdisplayed" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />

          

          
          
          
          


          <Route path="/ala-carte-and-combos/:id" element={<AlaParems/>} />
          <Route path="/signature-boxes/:id" element={<SignatureParems/>} />
          <Route path="/sharing/:id" element={<SharingParems/>} />
          <Route path="/snacks/:id" element={<SnacksParems/>} />
          <Route path="/midnight-deals-starts-1200am/:id" element={<MidnightParems/>} />
          <Route path="/everyday-value/:id" element={<EverydayParems/>} />
          
          <Route path="registration/signup" element={<SignUp />} />
          <Route path="registration" element={<Login/>}/>

          <Route element={<PrivateComp />}>
          <Route path="/registration/admin-panel" element={<SecondNavbar/>}/>
          <Route path="/registration/admin-panel/users-detail" element={<ViewUsers />}/>
          <Route path="/registration/admin-panel/register-products" element={<ProductsRegister />}/>
          <Route path="/registration/admin-panel/products-detail" element={<ViewProducts />}/>
          <Route path="/registration/admin-panel/update/:id" element={<UpdateProduct />} />
          <Route path="/registration/admin-panel/orders-details" element={<OrdersReceived />} />

          
          

          
          </Route>
          
         

      
       </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </>
  )
}

export default App

