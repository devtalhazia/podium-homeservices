import solutionHTML from '../data/sections/solution'

/** Page Section / Accordion — solution overview with accordion tabs */
export default function SolutionSection() {
  return <div dangerouslySetInnerHTML={{ __html: solutionHTML }} />
}
