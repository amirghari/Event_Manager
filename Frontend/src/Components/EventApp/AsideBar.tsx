import { HStack, Link, List, ListItem } from '@chakra-ui/react'
import {
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
  MdAccountCircle,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const AsideBar = () => {
  return (
    <List
      marginTop={'10px'}
      padding={'50px'}
      bgColor={'#B6CC76'}
      height={'50vh'}
      marginLeft="30px"
      borderRadius={10}
      spacing={12}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'flex-start'}
    >
      <ListItem>
        <HStack>
          <MdOutlineEventAvailable size={30} color="#74A848" />
          <Link
            href="/EventApp/NewEvent"
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
          >
            <NavLink to="/EventApp/NewEvent">NewEvent</NavLink>
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <MdOutlineSpaceDashboard size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
          >
            <NavLink to="/EventApp/Dashboard">Dashboard</NavLink>
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <MdSearch size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
          >
            <NavLink to="/EventApp/EventSearch">Search</NavLink>
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <MdAccountCircle size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
          >
            <NavLink to="/EventApp/EventAccount">Account</NavLink>
          </Link>
        </HStack>
      </ListItem>
    </List>
  )
}

export default AsideBar
