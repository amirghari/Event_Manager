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
import React, { useState } from 'react'
import { useEventApi } from '../../Hooks/createEvent'
import {
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
  MdAccountCircle,
} from 'react-icons/md'
export interface EventParams {
  Id: number
  Title: string
  Description: string
  Organizer: string
  Location: string
  Date: string
  Time: string
  Image: string
}

const AsideBar = () => {
  let id = 20
  let id2 = ++id
  id = id2
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [eventParams, setEventParams] = useState<EventParams>({
    Id: ++id2,
    Title: '',
    Description: '',
    Organizer: '',
    Location: '',
    Date: '',
    Time: '',
    Image: '',
  })

  const { createEvent } = useEventApi()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventParams({ ...eventParams, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await createEvent(eventParams)
      console.log('Event created successfully')
      onClose()
    } catch (error) {
      console.error('Failed to create event:', error)
    }
    window.location.reload()
  }

  const initialRef = React.useRef(null)
  return (
    <List
      marginTop={'10px'}
      padding={'50px'}
      bgColor={'#B6CC76'}
      height={'43vh'}
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
                    name="Title"
                    placeholder="Event Title"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    name="Description"
                    placeholder="Description"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Organizer</FormLabel>
                  <Input
                    name="Organizer"
                    placeholder="Organizer"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input
                    name="Location"
                    placeholder="Location"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Date</FormLabel>
                  <Input
                    name="Date"
                    type="date"
                    placeholder="Select the Date"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Time</FormLabel>
                  <Input
                    name="Time"
                    type="time"
                    placeholder="Select the Time"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    name="Image"
                    placeholder="Image Url"
                    onChange={handleChange}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="green" mr={3} onClick={handleSubmit}>
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
