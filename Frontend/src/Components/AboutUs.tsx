// import React from 'react'
import { ImPencil } from 'react-icons/im'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { TbPuzzle2, TbTargetArrow } from 'react-icons/tb'

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs" id="AboutUs">
        <div className="container">
          <div className="AboutUs_content">
            <h1 className="AboutUs_header">A complete desk at your disposal</h1>
            <p className="AboutUs_caption">
              Stay on top of your events, goals and daily routine
            </p>
          </div>
          <div className="AboutUs_services">
            <div className="AboutUs_service_item">
              <div className="AboutUs_service_icon">
                <a>
                  <ImPencil className="logo-icon" size={30} />
                </a>
              </div>
              <div className="AboutUs_service_item_content">
                <h4 className="AboutUs_service_item_header">
                  Everything You Need In One Place
                </h4>
                <p className="AboutUs_service_item_caption">
                  Event Manager takes care of all your hobbies and leisure time.
                </p>
              </div>
            </div>
            <div className="AboutUs_service_item">
              <div className="AboutUs_service_icon">
                <a>
                  <AiOutlineAreaChart className="logo-icon" size={40} />
                </a>
              </div>
              <div className="AboutUs_service_item_content">
                <h4 className="AboutUs_service_item_header">
                  Experience Nature At Its Best
                </h4>
                <p className="AboutUs_service_item_caption">
                  Collaborate with the team, have fun and communicate
                  effectively with others.
                </p>
              </div>
            </div>
            <div className="AboutUs_service_item">
              <div className="AboutUs_service_icon">
                <a>
                  <TbPuzzle2 className="logo-icon" size={30} />
                </a>
              </div>
              <div className="AboutUs_service_item_content">
                <h4 className="AboutUs_service_item_header">
                  Get An Overview Of All nature focused events
                </h4>
                <p className="AboutUs_service_item_caption">
                  Keep everything in one place. Set short-term or long-term
                  goals and increase productivity by categorizing events and
                  setting deadlines.
                </p>
              </div>
            </div>
            <div className="AboutUs_service_item">
              <div className="AboutUs_service_icon">
                <a>
                  <TbTargetArrow className="logo-icon" size={30} />
                </a>
              </div>
              <div className="AboutUs_service_item_content">
                <h4 className="AboutUs_service_item_header">
                  Work With Any Team, In Any Event
                </h4>
                <p className="AboutUs_service_item_caption">
                  It does not matter if you are a beginner in camping or hiking;
                  Event Manager is an ideal tool for you of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
