import { HStack } from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'

const NavApp = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <FaEarthAmericas className="logo-icon" size={60} />
    </HStack>
  )
}

export default NavApp
