const ContactUs = () => {
  const onClick = () => {
    alert(
      'Your message has been sent successfully!, We will get back to you soon. Thank you!',
    )
  }

  return (
    <>
      <div className="container" id="ContactUs">
        <div className="AboutUs_content">
          <h1 className="AboutUs_header">Let&apos;s be in touch</h1>
          <p className="AboutUs_caption">
            Stay on top of your projects, goals and daily tasks
          </p>
        </div>
        <div className="contact_content">
          <div className="contact_address">
            <h4 className="contact_address_title">Visit us at:</h4>
            <p className="contact_address_caption">Metropolia</p>
            <p className="contact_address_caption">
              Karaportti 2 02340, Espoo Finland
            </p>
            <p className="contact_address_caption">Email: info@metropolia.fi</p>
            <p className="contact_address_caption">Phone: +358 (0)401231233</p>
          </div>
          <div className="contact">
            <h4 className="contact_title">How Can We Help You?</h4>
            <form action="#" className="contact_form">
              <input
                type="text"
                className="contact_input"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="contact_input"
                placeholder="Your Email Address"
              />
              <input
                type="text"
                className="contact_input"
                placeholder="Subject"
              />
              <textarea
                className="contact_input contact_input_textarea"
                rows={5}
                placeholder="Enter Your Message"
              ></textarea>
              <button
                className="contact_button"
                type="submit"
                onClick={onClick}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
