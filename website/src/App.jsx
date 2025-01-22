import React from 'react'
import {Routes, Route} from 'react-router-dom'

import LogIn from './Pages/LogIn.jsx'
import Home from './Pages/Home.jsx'
import Fridge from './Pages/Fridge.jsx'

function App(){
  return (
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/fridge" element={<Fridge/>}/>
    </Routes>
  );
}

export default App
