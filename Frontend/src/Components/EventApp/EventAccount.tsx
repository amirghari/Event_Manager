import { Grid, GridItem, Show, SimpleGrid } from '@chakra-ui/react'
import NavApp from './NavApp'
import AsideBar from './AsideBar'
import enMessages from '../../locals/en.json'
import fiMessages from '../../locals/fi.json'
import faMessages from '../../locals/fa.json'
import { useEvents } from '../../Hooks/useEvents'
import { useState } from 'react'

const EventAccount = () => {
  const [locale, setLocale] = useState<'en' | 'fi' | 'fa'>(() => {
    const storedLocale = localStorage.getItem('locale')
    return storedLocale ? (storedLocale as 'en' | 'fi' | 'fa') : 'en'
  })
  const messages: Record<string, any> = {
    en: enMessages,
    fi: fiMessages,
    fa: faMessages,
  }
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
        <NavApp messages={messages[locale]} />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          <AsideBar messages={messages[locale]} />
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
