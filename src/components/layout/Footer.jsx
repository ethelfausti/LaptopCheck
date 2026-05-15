import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../../assets/navimg/Logo2.png'
import '../styles/Footer.css'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const contactItems = [
  {
    icon: <Phone size={15} strokeWidth={2} />,
    text: '+234 812 345 6789',
  },
  {
    icon: <Mail size={15} strokeWidth={2} />,
    text: 'hello@victoiregadget.com',
  },
  {
    icon: <MapPin size={15} strokeWidth={2} />,
    text: '12 Admiralty Way, Lekki Phase 1, Lagos',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <img src={Logo} alt="LaptopCheck logo" />
              <div>
                <p className="footer-brand-name">LaptopCheck</p>
                <span className="footer-brand-sub">by Victoire Gadgets</span>
              </div>
            </div>

            <p className="footer-brand-copy">
              Helping Nigerians buy laptops with more confidence.
            </p>
          </div>

          <div className="footer-links">
            <p className="footer-title">Quick Links</p>
            <div className="footer-link-list">
              {quickLinks.map((item) => (
                <a href={item.href} key={item.name}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <p className="footer-title">Contact</p>
            <div className="footer-contact-list">
              {contactItems.map((item) => (
                <div className="footer-contact-item" key={item.text}>
                  <span className="footer-contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          Copyright 2026 LaptopCheck. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
