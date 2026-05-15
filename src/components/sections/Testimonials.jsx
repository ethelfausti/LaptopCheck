import { Quote, Star } from 'lucide-react'
import '../styles/Testimonials.css'

const testimonials = [
  {
    name: 'Daniel O.',
    role: 'Frontend Developer',
    initials: 'DO',
    text: 'The verification report helped me avoid a laptop with poor battery health. Everything checked out exactly as stated.',
  },
  {
    name: 'Esther M.',
    role: 'Content Creator',
    initials: 'EM',
    tag: 'Bought from Victoire Gadget',
    text: 'I bought my MacBook through Victoire Gadget after using LaptopCheck. The specs and battery condition were exactly as verified.',
  },
  {
    name: 'Chiamaka A.',
    role: 'Student',
    initials: 'CA',
    text: 'As someone who does not understand laptops deeply, this made buying my first laptop much easier. Very trustworthy.',
  },
  {
    name: 'Jide T.',
    role: 'Graphics Designer',
    initials: 'JT',
    tag: 'Bought from Victoire Gadget',
    text: 'Got a gaming laptop from Victoire Gadget and it has been perfect. Smooth performance and great customer service.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <p className="testimonials-label">WHAT OUR USERS SAY</p>
        <h2 className="testimonials-heading">Trusted by Smart Laptop Buyers</h2>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-quote">
                <Quote size={18} strokeWidth={2.4} />
              </div>

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-footer">
                <div className="testimonial-user-top">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {item.initials}
                  </div>

                  <h3 className="testimonial-name">{item.name}</h3>
                </div>

                <div className="testimonial-user-bottom">
                  <p className="testimonial-role">{item.role}</p>

                  <div className="testimonial-stars" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        strokeWidth={2.1}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <div className="testimonial-tag-row">
                  {item.tag ? (
                    <span className="testimonial-tag">{item.tag}</span>
                  ) : (
                    <span className="testimonial-tag testimonial-tag--placeholder" aria-hidden="true">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
