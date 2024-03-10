import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
// Ensure you have a loginUser function defined in your hooks that returns a Promise
import { loginUser } from '../Hooks/userHook'
import { ReactSVG } from 'react-svg'

interface LoginCriteria {
  id: number
  type: string
  value: string
  placeholder: string
  func: (e: ChangeEvent<HTMLInputElement>) => void
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const loginCriteria: LoginCriteria[] = [
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username === '' || password === '') {
      alert('Please fill in all fields')
      return
    }

    try {
      const loginData = { username, password }
      const response = await loginUser(loginData) // loginUser should handle the POST request

      if (!response.ok) {
        alert('Incorrect username or password')
        return
      }

      const json = await response.json()
      localStorage.setItem('isUserLoggedIn', 'true')
      localStorage.setItem('user', json.username)
      localStorage.setItem('token', json.token)

      setUsername('')
      setPassword('')
      navigate('/EventApp')
    } catch (error) {
      console.error('Error during login', error)
      alert('Login failed, please try again later.')
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
                alert('Then try to remember it')
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
