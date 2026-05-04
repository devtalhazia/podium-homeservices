import ctaHTML from '../data/sections/cta'

/** CTA — call-to-action banner */
export default function CtaSection() {
  return <div dangerouslySetInnerHTML={{ __html: ctaHTML }} />
}
