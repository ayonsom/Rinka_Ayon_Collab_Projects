import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth, userDetails,setUserDetails} = useContext(AuthContext);
    // console.log("Login : ", userDetails);
    
    const [formData, setFormData] = useState({email : "", password : ""})
    // console.log(formData);

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.email == userDetails.email){
            if(formData.password==userDetails.password){
                setIsAuth(true);                
                window.alert("Login Success, Redirecting to /Products")
                console.log(isAuth);
                
                setTimeout(()=>{                    
                    navigate("/Product")                    
                },1300)
            }else{
                window.alert("Invalid Credentials or User not Registered")
            }
        }
        else{
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
