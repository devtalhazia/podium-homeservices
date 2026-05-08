interface StatCard {
  id: string
  span: 5 | 7
  align: 'center' | 'left'
  image: string | null
  imagePosition?: string
  label?: string
  primaryStat: string
  secondaryStat: string | null
  description: string
  attribution: string
}

const CARDS: StatCard[] = [
  {
    id: 'arctic-air',
    span: 5,
    align: 'center',
    image: null,
    primaryStat: '30% more',
    secondaryStat: 'revenue in one year.',
    description: "Hired Larry, added a truck to their fleet, and haven't looked back.",
    attribution: 'Arctic Air',
  },
  {
    id: 'air-texas',
    span: 7,
    align: 'left',
    image: '/images/why-podium-stats-air-texas.png',
    primaryStat: '$20,000',
    secondaryStat: 'job booked after hours',
    description: 'A lead came in after the office closed. Larry answered, qualified, and booked it. Without CloseCrew, it goes to voicemail.',
    attribution: 'Air Texas',
  },
  {
    id: 'premier',
    span: 7,
    align: 'left',
    image: '/images/why-podium-stats-premier.png',
    imagePosition: '59.7% 43.5%',
    label: 'Response time:',
    primaryStat: '12 min to 1 min',
    secondaryStat: null,
    description: 'Converted 3x more leads after Larry started handling incoming calls.',
    attribution: 'Premier Heating and Air',
  },
  {
    id: 'air-design',
    span: 5,
    align: 'center',
    image: null,
    primaryStat: '13 extra appointments',
    secondaryStat: 'in the first 30 days',
    description: 'Estimate conversion went from 5-10% to near 100% because Larry follows up every time.',
    attribution: 'Air Design Heating and Cooling',
  },
]

function CardContent({ card }: { card: StatCard }) {
  const isCenter = card.align === 'center'

  return (
    <div
      className={`flex flex-col justify-center gap-[24px] p-[24px] h-full box-border ${isCenter ? 'items-center' : 'items-start'} ${card.image ? 'flex-[2_0_0] w-px' : 'w-full'}`}
    >
      <div className={`flex flex-col w-full ${isCenter ? 'items-center' : 'items-start'}`}>
        {card.label && (
          <h4 className={`m-0 mb-[4px] font-graphik-medium text-[20px] font-medium leading-[120%] text-white ${isCenter ? 'text-center' : 'text-left'}`}>
            {card.label}
          </h4>
        )}
        <h4 className={`m-0 font-grenette-semi text-[48px] font-semibold leading-[120%] text-[#4b79ed] ${isCenter ? 'text-center' : 'text-left'}`}>
          {card.primaryStat}
        </h4>
        {card.secondaryStat && (
          <h4 className={`m-0 font-grenette-semi text-[28px] font-semibold leading-[120%] text-[#4b79ed] ${isCenter ? 'text-center' : 'text-left'}`}>
            {card.secondaryStat}
          </h4>
        )}
      </div>
      <div className={`flex flex-col gap-[10px] w-full ${isCenter ? 'items-center' : 'items-start'}`}>
        <p className={`m-0 font-graphik text-[18px] font-normal leading-[150%] text-[rgb(220,220,225)] ${isCenter ? 'text-center' : 'text-left'}`}>
          {card.description}
        </p>
        <p className={`m-0 font-['"Graphik_Regular_Italic",sans-serif] italic text-[18px] font-normal leading-[150%] text-[rgb(170,170,173)] ${isCenter ? 'text-center' : 'text-left'}`}
          style={{ fontFamily: '"Graphik Regular Italic", sans-serif' }}
        >
          {card.attribution}
        </p>
      </div>
    </div>
  )
}

// Order: mobile = premier(2) air-design(3), tablet swaps them, desktop = same as mobile
const CARD_ORDER: Record<string, string> = {
  'arctic-air': 'order-[0]',
  'air-texas':  'order-[1]',
  'premier':    'order-[2] tablet:order-[3] desktop:order-[2]',
  'air-design': 'order-[3] tablet:order-[2] desktop:order-[3]',
}

// Static lookup — dynamic template literals are purged by Tailwind content scanner
const COL_SPAN_CLASS: Record<number, string> = {
  5: 'desktop:col-span-5',
  7: 'desktop:col-span-7',
}

function StatCardItem({ card }: { card: StatCard }) {
  const orderClass = CARD_ORDER[card.id]
  const colSpanClass = COL_SPAN_CLASS[card.span]

  const cardRoot = `bg-[rgb(49,49,53)] border border-[rgb(74,74,77)] rounded-[16px] w-full h-full overflow-hidden`

  if (card.image) {
    return (
      <div className={`${orderClass} ${colSpanClass} w-full desktop:h-full`}>
        <div className={`${cardRoot} flex flex-col desktop:flex-row`}>
          <div className="w-full h-[200px] desktop:h-auto desktop:flex-[1_0_0] desktop:self-stretch relative overflow-hidden flex-none">
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover block"
              style={{ objectPosition: card.imagePosition ?? 'center' }}
            />
          </div>
          <CardContent card={card} />
        </div>
      </div>
    )
  }

  return (
    <div className={`${orderClass} ${colSpanClass} w-full desktop:h-full`}>
      <div className={`${cardRoot} flex flex-col`}>
        <CardContent card={card} />
      </div>
    </div>
  )
}

export default function WhyCloseCrewStatsSection() {
  return (
    <section className="relative w-full flex flex-col items-center gap-[96px] overflow-clip bg-[#18181c] px-0 pt-[48px] pb-[48px] tablet:pt-[72px] tablet:pb-[72px] desktop:p-[80px] box-border">
      {/* Blue fade */}
      <div aria-hidden="true" className="absolute w-[1147px] h-[1147px] -top-[650px] -left-[650px] z-0 pointer-events-none">
        <img src="/images/why-podium-comparison-blue-fade.png" alt="" className="block w-full h-full object-cover" />
      </div>
      {/* Red fade */}
      <div aria-hidden="true" className="absolute w-[1147px] h-[1147px] -bottom-[650px] -right-[650px] z-0 pointer-events-none">
        <img src="/images/why-podium-comparison-red-fade.png" alt="" className="block w-full h-full object-cover" />
      </div>

      {/* Inner wrapper */}
      <div className="relative z-[1] max-w-[1080px] w-full flex flex-col items-center gap-[72px] box-border px-[24px] tablet:px-[48px] desktop:px-0">

        {/* Heading */}
        <div className="flex flex-col items-center gap-[16px] pb-[16px] w-full">
          <h6 className="m-0 font-graphik-medium text-[16px] font-medium leading-none tracking-[0.1em] uppercase text-[rgb(170,170,173)] text-center">
            what contractors are saying
          </h6>
          <h2 className="m-0 font-grenette text-[46px] font-normal leading-[110%] text-white text-center">
            Real businesses. Real numbers.
          </h2>
          <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] text-[rgb(232,232,232)] text-center">
            These aren&#39;t outliers. They&#39;re what happens when nothing falls through the cracks.
          </p>
        </div>

        {/* Cards grid — mobile/tablet: flex-col, desktop: 12-col CSS grid */}
        <div className="flex flex-col gap-[30px] w-full desktop:grid desktop:grid-cols-[repeat(12,minmax(50px,1fr))] desktop:grid-rows-[repeat(2,minmax(0,1fr))] desktop:h-[781px]">
          {CARDS.map((card) => (
            <StatCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
