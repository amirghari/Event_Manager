import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
// import TaskAppDemo from './Components/TaskAppDemo.jsx'
import Home from './Components/Home'
import './Styles/App.css'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
