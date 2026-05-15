import Logo from '../../assets/navimg/Logo2.png'

import '../styles/Navbar.css'
import Button from '../ui/Button'
import { useState } from 'react'
import { Menu, MoveRight, X } from 'lucide-react'




const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'Contact', link: '#contact' },
]



export default function Navbar() {

 const [activeNav, setActiveNav] = useState('Home')
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 const handleNavClick = (itemName) => {
   setActiveNav(itemName)
   setIsMenuOpen(false)
 }

 
  return (

   <section className="navbar">

    <nav className="navbar-container">
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
        </button>
        

        <div className="logo">
          <img src={Logo} alt="LaptopCheck logo" />
          <p className="logo-text">
            LaptopCheck 
            <span className='logo-support'>
                by Victoire Gadgets
            </span>
          </p>
        </div>

        <div className="nav-links-container">
  <ul className="nav-ul">
    {navItems.map((item, index) => (
      <li
        className={activeNav === item.name ? 'nav-links active' : 'nav-links'}
        key={index}
      >
        <a href={item.link} onClick={() => handleNavClick(item.name)}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>


        <div className="nav-button-container">
          <Button
            href="#contact"
            className="nav-button"
            mobileLabel="Verify"
            icon={<MoveRight size={18} strokeWidth={2.5} />}
            onClick={() => setIsMenuOpen(false)}
          >
            Verify A Laptop
          </Button>
        </div>

    </nav>

    {isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />}

      <div className={isMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <div className="mobile-menu-header">
          <p className="mobile-menu-title">Menu</p>
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={20} strokeWidth={2.25} />
          </button>
        </div>

        <ul className="mobile-nav-ul">
          {navItems.map((item, index) => (
            <li
              className={activeNav === item.name ? 'mobile-nav-links active' : 'mobile-nav-links'}
              key={index}
            >
              <a href={item.link} onClick={() => handleNavClick(item.name)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    
   </section>

  )
}
