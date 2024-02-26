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
                    href="/EventApp/NewEvent"
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    New Event
                  </Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <MdOutlineSpaceDashboard size={30} color="#74A848" />
                  <Link
                    href="/EventApp/DashBoard"
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    Dashboard
                  </Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <MdSearch size={30} color="#74A848" />
                  <Link
                    href="/EventApp/EventSearch"
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    Search
                  </Link>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <MdAccountCircle size={30} color="#74A848" />
                  <Link
                    href="/EventApp/EventAccount"
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    Account
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
