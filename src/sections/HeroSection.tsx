import heroHTML from '../data/sections/hero'

/** Hero — rendered client-side by the Framer React bundle via #hero-react-mount */
export default function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: heroHTML }} />
}
