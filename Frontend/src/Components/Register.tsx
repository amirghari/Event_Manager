import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import '../Styles/Register.css'
import { createUser } from '../Hooks/userHook'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const navigate = useNavigate()

  const signupCriteria = [
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
    {
      id: 2,
      type: 'password',
      value: confirmPassword,
      placeholder: 'Confirm Password',
      func: (e) => setConfirmPassword(e.target.value),
    },
    {
      id: 3,
      type: 'email',
      value: email,
      placeholder: 'Email',
      func: (e) => setEmail(e.target.value),
    },
    {
      id: 4,
      type: 'text',
      value: firstname,
      placeholder: 'First Name',
      func: (e) => setFirstname(e.target.value),
    },
    {
      id: 5,
      type: 'text',
      value: lastname,
      placeholder: 'Last Name',
      func: (e) => setLastname(e.target.value),
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    const user = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
    }

    const response = await createUser(user)
    const json = await response.json()

    localStorage.setItem('isUserLoggedIn', true)
    localStorage.setItem('user', json.username)
    localStorage.setItem('token', json.token)

    if (!response.ok) {
      console.log('Error in adding user')
      console.log(response)
    }
    if (response.ok) {
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setFirstname('')
      setLastname('')
      // console.log("New user added:", json);
      alert('User Added Successfully')
      navigate('/TaskApp')
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
