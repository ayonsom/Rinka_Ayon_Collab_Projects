import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth, setUserDetails} = useContext(AuthContext);
    // console.log("Login : ", userDetails);
    const userDetails = JSON.parse(localStorage.getItem("loginData"));
    // console.log("localStorage : ", userDetails);    
    const [formData, setFormData] = useState({email : "", password : ""})
    // console.log(formData);    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(userDetails);
        const user = userDetails.find(
            (el)=> el.email===formData.email && el.password===formData.password
        )

        if (user) {
            setIsAuth(true);
            window.alert("Login Success, Redirecting to Products page...");
            setTimeout(()=>{
                navigate('/Product')
            },1000)
        }else{
            window.alert("Invalid Credentials or User not Registered")
        }
    }
  return (
    <div>
      <h1>Please Login below:-</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> <strong>Your email : </strong></label>
        <input type="email" 
            style={{padding:"5px"}}
            placeholder='enter your email'
            onChange={(e)=>setFormData({...formData, email : e.target.value})}
        />
        <br />
        <br />
        <label htmlFor="password"> <strong>Password : </strong></label>
        <input type="password" 
            style={{padding:"5px"}}
            placeholder='enter password'
            onChange={(e)=>setFormData({...formData, password : e.target.value})}
        />
        <br />
        <br />
        <button type='submit'>Login</button>
        <br />
        <br />
      </form>
     
     
      <hr />
      <p>Not Registered? <Link to='/Register'>Please Reigter Here</Link></p>
    </div>
  )
}

export default Login
