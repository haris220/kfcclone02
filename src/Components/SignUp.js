import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Cart= 'USER'
    const [error, setError ] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/registration')
        }
    }, [])
    if((password.length < 4)){
    console.log('less')}

    const collectData = async (event) => {
        event.preventDefault();

      if (!name || !email || !password || password.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){

       setError(true);
       return false;
      


      }





        console.warn(name, email, password);
        let result = await fetch("https://kfcclone220.herokuapp.com/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password, Cart }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))

     navigate('/registration')
    }

    return (
        <div className='container mt-5'>
        <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>   <h1>Signup Page</h1> </div>
    
  <form>
            <div className="mb-3">
               <h3> <label htmlFor="exampleInputEmail1" className="form-label">Name:</label></h3>
                <input type="text" required name='name' value={name} onChange={(event) =>setName(event.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            {error && !name &&<p style={{color:"red",justifyContent:'flex-end'}}> Enter Valid Name! </p>}

            <div className="mb-3">
                <h3><label htmlFor="exampleInputEmail1" className="form-label">Email address:</label></h3>
                <input type="email" required name='email' value={email} onChange={(event) =>setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            {error && !email &&<p style={{color:"red",justifyContent:'flex-end'}}> Enter Valid Email! </p>}
            {error && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email) && <p style={{color:"red",justifyContent:'flex-end'}}> Email Invalid Format </p>}

            <div className="mb-3">
               <h3> <label htmlFor="exampleInputPassword1" className="form-label">Password:</label></h3>
                <input type="password" required name='password' value={password} onChange={(event) =>setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            {error && !password &&<span style={{color:"red",justifyContent:'flex-end'}}> Enter Valid Password! </span>}
            {error && password.length < 5 && <p style={{color:"red",justifyContent:'flex-end'}}> Password must be more than 4 characters! </p>}
           
        <button onClick={collectData} type="submit" className="btn btn-primary">Register</button>
  
</form>


    </div>
    )
    }
export default SignUp