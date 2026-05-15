import { Mail, MapPin, MoveRight, Phone } from 'lucide-react'
import Button from '../ui/Button'
import '../styles/Contact.css'

const contactItems = [
  {
    icon: <Phone size={17} strokeWidth={2} />,
    text: '+234 812 345 6789',
  },
  {
    icon: <Mail size={17} strokeWidth={2} />,
    text: 'hello@laptopcheck.com',
  },
  {
    icon: <MapPin size={17} strokeWidth={2} />,
    text: 'Lagos, Nigeria',
  },
]

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-layout">
          <div className="contact-panel">
            <p className="contact-label">READY TO VERIFY A LAPTOP?</p>
            <h2 className="contact-heading">Send the details and we will guide you.</h2>

            <p className="contact-copy">
              Share the laptop model and a few details, and we will get back to
              you with a verification report you can trust.
            </p>

            <div className="contact-list">
              {contactItems.map((item) => (
                <div className="contact-item" key={item.text}>
                  <span className="contact-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label className="contact-field">
                <span>Your Name</span>
                <input type="text" name="name" placeholder="Your Name" required />
              </label>

              <label className="contact-field">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </label>

              <label className="contact-field contact-field--full">
                <span>Laptop Model</span>
                <input
                  type="text"
                  name="laptopModel"
                  placeholder="Laptop Model"
                  required
                />
              </label>

              <label className="contact-field contact-field--full">
                <span>Your Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us the laptop specs, seller info or anything you want us to check."
                  required
                />
              </label>
            </div>

            <Button
              type="submit"
              className="contact-submit"
              mobileLabel="Send"
              icon={<MoveRight size={18} strokeWidth={2.4} />}
            >
              Send for Verification
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
