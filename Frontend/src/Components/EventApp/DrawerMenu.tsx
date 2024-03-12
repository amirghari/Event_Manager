import {
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  List,
  ListItem,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { FaEarthAmericas } from 'react-icons/fa6'
import {
  MdAccountCircle,
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useEventApi } from '../../Hooks/createEvent'
import { useState } from 'react'
import { EventParams } from './AsideBar'
import React from 'react'

function DrawerMenu() {
  let id = 20
  const {
    isOpen: isFirstModalOpen,
    onOpen: onFirstModalOpen,
    onClose: onFirstModalClose,
  } = useDisclosure()
  // Second modal controls
  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure()
  const [eventParams, setEventParams] = useState<EventParams>({
    Id: id++,
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
      {
        ;() => onSecondModalClose
      }
    } catch (error) {
      console.error('Failed to create event:', error)
    }
    window.location.reload()
  }

  const initialRef = React.useRef(null)

  return (
    <>
      <FaEarthAmericas
        className="logo-icon"
        size={50}
        onClick={onFirstModalOpen}
      />

      <Drawer
        placement={'left'}
        onClose={onFirstModalClose}
        isOpen={isFirstModalOpen}
      >
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
                  <MdSearch size={30} color="#74A848" />
                  <Link
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                  >
                    <NavLink to="/EventApp">Search</NavLink>
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
                  <MdOutlineEventAvailable size={30} color="#74A848" />
                  <Link
                    color={'#74A848'}
                    fontSize={{ base: 'sm', md: 'md', lg: 'x-large' }}
                    onClick={onSecondModalOpen}
                  >
                    NewEvent
                  </Link>
                  <Modal
                    initialFocusRef={initialRef}
                    isOpen={isSecondModalOpen}
                    onClose={onSecondModalClose}
                  >
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
                        <Button
                          colorScheme="green"
                          mr={3}
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                        <Button onClick={onSecondModalClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
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
