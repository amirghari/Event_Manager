// import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/App.css'
import { FaEarthAmericas } from 'react-icons/fa6'
import { FormattedMessage } from 'react-intl'
import { TbLanguage } from 'react-icons/tb'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

interface Props {
  messages: Record<string, any>
  locale: 'en' | 'fi' | 'fa'
  setLocale: (locale: 'en' | 'fi' | 'fa') => void
}

const Navbar: React.FC<Props> = ({ messages, locale, setLocale }) => {
  const handleLocaleChange = (newLocale: 'en' | 'fi' | 'fa') => {
    setLocale(newLocale)
  }

  const [toggle, setToggle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggle = () => {
    setToggle(!toggle)
  }
  const menuOpener = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="nav__logo">
          <a>
            <FaEarthAmericas className="logo-icon" size={60} />
          </a>
        </div>
        <div className="nav__menu">
          <ul className="nav-menu-parent">
            <li className="nav-menu-items home">
              <a className="menu-link" href="#Home">
                <FormattedMessage
                  id={messages.navbar.home}
                  defaultMessage={messages.navbar.home}
                />
              </a>
            </li>
            <li className="nav-menu-items">
              <a className="menu-link" href="#AboutUs">
                <FormattedMessage
                  id={messages.navbar.about}
                  defaultMessage={messages.navbar.about}
                />
              </a>
            </li>
            <li className="nav-menu-items">
              <a className="menu-link" href="#ContactUs">
                <FormattedMessage
                  id={messages.navbar.contact}
                  defaultMessage={messages.navbar.contact}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle_menu" onClick={menuToggle}>
          <div
            onClick={menuOpener}
            className={toggle ? 'menu-toggle-open' : 'nav__toggle-menu-line'}
          ></div>
          {menuOpen && (
            <ul
              className={
                menuOpen ? 'nav-menu-parent menu-open' : 'nav-menu-parent'
              }
            >
              <li className="nav-menu-items home">
                <a className="menu-link" href="Home">
                  <FormattedMessage
                    id={messages.navbar.home}
                    defaultMessage={messages.navbar.home}
                  />
                </a>
              </li>
              <li className="nav-menu-items">
                <a className="menu-link" href="About-us">
                  <FormattedMessage
                    id={messages.navbar.about}
                    defaultMessage={messages.navbar.about}
                  />
                </a>
              </li>
              <li className="nav-menu-items">
                <a className="menu-link" href="Contact-us">
                  <FormattedMessage
                    id={messages.navbar.contact}
                    defaultMessage={messages.navbar.contact}
                  />
                </a>
              </li>
              <li className="nav-menu-items">
                <Link to="/Login" className="menu-link link-style link">
                  <FormattedMessage
                    id={messages.navbar.login}
                    defaultMessage={messages.navbar.login}
                  />
                </Link>
              </li>
              <li className="nav-menu-items">
                <a className="menu-link" href="Register">
                  <FormattedMessage
                    id={messages.navbar.register}
                    defaultMessage={messages.navbar.register}
                  />
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="btn-nav">
          <button className="btn btn-sign-in">
            <Link to="/Login" className="link-style">
              <FormattedMessage
                id={messages.navbar.login}
                defaultMessage={messages.navbar.login}
              />
            </Link>
          </button>
          <button className="btn reg_btn">
            <Link to="/Register" className="link-style">
              <FormattedMessage
                id={messages.navbar.register}
                defaultMessage={messages.navbar.register}
              />
            </Link>
          </button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<TbLanguage color="#3F3D56" size={40} />}
              variant="outline"
              size={'lg'}
              marginStart={7}
              _focus={{ boxShadow: 'none' }}
            />
            <MenuList>
              <MenuItem onClick={() => handleLocaleChange('en')} fontSize={20}>
                English
              </MenuItem>
              <MenuItem onClick={() => handleLocaleChange('fi')} fontSize={20}>
                Finnish
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      {menuOpen && <div className="cover cover-active"></div>}
    </div>
  )
}

export default Navbar
