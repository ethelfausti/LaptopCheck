import { Bolt, FileText, ShieldCheck } from 'lucide-react'
import '../styles/About.css'
import aboutImage from '../../assets/abtimg/abt.png'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-text">
            <p className="about-label">ABOUT US</p>

            <h2 className="about-heading">Experts in Laptops. Focused on You.</h2>

            <p className="about-copy">
              LaptopCheck by Victoire Gadget helps buyers verify pre-owned,
              UK-used, fairly used and imported devices before purchase.
            </p>

            <p className="about-copy">
              We provide detailed verification reports on specs, battery health,
              upgrade options and real-world performance so you can buy with
              confidence and avoid costly mistakes.
            </p>

            <div className="about-points">
              <div className="about-point">
                <div className="about-point-icon">
                  <ShieldCheck size={18} strokeWidth={2.1} />
                </div>
                <span>Trusted &amp; Reliable</span>
              </div>

              <div className="about-point">
                <div className="about-point-icon">
                  <Bolt size={18} strokeWidth={2.1} />
                </div>
                <span>Fast &amp; Easy Process</span>
              </div>

              <div className="about-point">
                <div className="about-point-icon">
                  <FileText size={18} strokeWidth={2.1} />
                </div>
                <span>Detailed Reports</span>
              </div>
            </div>
          </div>

          <div className="about-image-area" aria-hidden="true">
            <div className="about-image">
                <img src={aboutImage} alt="About LaptopCheck" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
