import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Homepage from './Homepage';
import Login from './Components/Login';
import Archives from './Archives';

function App() {
  return (
    <div>

        <Routes>
           <Route path='/' element={<Login />} />
           <Route path='/Homepage' element={<Homepage />} />
           <Route path='/Archives' element={<Archives />} />
        </Routes>
    </div>
  )
}

export default App;