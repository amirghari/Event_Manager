import Navbar from './NavBar'
import MainHome from './MainHome'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Login from './Login'
// import TaskDisplay from './TaskDisplay'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TaskDisplay /> */}
      <MainHome />
      <AboutUs />
      <ContactUs />
      <Footer />
      <Login />
    </>
  )
}

export default Home
