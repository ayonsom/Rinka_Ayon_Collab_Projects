import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Fake Store</h1>
      <h3>You must <Link to='/Register'>Register</Link> (if not done) & <Link to='/Login'>Login</Link> to browse the available products.</h3>
      <p>Please Register : <Link to='/Register'>Click Here</Link> </p>
      <p>Already Registered? <Link to='/Login'>Plese Login here</Link></p>
    </div>
  )
}

export default Home
