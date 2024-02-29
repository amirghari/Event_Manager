import {
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Drawer,
  List,
  ListItem,
  HStack,
  Link,
} from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'
import {
  MdAccountCircle,
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <FaEarthAmericas className="logo-icon" size={50} onClick={onOpen} />

      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <List
              spacing={12}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'flex-start'}
              marginTop={'50px'}
              padding={'50px'}
            >
              <ListItem>
                <HStack>
                  <MdOutlineEventAvailable size={30} color="#74A848" />
                  <Link
                    color={'#74A848'}
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
                    color={'#74A848'}
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
                    color={'#74A848'}
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
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    <NavLink to="/EventApp/EventAccount">Account</NavLink>
                  </Link>
                </HStack>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerMenu
