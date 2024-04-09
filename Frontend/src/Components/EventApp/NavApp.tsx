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
import { Link } from 'react-router-dom'
import { FaEarthAmericas } from 'react-icons/fa6'
import DrawerMenu from './DrawerMenu'
import { FormattedMessage } from 'react-intl'

interface Props {
  messages: Record<string, any>
}

const NavApp: React.FC<Props> = ({ messages }) => {
  return (
    <Flex alignItems={'center'} p={'10px'} px={'100px'}>
      <HStack spacing={4}>
        <Show above="lg">
          <FaEarthAmericas className="logo-icon" size={50} />
        </Show>
        <Show below="959px">
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
          borderRadius={0}
          _hover={{ bg: 'red.200' }}
        >
          <Link to={'../'}>
            <FormattedMessage
              id={messages.eventApp.logout}
              defaultMessage={messages.eventApp.logout}
            />
          </Link>
        </Button>
      </HStack>
    </Flex>
  )
}

export default NavApp
