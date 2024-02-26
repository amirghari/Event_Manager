import {
  HStack,
  Avatar,
  AvatarBadge,
  Button,
  Spacer,
  Flex,
  Text,
  Show,
} from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'
import DrawerMenu from './DrawerMenu'

const NavApp = () => {
  return (
    <Flex alignItems={'center'} p={'10px'} px={'100px'}>
      <HStack spacing={4}>
        <Show above="md">
          <FaEarthAmericas className="logo-icon" size={50} />
        </Show>
        <Show below="md">
          <DrawerMenu />
        </Show>
        <Text
          marginTop="30px"
          color={'#74A848'}
          fontSize={{ xsm: '0px', sm: '15px', md: '20px', lg: '30px' }}
        >
          E A R T H
        </Text>
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <Show above="sm">
          <Avatar marginTop="35px" cursor={'pointer'}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Show>
        <Button
          marginTop="35px"
          bgColor={'#FF6585'}
          color={'white'}
          _hover={{ bg: 'red.200' }}
        >
          Log out
        </Button>
      </HStack>
    </Flex>
  )
}

export default NavApp
