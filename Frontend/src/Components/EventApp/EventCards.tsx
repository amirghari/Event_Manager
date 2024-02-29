import { Events } from '../../Hooks/useEvents'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'

const EventCard = ({ event }: { event: Events }) => {
  return (
    <>
      <Card borderRadius={10} overflow={'hidden'} marginX={2}>
        <Image src={event.Image} />
        <CardBody>
          <Heading fontSize={'xl'}>{event.Title}</Heading>
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'large'}>{event.Description}</Text>
          </HStack>
        </CardBody>
      </Card>
    </>
  )
}

export default EventCard
