import { FormattedMessage } from 'react-intl'

interface Props {
  messages: Record<string, any>
}
const ContactUs: React.FC<Props> = ({ messages }) => {
  const onClick = () => {
    alert(
      'Your message has been sent successfully!, We will get back to you soon. Thank you!',
    )
  }

  return (
    <>
      <div className="container" id="ContactUs">
        <div className="AboutUs_content">
          <h1 className="AboutUs_header">
            <FormattedMessage
              id={messages.contactUs.header}
              defaultMessage={messages.contactUs.header}
            />
          </h1>
        </div>
        <div className="contact_content">
          <div className="contact_address">
            <h4 className="contact_address_title">
              <FormattedMessage
                id={messages.contactUs.addressHeader}
                defaultMessage={messages.contactUs.addressHeader}
              />
            </h4>
            <p className="contact_address_caption">Metropolia</p>
            <p className="contact_address_caption">
              Karaportti 2 02340, Espoo Finland
            </p>
            <p className="contact_address_caption">Email: info@metropolia.fi</p>
            <p className="contact_address_caption">Phone: +358 (0)401231233</p>
          </div>
          <div className="contact">
            <h4 className="contact_title">
              <FormattedMessage
                id={messages.contactUs.formHeader}
                defaultMessage={messages.contactUs.formHeader}
              />
            </h4>
            <form action="#" className="contact_form">
              <input
                type="text"
                className="contact_input"
                placeholder={messages.contactUs.namePH}
              />
              <input
                type="text"
                className="contact_input"
                placeholder={messages.contactUs.emailPH}
              />
              <input
                type="text"
                className="contact_input"
                placeholder={messages.contactUs.subjectPH}
              />
              <textarea
                className="contact_input contact_input_textarea"
                rows={5}
                placeholder={messages.contactUs.messagePH}
              ></textarea>
              <button
                className="contact_button"
                type="submit"
                onClick={onClick}
              >
                <FormattedMessage
                  id={messages.contactUs.button}
                  defaultMessage={messages.contactUs.button}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
