import communicationsHTML from '../data/sections/communications'

/** Larry JTBD Section — communications / Line Comms feature block */
export default function CommunicationsSection() {
  return <div dangerouslySetInnerHTML={{ __html: communicationsHTML }} />
}
