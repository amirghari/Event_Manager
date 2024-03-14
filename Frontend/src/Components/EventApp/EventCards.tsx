import { Events } from '../../Hooks/useEvents'
import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MdLocationOn, MdDateRange } from 'react-icons/md'
import { joinEvent, checkEventJoined } from '../../Hooks/userHook'
interface EventCardProps {
  event: Events
  userId: string
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const storedUserName = localStorage.getItem('user')
    setUserName(storedUserName)

    const fetchJoinedStatus = async () => {
      const joined = await checkEventJoined(storedUserName, event.Id)
      setJoinButton(joined)
    }

    fetchJoinedStatus()
  }, [])
  const [joinButton, setJoinButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const eventHandler = async () => {
    if (!userName) {
      console.error('Username is not set.')
      alert('You must be logged in to join an event.')
      return
    }
    setIsLoading(true)
    try {
      const response = await joinEvent(userName, event)
      if (response.ok) {
        setJoinButton(!joinButton)
      } else {
        const errorData = await response.json()
        console.error('Failed to join event:', errorData.message)
        alert(errorData.message)
      }
    } catch (error) {
      console.error('Error joining event:', error)
      alert('An error occurred while trying to join the event.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card borderRadius={10} overflow={'hidden'} marginX={2}>
        <Image src={event.Image} alt="Image Description" />
        <CardBody>
          <Heading fontSize={'18px'}>{event.Title}</Heading>
          <HStack justifyContent={'space-between'} marginY={'4px'}>
            <HStack>
              <MdDateRange color="#74A848" />
              <Text fontSize={'10px'}>{event.Date}</Text>
            </HStack>
            <HStack>
              <MdLocationOn color="#74A848" />
              <Text fontSize={'10px'}>{event.Location}</Text>
            </HStack>
          </HStack>
          <Button
            onClick={eventHandler}
            colorScheme={joinButton ? 'gray' : 'teal'}
            isLoading={isLoading}
            variant="outline"
            size="sm"
          >
            {joinButton ? 'Joined' : 'Join'}
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default EventCard
