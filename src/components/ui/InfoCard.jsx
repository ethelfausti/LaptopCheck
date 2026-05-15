import '../styles/InfoCard.css'

export default function InfoCard({
  icon,
  title,
  text,
  variant = 'default',
  className = '',
}) {
  const classes = ['info-card', `info-card--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes}>
      <div className="info-card-icon-wrap">
        
        <div className="info-card-icon">{icon}</div>
      </div>

      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-text">{text}</p>
    </article>
  )
}
