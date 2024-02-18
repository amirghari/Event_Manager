// import React from 'react'
import { ImPencil } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TbPuzzle2, TbTargetArrow } from "react-icons/tb";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs" id="AboutUs">
        <div className="container" >
            <div className="AboutUs_content">
                <h1 className="AboutUs_header">A complete desk at your disposal</h1>
                <p className="AboutUs_caption">Stay on top of your projects, goals and daily tasks</p>
            </div>
            <div className="AboutUs_services">
                <div className="AboutUs_service_item">
                        <div className="AboutUs_service_icon">
                            <a><ImPencil className="logo-icon" size={30}/></a>
                        </div>
                        <div className="AboutUs_service_item_content">
                            <h4 className="AboutUs_service_item_header">Everything You Need In One Place</h4>
                            <p className="AboutUs_service_item_caption">TaskManager takes care of all your project management and team communication requirements and integrates well with the other tools you use.</p>
                        </div>    
                </div>
                <div className="AboutUs_service_item">
                        <div className="AboutUs_service_icon">
                            <a><AiOutlineAreaChart className="logo-icon" size={40}/></a>
                        </div>
                        <div className="AboutUs_service_item_content">
                            <h4 className="AboutUs_service_item_header">Experience Teamwork At Its Best</h4>
                            <p className="AboutUs_service_item_caption">Collaborate with the team, minimize misunderstandings and communicate effectively with others.</p>
                        </div>    
                </div>
                <div className="AboutUs_service_item">
                        <div className="AboutUs_service_icon">
                            <a><TbPuzzle2 className="logo-icon" size={30}/></a>
                        </div>
                        <div className="AboutUs_service_item_content">
                            <h4 className="AboutUs_service_item_header">Get An Overview Of All Projects</h4>
                            <p className="AboutUs_service_item_caption">Keep everything in one place. Set short-term or long-term goals and increase productivity by categorizing tasks and setting deadlines.</p>
                        </div>    
                </div>
                <div className="AboutUs_service_item">
                        <div className="AboutUs_service_icon">
                            <a><TbTargetArrow className="logo-icon" size={30}/></a>
                        </div>
                        <div className="AboutUs_service_item_content">
                            <h4 className="AboutUs_service_item_header">Work With Any Team, In Any Industry</h4>
                            <p className="AboutUs_service_item_caption">It does not matter if you are a freelancer or working in a company with hundreds of employees; TaskManager is an ideal tool for teams of all sizes.</p>
                        </div>    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs