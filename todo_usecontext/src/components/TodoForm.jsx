import '../App.css'
import React, { useEffect, useContext, useState } from 'react'
import { todoContext } from './Context'


const TodoForm = () => {
  const { todo, setTodo, inputText, setInputText } = useContext(todoContext)
  const [originalTodo, setOriginalTodo] = useState([...todo]);

  // console.log("todo :",todo)
  const [sortingOrder, setSortingOrder] = useState("all")
  
 // by rinka todos appear according to selected status
  // const handleSortByStatus = (e) => {
  //   const order = e.target.value;
  //   setSortingOrder(order);

  //   if (order === "all") {
  //     setTodo(originalTodo);
  //   } else {
  //     const isCompleted = order === "true";
  //     const filteredTodos = originalTodo.filter((todo) => todo.completed === isCompleted);
  //     setTodo(filteredTodos);
  //   }
  // };


  // by rinka all todos but appear first according to selecteion
  const handleSortByStatus = (e) => {
    const order = e.target.value;
    setSortingOrder(order);
  
    let tasksDone = originalTodo.filter((task) => task.completed === true);
    let tasksPending = originalTodo.filter((task) => task.completed === false);
  
    if (order === "all") {
      // setTodo([...originalTodo]);
      setTodo(originalTodo)
    } else if (order === "true") {
      setTodo([...tasksDone, ...tasksPending]); 
    } else {
      setTodo([...tasksPending, ...tasksDone]); 
    }
  };
  


  // done by ayon 
  // const handleSortByStatus=(e)=>{
  //   // console.dir(e.target.value)
  //   // const [sortingOrder, setSortingOrder] = useState("Pending")
  //   let tasksDone = [];
  //   let tasksPending = []
   
  //   todo.forEach(element => {
  //     element.completed === true? tasksDone.push(element) : tasksPending.push(element);      
  //   });
   
  //   console.log(tasksPending,"1");
  //   console.log(tasksDone,"2");
  //   console.log(sortingOrder,"order");
    
  //   // switch (e.target.value) {
  //   //   case false:
  //   //     setTodo([...tasksPending,...tasksDone])
  //   //     break;
  //   //   case true:
  //   //     setTodo([...tasksDone,...tasksPending])

  //   //   case "All":
  //   //     setTodo([...todo])
  //   //     break;  
  //   //   default:
  //   //     setTodo([...todo])
  //   //     break;
  //   // }
  //   // console.log(e.target.value);
  //   console.log(tasksPending)
  //   if (e.target.value === "false"){setTodo([...tasksPending,...tasksDone])}
  //   else if(e.target.value=== "true"){setTodo([...tasksDone,...tasksPending])}
  //   else{setTodo([...todo])}
  // }

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

 
  console.log(originalTodo,"3");
  
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
            <option value={"all"}>All</option>
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
