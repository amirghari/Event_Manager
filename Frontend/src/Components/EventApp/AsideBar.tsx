import { Flex, HStack, Link, List, ListItem } from '@chakra-ui/react'
import {
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
  MdAccountCircle,
} from 'react-icons/md'

const AsideBar = () => {
  return (
    <>
      <List
        marginTop={'50px'}
        padding={'50px'}
        bgColor={'#B6CC76'}
        width="20%"
        height={'60vh'}
        marginLeft="30px"
        borderRadius="5%"
        spacing={12}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
      >
        <ListItem>
          <HStack>
            <MdOutlineEventAvailable size={40} color="#74A848" />
            <Link href="/EventApp/NewEvent" color={'white'}>
              New Event
            </Link>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <MdOutlineSpaceDashboard size={40} color="#74A848" />
            <Link href="/EventApp/DashBoard" color={'white'}>
              Dashboard
            </Link>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <MdSearch size={40} color="#74A848" />
            <Link href="/EventApp/EventSearch" color={'white'}>
              Search
            </Link>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <MdAccountCircle size={40} color="#74A848" />
            <Link href="/EventApp/EventAccount" color={'white'}>
              Account
            </Link>
          </HStack>
        </ListItem>
      </List>
    </>
  )
}

export default AsideBar
