import { MoveRight, ShieldCheck, Star } from 'lucide-react'
import heroImage from '../../assets/heroimg/hero.png'
import Button from '../ui/Button'
import '../styles/Hero.css'

const proofUsers = ['V', 'T', 'J', 'A']

export default function Hero() {
  return (
    <section className="hero" id="home">
        
      <div className="hero-stage">
        <div className="hero-content">
          <div className="hero-badge">
            {/* <Star size={14} strokeWidth={2.25} /> */}
            <span>No:1 Laptop Verification Platform in Nigeria</span>
          </div>

          <h1 className="hero-title">
            Buy Pre-Owned &amp; New Laptops With <span>Confidence.</span>
          </h1>

          <p className="hero-copy">
            We help you verify pre-owned, UK-used, fairly used and new laptops by checking specs, battery health, upgrade options and real performance before you buy.
          </p>

          <div className="hero-actions">
            <Button
              href="#contact"
              className="hero-button"
              mobileLabel="Verify"
              icon={<MoveRight size={18} strokeWidth={2.5} />}
            >
              Verify a Laptop
            </Button>
          </div>

          <div className="hero-proof">
            <div className="hero-proof-users" aria-hidden="true">
              {proofUsers.map((user, index) => (
                <span className="hero-proof-user" key={index}>
                  {user}
                </span>
              ))}
            </div>

            <div className="hero-proof-text">
              <p>1,200+ laptops verified</p>
              <span>Helping Nigerians buy smarter laptops every day.</span>
            </div>
          </div>

          <div className="hero-proof-note">
            <ShieldCheck size={16} strokeWidth={2.15} />
            <span>Trusted reports, battery checks and upgrade advice</span>
          </div>
        </div>

        <div className="hero-visual-layer" aria-hidden="true">
          <img src={heroImage} alt="" className="hero-visual" />
        </div>
      </div>
    
    </section>
  )
}
