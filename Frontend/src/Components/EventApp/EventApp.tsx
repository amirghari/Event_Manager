import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavApp from './NavApp'
import AsideBar from './AsideBar'
import DrawerMenu from './DrawerMenu'

const EventApp = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'nav'
        'aside' 'main'`,
      }}
    >
      <GridItem gridArea="nav">
        <NavApp />
      </GridItem>
      <Show above="md">
        <GridItem gridArea="aside">
          <AsideBar />
        </GridItem>
      </Show>
    </Grid>
  )
}

export default EventApp
