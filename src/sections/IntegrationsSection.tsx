import integrationsHTML from '../data/sections/integrations'

/** Integrations — integration logos / partner grid */
export default function IntegrationsSection() {
  return <div dangerouslySetInnerHTML={{ __html: integrationsHTML }} />
}
