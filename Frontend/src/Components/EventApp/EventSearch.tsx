import EventCards from './EventCards'
import useEvents from '../../Hooks/useEvents'
import { Events } from '../../Hooks/useEvents'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
const EventSearch = () => {
  const { events } = useEvents()
  return (
    <>
      <GridItem gridArea="main">
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
          padding={'10px'}
          spacing={3}
        >
          {events ? (
            events.map((event: Events) => (
              <EventCards key={event.Id} event={event} />
            ))
          ) : (
            <li>No games available.</li>
          )}
        </SimpleGrid>
      </GridItem>
    </>
  )
}
export default EventSearch
