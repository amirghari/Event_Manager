import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import Home from './Components/Home'
// import Register from './Components/Register.jsx'
// import Login from './Components/Login.tsx'
import './Styles/App.css'
import EventApp from './Components/EventApp/EventApp'
import Dashboard from './Components/EventApp/Dashboard'
import EventAccount from './Components/EventApp/EventAccount'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/EventApp" element={<EventApp />} />
          <Route path="/EventApp/Dashboard" element={<Dashboard />} />
          <Route path="/EventApp/EventAccount" element={<EventAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
