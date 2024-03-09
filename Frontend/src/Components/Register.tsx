import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import '../Styles/Register.css'
import { createUser } from '../Hooks/userHook'

interface SignupField {
  id: number
  type: string
  value: string
  placeholder: string
  func: (e: ChangeEvent<HTMLInputElement>) => void
}

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')

  const navigate = useNavigate()

  const signupCriteria: SignupField[] = [
    {
      id: 0,
      type: 'text',
      value: username,
      placeholder: 'Username',
      func: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    },
    {
      id: 1,
      type: 'email',
      value: email,
      placeholder: 'Email',
      func: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      id: 2,
      type: 'password',
      value: password,
      placeholder: 'Password',
      func: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
    {
      id: 3,
      type: 'password',
      value: confirmPassword,
      placeholder: 'Confirm Password',
      func: (e: ChangeEvent<HTMLInputElement>) =>
        setConfirmPassword(e.target.value),
    },
    {
      id: 4,
      type: 'text',
      value: firstname,
      placeholder: 'First Name',
      func: (e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value),
    },
    {
      id: 5,
      type: 'text',
      value: lastname,
      placeholder: 'Last Name',
      func: (e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value),
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
          <h1>Sign Up</h1>
          {signupCriteria.map((c) => (
            <input
              key={c.id}
              type={c.type}
              value={c.value}
              placeholder={c.placeholder}
              onChange={c.func}
            />
          ))}
          <button>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default Register
