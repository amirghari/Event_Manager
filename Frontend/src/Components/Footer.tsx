// import React from 'react'
import { AiFillFacebook, AiOutlineYoutube, AiOutlineLinkedin, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
         <div className="container">
            <div className="footer_wrapper">
                <p className="footer_content">© 2023 Web Development TX00EY23-3001 Group 4. All rights reserved.</p>
                <div className="footer_icons">
                    <a><AiFillFacebook className="footer_icon_item" size={30} /></a>
                    <a><AiOutlineYoutube className="footer_icon_item" size={30} /></a>
                    <a><AiFillInstagram className="footer_icon_item" size={30} /></a>
                    <a><AiOutlineLinkedin className="footer_icon_item" size={30}/></a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Footer