import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth, userDetails,setUserDetails} = useContext(AuthContext);
    console.log("Login : ", userDetails);
    
    const [formData, setFormData] = useState({email : "", password : ""})
    // console.log(formData);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.email == userDetails.email){
            if(formData.password==userDetails.password){
                setIsAuth(true);                
                window.alert("Login Success")
                setTimeout(()=>{
                    if(isAuth){
                        navigate("/Product")
                    }
                },2000)
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
        <input type="email" 
            placeholder='enter your email'
            onChange={(e)=>setFormData({...formData, email : e.target.value})}
        />
        <input type="password" 
            placeholder='enter password'
            onChange={(e)=>setFormData({...formData, password : e.target.value})}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
