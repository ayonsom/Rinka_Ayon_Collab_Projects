import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Welcome to Home page...</h1>
      <br />
      <br />
      <p>This page currently features a ToDo (Task management) with features like adding, 
            updating stuatus, and deleting a task.
      </p>
      <Link to='/todo'>Go to Todo app</Link>
      <br />
      <hr />
      <h3>Adding more features & routes......</h3>
    </div>
  )
}

export default Home
