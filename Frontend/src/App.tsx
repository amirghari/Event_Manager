import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
// import TaskAppDemo from './Components/TaskAppDemo.jsx'
import Home from './Components/Home'
// import Register from './Components/Register.jsx'
// import Login from './Components/Login.tsx'
import './Styles/App.css'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/TaskApp" element={<TaskAppDemo />} />
          <Route path="/Register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
