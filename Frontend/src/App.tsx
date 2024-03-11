import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import Home from './Components/Home'
import './Styles/App.css'
import EventApp from './Components/EventApp/EventApp'
import Dashboard from './Components/EventApp/Dashboard'
import EventAccount from './Components/EventApp/EventAccount'
import Login from './Components/Login'
import Register from './Components/Register'
import { UserProvider } from './Services/UserContext'
import { useEffect, useState } from 'react'

function App() {
  const [userId, setUserId] = useState('')

  useEffect(() => {
    // Example: Fetch the user ID from local storage or authentication token
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [])
  return (
    <>
      <UserProvider userId={userId}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/EventApp" element={<EventApp />} />
            <Route path="/EventApp/Dashboard" element={<Dashboard />} />
            <Route path="/EventApp/EventAccount" element={<EventAccount />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
