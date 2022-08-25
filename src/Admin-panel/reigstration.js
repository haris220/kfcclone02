
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

   const navigate = useNavigate();

   

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const Cart= 'USER'
    
    // http://localhost:7000/register

    const registerUser = async (event) =>{

        event.preventDefault();
        // console.log(name, email, password);
        //
    

        let result = await fetch('http://localhost:7000/register-user',{
            method: 'post',
            body: JSON.stringify({Name, Email, Password,Cart}),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        result = await result.json();
        console.log(result);
       

        localStorage.setItem('user', JSON.stringify(result));
        navigate('admin-panel');
    }

  return (
    <div className='container mt-5'>
        
    
  <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" required name='name' value={Name} onChange={(event) =>setName(event.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" required name='email' value={Email} onChange={(event) =>setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" required name='password' value={Password} onChange={(event) =>setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
  
        <button onClick={registerUser} type="submit" className="btn btn-primary">Register</button>
  
</form>


    </div>
  )
}

export default Register