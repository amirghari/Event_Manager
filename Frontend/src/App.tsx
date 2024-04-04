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
import enMessages from './locals/en.json'
import fiMessages from './locals/fi.json'
import { IntlProvider } from 'react-intl'

function App() {
  const [locale, setLocale] = useState<'en' | 'fi' | 'fa'>(() => {
    const storedLocale = localStorage.getItem('locale')
    return storedLocale ? (storedLocale as 'en' | 'fi' | 'fa') : 'en'
  })
  const messages: Record<string, any> = {
    en: enMessages,
    fi: fiMessages,
    // fa: faMessages,
  }
  const [userId, setUserId] = useState('')

  useEffect(() => {
    localStorage.setItem('locale', locale)
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [locale])
  return (
    <>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        onError={() => {}}
      >
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
      </IntlProvider>
    </>
  )
}

export default App
