import {
  BatteryCharging,
  Cpu,
  TrendingUp,
  Upload,
} from 'lucide-react'
import InfoCard from '../ui/InfoCard'
import '../styles/Services.css'

const serviceItems = [
  {
    icon: <Cpu />,
    title: 'Spec Verification',
    text: 'We confirm the real processor, RAM, storage, graphics and other key specifications.',
  },
  {
    icon: <BatteryCharging />,
    title: 'Battery Health Check',
    text: 'We analyze battery health, cycle count and estimate realistic backup time.',
  },
  {
    icon: <Upload />,
    title: 'Upgrade Check',
    text: 'We check if RAM or storage can be upgraded and show you the best options.',
  },
  {
    icon: <TrendingUp />,
    title: 'Performance Advice',
    text: 'We recommend if the laptop is good for your needs like coding, design, gaming or school.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <p className="services-label">OUR SERVICES</p>
        <h2 className="services-heading">What We Check For You</h2>

        <div className="services-grid">
          {serviceItems.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              variant="service"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
