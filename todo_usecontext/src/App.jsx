import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  // const allContext = useContext(context)
  // console.log(allContext);
  
  return (
    <>
      Hello...!
      <TodoForm />
      <TodoList />
      <br />
      <Link to='/'>Return to HomePage</Link>
    </>
  )
}

export default App
