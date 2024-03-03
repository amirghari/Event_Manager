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
import { MdLocationOn, MdDateRange } from 'react-icons/md'

const EventCard = ({ event }: { event: Events }) => {
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
          <Button colorScheme="teal" variant="outline" size="sm">
            Join
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default EventCard
