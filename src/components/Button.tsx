const DEMO_URL = 'https://calendly.com/umar-softaims/hvac-automation'

interface ButtonProps {
  label?: string
  href?: string
  variant?: 'dark' | 'outline' | 'crimson'
  className?: string
}

export default function Button({
  label = 'Watch a demo',
  href = DEMO_URL,
  variant = 'dark',
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-["Grenette_SemiBold"] font-semibold text-base leading-none whitespace-nowrap transition-opacity hover:opacity-90'

  const variants = {
    dark:    'bg-[#18181c] text-white px-6 py-[14px]',
    crimson: 'bg-[#9d403c] text-white px-6 py-[14px]',
    outline: 'border border-white/30 text-white px-6 py-[14px] bg-transparent hover:bg-white/5',
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </a>
  )
}

export { DEMO_URL }
