import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route path='home' element = {<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
