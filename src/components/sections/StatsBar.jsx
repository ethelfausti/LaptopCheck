import { Clock3, LockKeyhole, ShieldCheck, Smile } from 'lucide-react'
import '../styles/StatsBar.css'

const statsItems = [
  {
    icon: <ShieldCheck />,
    value: '1,200+',
    label: 'Laptops Verified',
  },
  {
    icon: <Smile />,
    value: '98%',
    label: 'Customer Satisfaction',
  },
  {
    icon: <Clock3 />,
    value: '24-48hrs',
    label: 'Average Report Time',
  },
  {
    icon: <LockKeyhole />,
    value: '100%',
    label: 'Confidential & Secure',
  },
]

export default function StatsBar() {
  return (
    <section className="stats-bar-section" aria-label="LaptopCheck trust metrics">
      <div className="stats-bar-container">
        <div className="stats-bar-grid">
          {statsItems.map((item) => (
            <article className="stats-bar-card" key={item.label}>
              <div className="stats-bar-icon">{item.icon}</div>

              <div className="stats-bar-copy">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
