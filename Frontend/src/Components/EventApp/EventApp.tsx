import { Grid, GridItem } from '@chakra-ui/react'
import NavApp from './NavApp'

const EventApp = () => {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav' 'nav'
        'aside' 'main'`,
      }}
    >
      <GridItem gridArea="nav">
        <NavApp />
      </GridItem>
    </Grid>
  )
}

export default EventApp
