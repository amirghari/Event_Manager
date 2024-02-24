import { Grid, GridItem } from '@chakra-ui/react'
import NavApp from './NavApp'
import AsideBar from './AsideBar'

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
      <GridItem gridArea="aside">
        <AsideBar />
      </GridItem>
    </Grid>
  )
}

export default EventApp
