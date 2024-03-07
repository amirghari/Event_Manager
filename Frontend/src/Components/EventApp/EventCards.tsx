import useEvents, { Events } from '../../Hooks/useEvents'
import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdLocationOn, MdDateRange } from 'react-icons/md'

const EventCard = ({ event }: { event: Events }) => {
  const [joinButton, setJoinButton] = useState(false)
  const { joinedEvents = [], setJoinedEvents } = useEvents()

  const eventHandler = (clickedEvent: Events) => {
    console.log('Clicked Event:', clickedEvent)
    const isEventJoined = joinedEvents.some((e) => e.Id === clickedEvent.Id)
    console.log('Is Event Joined:', isEventJoined)
    if (!isEventJoined) {
      setJoinButton(true)
      setJoinedEvents([...joinedEvents, clickedEvent])
    } else {
      setJoinButton(false)
    }
    // const isEventJoined = joinedEvents.some((e) => e.Id === clickedEvent.Id)
    // if (!isEventJoined) {
    //   setJoinedEvents([...joinedEvents, clickedEvent])
    //   console.log('Joined Events:', joinedEvents)
    //   setJoinButton(true) // Assuming you want to set the button state here as well
    // } else {
    //   setJoinedEvents(joinedEvents.filter((e) => e.Id !== clickedEvent.Id))
    //   setJoinButton(false) // Assuming you want to unset the button state here as well
    // }
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
            onClick={() => eventHandler(event)}
            colorScheme={joinButton ? 'gray' : 'teal'}
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
