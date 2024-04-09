// import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/App.css'
import { FaEarthAmericas } from 'react-icons/fa6'
import { FormattedMessage } from 'react-intl'
import { TbLanguage } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const reloadHandler = () => {
    navigate('/Login', { replace: true })
    window.location.reload()
    console.log('reloaded')
  }
  const regReloadHandler = () => {
    navigate('/Register', { replace: true })
    window.location.reload()
    console.log('reloaded')
  }
  const handleLocaleChange = (newLocale: 'en' | 'fi' | 'fa') => {
    setLocale(newLocale)
    window.location.reload()
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
            <Link to="/Login" className="link-style" onClick={reloadHandler}>
              <FormattedMessage
                id={messages.navbar.login}
                defaultMessage={messages.navbar.login}
              />
            </Link>
          </button>
          <button className="btn reg_btn">
            <Link
              to="/Register"
              className="link-style"
              onClick={regReloadHandler}
            >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  style={{
                    marginRight: locale === 'fa' ? '0' : '8px',
                    marginLeft: locale === 'fa' ? '8px' : '0',
                  }}
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                    fill="#a62842"
                  ></path>
                  <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
                  <path
                    fill="#a62842"
                    d="M2 15.077H31V16.923000000000002H2z"
                  ></path>
                  <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
                  <path
                    d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
                    fill="#102d5e"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
                  ></path>
                </svg>{' '}
                English
              </MenuItem>
              <MenuItem onClick={() => handleLocaleChange('fi')} fontSize={20}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  style={{
                    marginRight: locale === 'fa' ? '0' : '8px',
                    marginLeft: locale === 'fa' ? '8px' : '0',
                  }}
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    fill="#0e2a69"
                    d="M31 14L15 14 15 4 11 4 11 14 1 14 1 18 11 18 11 28 15 28 15 18 31 18 31 14z"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                Finnish
              </MenuItem>
              <MenuItem onClick={() => handleLocaleChange('fa')} fontSize={20}>
                <svg
                  style={{
                    marginRight: locale === 'fa' ? '0' : '8px',
                    marginLeft: locale === 'fa' ? '8px' : '0',
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M1 11H31V21H1z"></path>
                  <path
                    d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                    fill="#4d9e4a"
                  ></path>
                  <path
                    d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 16 24)"
                    fill="#c92a1d"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M18.061,16.805c.39-1.199,.021-2.514-.934-3.337,1.038,1.536,.664,3.611-.825,4.692l.104-2.56v-2.015c-.161-.077-.301-.194-.405-.34-.104,.145-.243,.262-.405,.34v2.015l.104,2.56c-1.489-1.081-1.864-3.156-.825-4.692-.956,.822-1.324,2.138-.934,3.337,.263,.809,.825,1.437,1.523,1.803-.427,.156-.883,.227-1.342,.204,.539,.175,1.091,.195,1.608,.086l.004,.108,.267,.367,.267-.367,.004-.108c.517,.109,1.069,.089,1.608-.086-.459,.022-.915-.049-1.342-.204,.699-.366,1.26-.994,1.523-1.803Z"
                    fill="#c92a1d"
                  ></path>
                  <path
                    d="M19.077,14.634c-.355-.614-.943-1.058-1.631-1.23,1.513,1.138,1.818,3.287,.68,4.801-.002,.003-.004,.005-.006,.008,1.252-.724,1.681-2.326,.957-3.578Z"
                    fill="#c92a1d"
                  ></path>
                  <path
                    d="M14.554,13.404c-.688,.172-1.277,.616-1.631,1.23-.724,1.252-.295,2.854,.957,3.578-.002-.003-.004-.005-.006-.008-1.138-1.513-.833-3.663,.68-4.801Z"
                    fill="#c92a1d"
                  ></path>
                  <path
                    d="M15.311,13.215c.223,.157,.532,.103,.689-.12,.157,.223,.466,.277,.689,.12,.187-.132,.26-.375,.175-.588-.048,.254-.292,.421-.546,.373-.134-.025-.25-.107-.318-.225-.068,.118-.184,.2-.318,.225-.254,.048-.498-.119-.546-.373-.085,.213-.013,.456,.175,.588Z"
                    fill="#c92a1d"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                Persian
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
