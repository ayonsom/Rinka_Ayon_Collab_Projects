import '../App.css'
import React, { useEffect, useContext, useState } from 'react'
import { todoContext } from './Context'


const TodoForm = () => {
  const { todo, setTodo, inputText, setInputText } = useContext(todoContext)
  const [originalTodo, setOriginalTodo] = useState([...todo]);

  // console.log("todo :",todo)
  const [sortingOrder, setSortingOrder] = useState(undefined)
  
  const handleSortByStatus=(e)=>{
    // console.dir(e.target.value)
    // const [sortingOrder, setSortingOrder] = useState("Pending")
    let tasksDone = [];
    let tasksPending = []
    todo.forEach(element => {
      element.completed === true? tasksDone.push(element) : tasksPending.push(element);      
    });
    
    // switch (e.target.value) {
    //   case false:
    //     setTodo([...tasksPending,...tasksDone])
    //     break;
    //   case true:
    //     setTodo([...tasksDone,...tasksPending])

    //   case "All":
    //     setTodo([...todo])
    //     break;  
    //   default:
    //     setTodo([...todo])
    //     break;
    // }
    // console.log(e.target.value);
    console.log(tasksPending)
    if (e.target.value === "false"){setTodo([...tasksPending,...tasksDone])}
    else if(e.target.value=== "true"){setTodo([...tasksDone,...tasksPending])}
    else{setTodo([...todo])}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      window.alert("Please enter a valid text for Todo title");
      setInputText('');
      return;
    }
    setTodo([{
      id: Date.now(),
      title: inputText,
      completed: false
    }, ...todo]);
    setInputText('')
  }

  // useEffect(()=>{
  //     console.log("todo:",todo)
  // },[todo])


  return (
    <div>
      Feel free to use this ToDo application.
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Add a Todo (max. 40 chars)'
          maxLength="40"
          value={inputText}
          onChange={(e) => { setInputText(e.target.value) }}
          style={{ padding: "12px", borderRadius: "4px"}}
        />
        <button type='submit'
          style={{ marginLeft: "10px", marginRight:"70px"}}
        > Add Todo
        </button>
        {/* <button type='button' onClick={handleSortByStatus}>Sort by Status</button> */}
        <label>
          Sort by Status `<>&nbsp</>`
          <select value={sortingOrder} onChange={handleSortByStatus}>
            <option value={undefined}>All</option>
            <option value={true}>Completed</option>
            <option value={false}>Pending</option>
          </select>
        </label>
        {inputText.trim().length > 0 ? (<p>Preview : {inputText}</p>) : null}
      </form>
      <br />
    </div>
  )
}

export default TodoForm
