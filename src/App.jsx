import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ApiCall from './ApiCall'
import Detail from './component/Detail'


function App() {
   const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element ={<ApiCall/>}/>
    <Route path = "/detail" element = {<Detail/>}/>
    </Routes>

    </BrowserRouter>
    // <ApiCall/>
   
  )
}

export default App
