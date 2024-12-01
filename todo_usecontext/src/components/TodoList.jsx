import React, {useState, useContext } from 'react'
import { todoContext } from './Context'


const TodoList = () => {
    const { todo, setTodo } = useContext(todoContext)
    const [currentPage, setCurrentPage] = useState(1);

    const handleToggle = (id) => {
        // console.log(id);
        const updatedTodo = todo.map((el) => (
            el.id === id ? el.completed = { ...el, completed: !el.completed } : el
        ))
        // console.log(updatedTodo);
        setTodo(updatedTodo)
    }

    const handleDelete = (id) => {
        const res = window.confirm("Are you sure want to delete?")
        // console.log(res);
        if(!res){return}
        const filteredTodo = todo.filter((el)=>(
             el.id !== id
        ));
        setTodo(filteredTodo)
    }

    const itemPerPage = 10;
    const pagesRequired = Math.ceil(todo.length/itemPerPage);
    const perPageTodo = () =>{
        let tempList = [];
        let limit = Math.min(itemPerPage, todo.length)
        for(let i=0; i<limit; i++){
            tempList.push
        }
    }

    return (
        <div style={{ height: "350px", gap: '20px', justifyContent: "center", overflow: "auto" }}>
            {/* {JSON.stringify(todo)} */}
            {/* length : {todo.length} */}
            
            {todo.length>0? (
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "10%" }}>Sl</th>
                        <th style={{ width: "45%" }}>Title</th>
                        <th style={{ width: "10%" }}>Status</th>
                        <th style={{ width: "25%", padding: "0 15px 0 15px" }}>Change Status</th>
                        <th style={{ width: "10%" }}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {todo.map((el, index) => {
                        return (
                            <tr key={el.id}>
                                <td style={{ width: "10%" }}>{index + 1}</td>
                                <td style={{ width: "45%" }}>{el.completed ? <del style={{color:"red"}}>{el.title}</del> : <p>{el.title}</p>}</td>
                                <td style={{ width: "10%" }}>{el.completed ? "YES" : "NO"}</td>
                                <td style={{ width: "25%" }}>
                                    <button onClick={() => handleToggle(el.id)}>Change status</button>
                                </td>
                                <td style={{ width: "10%" }}>
                                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>) : null}
        </div>
    )
}

export default TodoList
