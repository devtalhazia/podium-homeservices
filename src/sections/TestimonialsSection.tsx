import testimonialsHTML from '../data/sections/testimonials'

/** Customer Testimonials — header + card grid (testimonials-cards is nested inside) */
export default function TestimonialsSection() {
  return <div dangerouslySetInnerHTML={{ __html: testimonialsHTML }} />
}
