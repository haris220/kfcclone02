import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("admin-panel")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("https://kfcclone220.herokuapp.com/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("admin-panel")
        } else {
            alert("Invalid Credentials")
        }
    }

    return (
        <>
        
        
<div className='container'>
<div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>   <h1>Login Page</h1> </div>
  <form>
  {/* Email input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control"
     onChange={(e) => setEmail(e.target.value)} value={email} />
    </div>
  {/* Password input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control"
    onChange={(e) => setPassword(e.target.value)} value={password} />
    
  </div>
 
  {/* Submit button */}
  <button onClick={handleLogin} type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
  {/* Register buttons */}
  <div className="text-center">
    <p>Not a member?          </p>
    <Link className="nav-link active"  style={{color:"blue",fontWeight : '600',fontSize : '18px'}} to="signup" >Signup</Link>
    
    
  </div>
  </form>
</div>


    



</>
    )
}

export default Login