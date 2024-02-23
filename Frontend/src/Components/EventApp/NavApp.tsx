import { HStack } from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'

const NavApp = () => {
  const navigate = useNavigate()
  return (
    <HStack justifyContent={'space-around'}>
      <div className="logo" onClick={() => navigate('/')}>
        <FaEarthAmericas className="logo-icon" size={60} />
      </div>
      <div>
        <Profile />
      </div>
    </HStack>
  )
}

export default NavApp
