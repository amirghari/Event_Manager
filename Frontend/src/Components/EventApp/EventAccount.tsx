import { Grid, GridItem, Show, SimpleGrid } from '@chakra-ui/react'
import NavApp from './NavApp'
import AsideBar from './AsideBar'

import { useEvents } from '../../Hooks/useEvents'

const EventAccount = () => {
  useEvents()
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '300px 1fr',
      }}
    >
      <GridItem gridArea="nav">
        <NavApp />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          <AsideBar />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3, xl: 4 }}
          padding={'10px'}
          spacing={3}
        ></SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export default EventAccount
