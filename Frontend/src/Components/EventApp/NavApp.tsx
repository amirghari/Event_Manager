import {
  HStack,
  Avatar,
  AvatarBadge,
  Button,
  Spacer,
  Flex,
  Text,
} from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'

const NavApp = () => {
  return (
    <Flex alignItems={'center'} p={'10px'} px={'100px'}>
      <HStack spacing={4}>
        <FaEarthAmericas className="logo-icon" size={60} />
        <Text marginTop="30px" fontSize={'2xl'} color={'#74A848'}>
          E A R T H
        </Text>
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <Avatar marginTop="35px" cursor={'pointer'}>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Button
          marginTop="35px"
          bgColor={'#74A848'}
          color={'white'}
          _hover={{ bg: 'green.500' }}
        >
          Log out
        </Button>
      </HStack>
    </Flex>
  )
}

export default NavApp
