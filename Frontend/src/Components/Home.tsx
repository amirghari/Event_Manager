import Navbar from './NavBar'
import MainHome from './MainHome'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from './Footer'
import enMessages from '../locals/en.json'
import fiMessages from '../locals/fi.json'
import { IntlProvider } from 'react-intl'
import { useEffect, useState } from 'react'

const Home = () => {
  const [locale, setLocale] = useState<'en' | 'fi' | 'fa'>(() => {
    const storedLocale = localStorage.getItem('locale')
    return storedLocale ? (storedLocale as 'en' | 'fi' | 'fa') : 'en'
  })
  const messages: Record<string, any> = {
    en: enMessages,
    fi: fiMessages,
    // fi: fiMessages,
    // fa: faMessages,
  }
  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])
  return (
    <>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        onError={() => {}}
      >
        <Navbar
          messages={messages[locale]}
          locale={locale}
          setLocale={setLocale}
        />
        <MainHome messages={messages[locale]} />
        <AboutUs messages={messages[locale]} />
        <ContactUs messages={messages[locale]} />
        <Footer />
      </IntlProvider>
    </>
  )
}

export default Home
