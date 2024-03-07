import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import {
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
  MdAccountCircle,
} from 'react-icons/md'

const AsideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
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
          <MdSearch size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
            href="/EventApp"
          >
            Search
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <MdOutlineSpaceDashboard size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
            href="/EventApp/Dashboard"
          >
            Dashboard
          </Link>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <MdOutlineEventAvailable size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
            onClick={onOpen}
          >
            New Event
          </Link>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your Event</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Event Title</FormLabel>
                  <Input
                    ref={initialRef}
                    focusBorderColor="green.500"
                    placeholder="Event Title"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    focusBorderColor="green.500"
                    placeholder="Description"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Organizer</FormLabel>
                  <Input focusBorderColor="green.500" placeholder="Organizer" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input focusBorderColor="green.500" placeholder="Location" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Date & Time</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    focusBorderColor="green.500"
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="green" mr={3}>
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </ListItem>

      <ListItem>
        <HStack>
          <MdAccountCircle size={30} color="#74A848" />
          <Link
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
            href="/EventApp/EventAccount"
          >
            Account
          </Link>
        </HStack>
      </ListItem>
    </List>
  )
}

export default AsideBar
