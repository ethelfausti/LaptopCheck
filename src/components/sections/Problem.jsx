import {
  AlertCircle,
  BatteryWarning,
  Gauge,
  Upload,
} from 'lucide-react'
import InfoCard from '../ui/InfoCard'
import '../styles/Problem.css'

const problemItems = [
  {
    icon: <AlertCircle />,
    title: 'Fake or Misleading Specs',
    text: 'Some sellers rename processors or hide the real specifications from buyers.',
  },
  {
    icon: <BatteryWarning />,
    title: 'Weak or Worn-out Batteries',
    text: 'Many laptops have heavily degraded batteries that do not last long.',
  },
  {
    icon: <Upload />,
    title: 'No Upgrade Flexibility',
    text: 'Buyers unknowingly buy laptops with soldered RAM or limited upgrade options.',
  },
  {
    icon: <Gauge />,
    title: 'Wrong Performance Choice',
    text: 'Hard to know if the laptop is suitable for your needs like coding, design or school work.',
  },
]

export default function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        <h2 className="problem-heading">Common Problems Buyers Face</h2>

        <div className="problem-grid">
          {problemItems.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              variant="problem"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
