import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
const Register = () => {
    const {userDetails,setUserDetails} = useContext(AuthContext);
    const [formData, setFormData] = useState({email : "", password : ""})
    // console.log("Register : ", userDetails);
    const handleSubmit = (e) =>{
        // console.dir(e.target)
        e.preventDefault();
        setUserDetails(formData);
        setFormData({email : "", password : ""})
    }
  return (
    <div>
      <h1>Please register by Entering details below:- </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Email : </label>
        <input type="email" 
            value={formData.email}
            placeholder='example@example.com'
            onChange={(e)=>setFormData({...formData, email : e.target.value})}
        />
        <input type="password"
            value={formData.password}
            placeholder='Enter Password'
            onChange={(e)=>setFormData({...formData, password : e.target.value})}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
