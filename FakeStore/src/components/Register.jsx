import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContextProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const {userDetails,setUserDetails} = useContext(AuthContext);
    const [formData, setFormData] = useState({email : "", password : ""})
    // console.log("Register : ", userDetails);
    const handleSubmit = (e) =>{
        // console.dir(e.target)
        e.preventDefault();        
        
        setUserDetails([...userDetails,formData]);
        setFormData({email : "", password : ""})
        localStorage.setItem("loginData", JSON.stringify(userDetails))
        window.alert("Reigstration Successful, redirecting to /Login")
        setTimeout(()=>{
          
            navigate("/Login")
          
      },1300)
    }
  return (
    
    <div>
      {/* {console.log("UserDetails : ",userDetails)} */}
      <h1>Please register by Entering details below:- </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"><strong>Enter Email : </strong></label>
        <input type="email" 
            style={{padding:"5px"}}
            value={formData.email}
            placeholder='example@example.com'
            onChange={(e)=>setFormData({...formData, email : e.target.value})}
        />
        <br />
        <br />
        <label htmlFor="password"><strong>Password : </strong></label>
        <input type="password"
            style={{padding:"5px"}}
            value={formData.password}
            placeholder='Enter Password'
            onChange={(e)=>setFormData({...formData, password : e.target.value})}
        />
        <br />
        <br />
        <button type='submit'>Register</button>
        <br />
        <br />
        <hr />
      </form>
      <p>Already Registered? <Link to='/Login'>Please Login here</Link></p>
      
    </div>
  )
}

export default Register
