import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import { loginUser } from '../Hooks/userHook'
import { ReactSVG } from 'react-svg'
import { FormattedMessage } from 'react-intl'

interface Props {
  messages: Record<string, any>
}

interface LoginCriteria {
  id: number
  type: string
  value: string
  placeholder: string
  func: (e: ChangeEvent<HTMLInputElement>) => void
}

const Login: React.FC<Props> = ({ messages }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const loginCriteria: LoginCriteria[] = [
    {
      id: 0,
      type: 'text',
      value: username,
      placeholder: messages.login.username,
      func: (e) => setUsername(e.target.value),
    },
    {
      id: 1,
      type: 'password',
      value: password,
      placeholder: messages.login.password,
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
      const response = await loginUser(loginData)

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
          <h1>
            <FormattedMessage
              id={messages.login.login}
              defaultMessage={messages.login.login}
            />
          </h1>
          {loginCriteria.map((c) => (
            <input
              key={c.id}
              type={c.type}
              value={c.value}
              placeholder={c.placeholder}
              onChange={c.func}
            />
          ))}
          <button type="submit">
            <FormattedMessage
              id={messages.login.login}
              defaultMessage={messages.login.login}
            />
          </button>

          <div className="register-link">
            <FormattedMessage
              id={messages.login.registerLinkHeader}
              defaultMessage={messages.login.registerLinkHeader}
            />
            <br />
            <p className="redirect-link" onClick={() => navigate('/Register')}>
              <FormattedMessage
                id={messages.login.register}
                defaultMessage={messages.login.register}
              />
            </p>
          </div>

          <div className="forgot-password">
            {/* <p className="redirect-link" onClick={() => navigate("/ForgotPassword")}>Forgot Password?</p> */}
            <p
              onClick={() => {
                alert('Then try to remember it')
              }}
            >
              <FormattedMessage
                id={messages.login.forgotPassword}
                defaultMessage={messages.login.forgotPassword}
              />
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
