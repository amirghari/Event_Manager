import { Events } from '../../Hooks/useEvents'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

const EventCard = ({ event }: { event: Events }) => {
  return (
    <>
      <Card borderRadius={10} overflow={'hidden'} marginX={2}>
        <Image src={event.Image} />
        <CardBody>
          <Heading fontSize={'2xl'}>{event.Title}</Heading>
        </CardBody>
      </Card>
    </>
  )
}

export default EventCard
