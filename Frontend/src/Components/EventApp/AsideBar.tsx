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
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

import {
  MdOutlineEventAvailable,
  MdOutlineSpaceDashboard,
  MdSearch,
  MdAccountCircle,
} from 'react-icons/md'

const AsideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    organizer: '',
    location: '',
    dateTime: '',
    time: '',
    user_id: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = () => {
    // Make a POST request to your backend API
    axios.post('http://localhost:3000/api/createEvent', eventData)
      .then(response => {
        // Handle success if needed
        console.log('Event created successfully:', response.data);
        onClose(); // Close the modal after successful submission
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error creating event:', error);
      });
  };

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
                    name="title"
                    value={eventData.title}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    focusBorderColor="green.500"
                    placeholder="Description"
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Organizer</FormLabel>
                  <Input 
                    focusBorderColor="green.500"
                    placeholder="Organizer"
                    name="organizer"
                    value={eventData.organizer}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input 
                    focusBorderColor="green.500" 
                    placeholder="Location"
                    name="location"
                    value={eventData.location}
                    onChange={handleInputChange} 
                  />

                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Date & Time</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    focusBorderColor="green.500"
                    name="dateTime"
                    value={eventData.dateTime}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Set time Image</FormLabel>
                  <Input
                    focusBorderColor="green.500"
                    placeholder='Set time'
                    name= 'time'
                    value={eventData.time}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>User ID</FormLabel>
                  <Input
                    focusBorderColor="green.500"
                    placeholder="User ID"
                    name="user_id"
                    value={eventData.user_id}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="green" mr={3} onClick={handleSubmit}>Submit</Button>
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
