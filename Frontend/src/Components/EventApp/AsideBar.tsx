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
import { FormattedMessage } from 'react-intl'
import { Form } from 'react-router-dom'

interface Props {
  messages: Record<string, any>
}

const AsideBar: React.FC<Props> = ({ messages }) => {
  const [locale, setLocale] = useState<'en' | 'fi' | 'fa'>(() => {
    const storedLocale = localStorage.getItem('locale')
    return storedLocale ? (storedLocale as 'en' | 'fi' | 'fa') : 'en'
  })
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
            <FormattedMessage
              id={messages.eventApp.search}
              defaultMessage={messages.eventApp.search}
            />
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
            <FormattedMessage
              id={messages.eventApp.dashboard}
              defaultMessage={messages.eventApp.dashboard}
            />
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
            <FormattedMessage
              id={messages.eventApp.newEvent}
              defaultMessage={messages.eventApp.newEvent}
            />
          </Link>
          <div className={`${locale === 'fa' ? 'rtl' : ''}`}>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <FormattedMessage
                    id={messages.eventApp.createYourEvent}
                    defaultMessage={messages.eventApp.createYourEvent}
                  />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.title}
                        defaultMessage={messages.eventApp.title}
                      />
                    </FormLabel>
                    <Input
                      name="Title"
                      placeholder={messages.eventApp.title}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.description}
                        defaultMessage={messages.eventApp.description}
                      />
                    </FormLabel>
                    <Input
                      name="Description"
                      placeholder={messages.eventApp.description}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.organizer}
                        defaultMessage={messages.eventApp.organizer}
                      />
                    </FormLabel>
                    <Input
                      name="Organizer"
                      placeholder={messages.eventApp.organizer}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.location}
                        defaultMessage={messages.eventApp.location}
                      />
                    </FormLabel>
                    <Input
                      name="Location"
                      placeholder={messages.eventApp.location}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.date}
                        defaultMessage={messages.eventApp.date}
                      />
                    </FormLabel>
                    <Input
                      name="Date"
                      type="date"
                      placeholder={messages.eventApp.date}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.time}
                        defaultMessage={messages.eventApp.time}
                      />
                    </FormLabel>
                    <Input
                      name="Time"
                      type="time"
                      placeholder={messages.eventApp.time}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>
                      <FormattedMessage
                        id={messages.eventApp.imageUrl}
                        defaultMessage={messages.eventApp.imageUrl}
                      />
                    </FormLabel>
                    <Input
                      name="Image"
                      placeholder={messages.eventApp.imageUrl}
                      onChange={handleChange}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="green" mr={3} onClick={handleSubmit}>
                    <FormattedMessage
                      id={messages.eventApp.submit}
                      defaultMessage={messages.eventApp.submit}
                    />
                  </Button>
                  <Button onClick={onClose}>
                    <FormattedMessage
                      id={messages.eventApp.cancel}
                      defaultMessage={messages.eventApp.cancel}
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
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
            <FormattedMessage
              id={messages.eventApp.account}
              defaultMessage={messages.eventApp.account}
            />
          </Link>
        </HStack>
      </ListItem>
    </List>
  )
}

export default AsideBar
