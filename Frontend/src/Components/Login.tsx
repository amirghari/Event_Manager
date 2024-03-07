import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import { ReactSVG } from 'react-svg'
import { loginUser } from '../Hooks/userHook'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const loginCriteria = [
    {
      id: 0,
      type: 'text',
      value: username,
      placeholder: 'Username',
      func: (e) => setUsername(e.target.value),
    },
    {
      id: 1,
      type: 'password',
      value: password,
      placeholder: 'Password',
      func: (e) => setPassword(e.target.value),
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username === '' || password === '') {
      alert('Please fill in all fields')
      return
    }

    const loginData = {
      username,
      password,
    }

    const response = await loginUser(loginData)
    const json = await response.json()

    localStorage.setItem('isUserLoggedIn', true)
    localStorage.setItem('user', json.username)
    localStorage.setItem('token', json.token)

    if (!response.ok) {
      // console.log("Error in logging in");
      // console.log(response);
      alert('Incorrect username or password')
    }
    if (response.ok) {
      setUsername('')
      setPassword('')
      // console.log("Logged in");
      navigate('/')
    }
  }

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {loginCriteria.map((c) => (
            <input
              key={c.id}
              type={c.type}
              value={c.value}
              placeholder={c.placeholder}
              onChange={c.func}
            />
          ))}
          <button type="submit">Login</button>

          <div className="register-link">
            Don't have an account?
            <br />
            <p className="redirect-link" onClick={() => navigate('/Register')}>
              Register
            </p>
          </div>

          <div className="forgot-password">
            {/* <p className="redirect-link" onClick={() => navigate("/ForgotPassword")}>Forgot Password?</p> */}
            <p
              onClick={() => {
                alert('Then try to remeber it')
              }}
            >
              Forgot your password?
            </p>
          </div>
        </form>

        <div className="login-image">
          <ReactSVG
            className="login-svg"
            src="/undraw_forming_ideas_re_2afc.svg"
          />
        </div>
      </div>
    </>
  )
}

export default Login
