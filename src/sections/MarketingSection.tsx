import marketingHTML from '../data/sections/marketing'

/** Larry JTBD Section — marketing tools feature block */
export default function MarketingSection() {
  return <div dangerouslySetInnerHTML={{ __html: marketingHTML }} />
}
