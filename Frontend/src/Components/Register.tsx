import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import '../Styles/Register.css'
import { createUser } from '../Hooks/userHook'
import { FormattedMessage } from 'react-intl'

interface Props {
  messages: Record<string, any>
}

interface SignupField {
  id: number
  type: string
  value: string
  placeholder: string
  func: (e: ChangeEvent<HTMLInputElement>) => void
}

const Register: React.FC<Props> = ({ messages }) => {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')


  const navigate = useNavigate()

  const signupCriteria: SignupField[] = [
    {
      id: 0,
      type: 'text',
      value: firstname,
      placeholder: messages.register.firstName,
      func: (e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value),
    },
    {
      id: 1,
      type: 'text',
      value: lastname,
      placeholder: messages.register.lastName,
      func: (e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value),
    },
    {
      id: 2,
      type: 'text',
      value: username,
      placeholder: messages.register.username,
      func: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    },
    {
      id: 3,
      type: 'email',
      value: email,
      placeholder: messages.register.email,
      func: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      id: 4,
      type: 'password',
      value: password,
      placeholder: messages.register.password,
      func: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
    {
      id: 5,
      type: 'password',
      value: confirmPassword,
      placeholder: messages.register.confirmPassword,
      func: (e: ChangeEvent<HTMLInputElement>) =>
        setConfirmPassword(e.target.value),
    },

  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await createUser({
        username,
        email,
        password,
        firstname,
        lastname,
      })
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('isUserLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(data.user))
        // localStorage.setItem('token', data.token)
        alert('User Added Successfully')
        navigate('/') // Adjust according to your app's routes
      } else {
        alert('Failed to register user')
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
      console.error('Registration error:', error)
    }
  }

  return (
    <>
      <ReactSVG
        className="register-svg"
        src="./undraw_travel_together_re_kjf2.svg"
      />

      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>
            <FormattedMessage
              id={messages.register.register}
              defaultMessage={messages.register.register}
            />
          </h1>
          {signupCriteria.map((c) => (
            <input
              key={c.id}
              type={c.type}
              value={c.value}
              placeholder={c.placeholder}
              onChange={c.func}
            />
          ))}
          <button>
            <FormattedMessage
              id={messages.register.register}
              defaultMessage={messages.register.register}
            />
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
