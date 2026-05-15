import '../styles/Button.css'

export default function Button({
  href,
  children,
  mobileLabel,
  icon,
  className = '',
  onClick,
  type = 'button',
}) {
  const classes = ['ui-button', className].filter(Boolean).join(' ')

  const content = (
    <>
      <span className="ui-button-text ui-button-text-desktop">{children}</span>
      <span className="ui-button-text ui-button-text-mobile">
        {mobileLabel || children}
      </span>
      {icon}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
