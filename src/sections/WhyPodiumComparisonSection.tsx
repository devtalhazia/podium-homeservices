function XIcon() {
  return (
    <div aria-hidden="true" className="shrink-0 w-[24px] h-[24px] relative overflow-hidden">
      <div className="absolute inset-[5px_7px_7px_5px]">
        <svg width="14" height="14" viewBox="-1 -1 14 14" fill="none" className="w-full h-full overflow-visible">
          <path d="M12 0L0 12" stroke="#9D403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute inset-[5px_7px_7px_5px]">
        <svg width="14" height="14" viewBox="-1 -1 14 14" fill="none" className="w-full h-full overflow-visible">
          <path d="M0 0L12 12" stroke="#9D403C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <div aria-hidden="true" className="shrink-0 w-[24px] h-[24px] relative overflow-hidden flex items-center justify-center">
      <svg width="18" height="13" viewBox="-1 -1 18 13" fill="none" className="overflow-visible">
        <path d="M16 0L5 11L0 6" stroke="#6E7551" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function RowDivider() {
  return (
    <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 flex flex-col place-content-center items-center gap-[10px] h-min overflow-clip">
      <div className="w-[130px] h-px relative">
        <svg viewBox="0 0 130 1" overflow="visible" className="w-full h-full overflow-visible">
          <path d="M 0 0 L 130 0" fill="transparent" stroke="rgb(74, 74, 77)" strokeMiterlimit={10} opacity={0.5} />
        </svg>
      </div>
    </div>
  )
}

const ROWS = [
  { oldWay: 'Leads that come in after hours go cold before anyone calls back',                         closeCrew: 'Larry responds to every lead instantly—24/7, no exceptions' },
  { oldWay: 'Your team is on the phone chasing callbacks instead of running jobs',                     closeCrew: 'Larry qualifies, follows up, and books so your team stays focused on the work' },
  { oldWay: 'A missed call is a missed job',                                                           closeCrew: 'Every inbound lead gets an immediate response, every time' },
  { oldWay: 'Memberships only get pitched when a tech remembers',                                     closeCrew: 'Larry automatically texts your membership list and gets appointments on the calendar' },
  { oldWay: 'Revenue slips through the cracks between the call, the estimate, and the follow-up',     closeCrew: 'One system connects every step so nothing falls through' },
  { oldWay: "You have no visibility into how many leads you're actually losing",                       closeCrew: 'A clear view of every lead, every job, and every open opportunity' },
  { oldWay: "Growth depends on your team's bandwidth",                                                 closeCrew: 'More jobs booked, more memberships sold, more revenue without adding headcount' },
]

function ComparisonRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="relative shrink-0 w-full h-[100px] flex flex-col place-content-center items-center px-[24px] pr-[24px] pl-[16px]">
      <div className="flex flex-row place-content-start items-center gap-[12px] w-full h-min shrink-0">
        {icon}
        <div className="flex-[1_0_0] w-px">
          <p className="m-0 font-graphik text-[14px] font-normal leading-[150%] tracking-[0] text-[rgb(220,220,225)]">
            {text}
          </p>
        </div>
      </div>
      <RowDivider />
    </div>
  )
}

function ColumnHeader({ label }: { label: string }) {
  return (
    <div className="shrink-0 w-full h-[80px] flex flex-col place-content-end items-center px-[32px] py-[12px] border-b border-[#4a4a4d]">
      <p className="m-0 w-full font-graphik-medium text-[24px] font-medium leading-[120%] tracking-[0] text-center text-white">
        {label}
      </p>
    </div>
  )
}

export default function WhyCloseCrewComparisonSection() {
  return (
    <section className="relative w-full h-min overflow-clip flex flex-row place-content-start items-start gap-[30px] px-[24px] py-[48px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] bg-nav">

      {/* blue radial fade */}
      <div aria-hidden="true" className="absolute w-[1147px] h-[1147px] -top-[650px] -left-[650px] z-0 overflow-visible pointer-events-none shrink-0">
        <img src="/images/why-podium-comparison-blue-fade.png" alt="" className="w-full h-full object-fill" />
      </div>

      {/* red radial fade */}
      <div aria-hidden="true" className="absolute w-[1147px] h-[1147px] -bottom-[650px] -right-[650px] z-0 overflow-visible pointer-events-none shrink-0">
        <img src="/images/why-podium-comparison-red-fade.png" alt="" className="w-full h-full object-fill" />
      </div>

      {/* contractor photo */}
      <div aria-hidden="true" className="absolute w-[948px] h-[809px] top-[13px] -left-[468px] z-0 overflow-visible pointer-events-none shrink-0">
        <img src="/images/why-podium-comparison-contractor.png" alt="" className="w-full h-full object-fill" />
      </div>

      {/* content wrapper */}
      <div className="relative z-[1] rounded-[16px] flex flex-col place-content-start items-center gap-[48px] flex-[1_0_0] w-px max-w-[900px] h-min overflow-visible mx-auto">

        {/* heading group */}
        <div className="flex flex-col place-content-start items-center gap-[28px] w-full h-min pb-[24px]">
          <div className="w-full h-auto relative">
            <h6 className="m-0 font-graphik-medium text-[16px] font-medium leading-[150%] tracking-[0.1em] uppercase text-center text-[rgb(170,170,173)]">
              what the wrong tools cost you
            </h6>
          </div>

          <div className="flex flex-col place-content-center items-center gap-[16px] w-full h-min pb-[16px]">
            <div className="w-full h-auto relative">
              <h2 className="m-0 font-grenette text-[46px] font-normal leading-[110%] tracking-[0] text-center text-white">
                You run a great business. But why does the system you use make it harder?
              </h2>
            </div>
            <div className="w-full h-auto relative">
              <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-center text-[rgb(232,232,232)]">
                Most contractors are running on five tools held together with duct tape. CloseCrew replaces that.{' '}
              </p>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="relative w-full h-min p-[6px] flex-col overflow-auto flex place-content-start items-start gap-0 tablet:p-[24px] tablet:flex-row desktop:p-[30px]">
          {/* table bg */}
          <div aria-hidden="true" className="absolute inset-0 z-0 overflow-visible">
            <img src="/images/why-podium-comparison-bg.png" alt="" className="w-full h-full object-fill rounded-[inherit]" />
          </div>

          {/* Old Way column */}
          <div className="flex-none w-full tablet:flex-[1_0_0] tablet:w-px relative z-[1] rounded-[8px] flex flex-col place-content-end items-center gap-0 h-min overflow-visible">
            <ColumnHeader label="The Old Way" />
            {ROWS.map((row, i) => <ComparisonRow key={i} icon={<XIcon />} text={row.oldWay} />)}
          </div>

          {/* CloseCrew column */}
          <div className="flex-none w-full tablet:flex-[1_0_0] tablet:w-px relative z-[1] border border-[#4a4a4d] bg-[#ffffff0d] rounded-[8px] shadow-[0_4px_10px_#0003] flex flex-col place-content-end items-center gap-0 h-min overflow-visible">
            <ColumnHeader label="One System in CloseCrew" />
            {ROWS.map((row, i) => <ComparisonRow key={i} icon={<CheckIcon />} text={row.closeCrew} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
