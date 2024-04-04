// import React from 'react'
import { ImPencil } from 'react-icons/im'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { TbPuzzle2, TbTargetArrow } from 'react-icons/tb'
import { FormattedMessage } from 'react-intl'

interface Props {
  messages: Record<string, any>
}
const AboutUs: React.FC<Props> = ({ messages }) => {
  return (
    <>
      <div className="AboutUs" id="AboutUs">
        <div className="container">
          <div className="AboutUs_content">
            <h1 className="AboutUs_header">
              <FormattedMessage
                id={messages.aboutUs.header}
                defaultMessage={messages.aboutUs.header}
              />
            </h1>
            <p className="AboutUs_caption">
              <FormattedMessage
                id={messages.aboutUs.caption}
                defaultMessage={messages.aboutUs.caption}
              />
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
                  <FormattedMessage
                    id={messages.aboutUs.services.first}
                    defaultMessage={messages.aboutUs.services.first}
                  />
                </h4>
                <p className="AboutUs_service_item_caption">
                  <FormattedMessage
                    id={messages.aboutUs.descriptions.first}
                    defaultMessage={messages.aboutUs.descriptions.first}
                  />
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
                  <FormattedMessage
                    id={messages.aboutUs.services.second}
                    defaultMessage={messages.aboutUs.services.second}
                  />
                </h4>
                <p className="AboutUs_service_item_caption">
                  <FormattedMessage
                    id={messages.aboutUs.descriptions.second}
                    defaultMessage={messages.aboutUs.descriptions.second}
                  />
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
                  <FormattedMessage
                    id={messages.aboutUs.services.third}
                    defaultMessage={messages.aboutUs.services.third}
                  />
                </h4>
                <p className="AboutUs_service_item_caption">
                  <FormattedMessage
                    id={messages.aboutUs.descriptions.third}
                    defaultMessage={messages.aboutUs.descriptions.third}
                  />
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
                  <FormattedMessage
                    id={messages.aboutUs.services.forth}
                    defaultMessage={messages.aboutUs.services.forth}
                  />
                </h4>
                <p className="AboutUs_service_item_caption">
                  <FormattedMessage
                    id={messages.aboutUs.descriptions.forth}
                    defaultMessage={messages.aboutUs.descriptions.forth}
                  />
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
