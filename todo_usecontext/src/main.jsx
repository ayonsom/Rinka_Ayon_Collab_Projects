import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './components/Context.jsx'
import Home from './components/Home.jsx'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Context>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/todo' element={ <App />} />
        
        
      </Routes>
    </Router>
  </Context>,
)
