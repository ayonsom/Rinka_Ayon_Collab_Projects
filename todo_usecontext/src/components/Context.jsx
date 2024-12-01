import React, { Children, useState } from 'react'
import { createContext } from 'react'

export const todoContext = createContext();
import { TodoData } from '../Lib/Todo';

const Context = ({children}) => {
    const [todo, setTodo] = useState(TodoData)
    const [inputText, setInputText] = useState('')
    
    
  return (
    <todoContext.Provider value={{todo, setTodo, inputText, setInputText}}>
        {children}
    </todoContext.Provider>
  )  
}

export default Context
