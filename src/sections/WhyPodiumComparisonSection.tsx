const ROWS = [
  {
    oldWay: 'Leads that come in after hours go cold before anyone calls back',
    podium: 'Larry responds to every lead instantly—24/7, no exceptions',
  },
  {
    oldWay: 'Your team is on the phone chasing callbacks instead of running jobs',
    podium: 'Larry qualifies, follows up, and books so your team stays focused on the work',
  },
  {
    oldWay: 'A missed call is a missed job',
    podium: 'Every inbound lead gets an immediate response, every time',
  },
  {
    oldWay: 'Memberships only get pitched when a tech remembers',
    podium: 'Larry automatically texts your membership list and gets appointments on the calendar',
  },
  {
    oldWay: 'Revenue slips through the cracks between the call, the estimate, and the follow-up',
    podium: 'One system connects every step so nothing falls through',
  },
  {
    oldWay: "You have no visibility into how many leads you're actually losing",
    podium: 'A clear view of every lead, every job, and every open opportunity',
  },
  {
    oldWay: "Growth depends on your team's bandwidth",
    podium: 'More jobs booked, more memberships sold, more revenue without adding headcount',
  },
]

function XIcon() {
  return <span className="inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[20px] leading-none text-[#9D403C]">x</span>
}

function CheckIcon() {
  return (
    <svg className="h-[16px] w-[24px] shrink-0" viewBox="-1 -1 18 13" fill="none" aria-hidden="true">
      <path d="M16 0L5 11L0 6" stroke="#6E7551" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ComparisonRow({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex h-auto w-full flex-col items-center px-[14px] py-[14px] desktop:h-[100px] desktop:px-[24px] desktop:py-[16px]">
      <div className="flex w-full flex-row items-center gap-[12px] border-b border-[rgba(74,74,77,0.5)] pb-[14px] desktop:pb-[16px]">
        {icon}
        <div className="w-px flex-[1_0_0]">
          <p className="m-0 font-graphik text-[14px] font-normal leading-[150%] tracking-[0] text-[rgb(220,220,225)]">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

function ColumnHeader({ label }: { label: string }) {
  return (
    <div className="flex h-[72px] w-full shrink-0 flex-col items-center justify-end border-b border-[#4a4a4d] px-[12px] py-[12px] desktop:h-[80px] desktop:px-[32px]">
      <p className="m-0 w-full text-center font-graphik-medium text-[18px] font-medium leading-[120%] tracking-[0] text-white desktop:text-[24px]">
        {label}
      </p>
    </div>
  )
}

export default function WhyPodiumComparisonSection() {
  return (
    <section className="relative flex w-full items-start justify-center gap-[30px] overflow-clip bg-[#18181c] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-650px] top-[-650px] z-0 h-[1147px] w-[1147px]">
        <img
          src="/images/why-podium-comparison-blue-fade.png"
          alt=""
          className="h-full w-full object-fill"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-650px] right-[-650px] z-0 h-[1147px] w-[1147px]">
        <img
          src="/images/why-podium-comparison-red-fade.png"
          alt=""
          className="h-full w-full object-fill"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-[-468px] top-[13px] z-0 hidden h-[809px] w-[948px] desktop:block">
        <img
          src="/images/why-podium-comparison-contractor.png"
          alt=""
          className="h-full w-full object-fill"
        />
      </div>
      <div className="relative z-[1] flex w-full max-w-[900px] flex-col items-center gap-[48px] overflow-visible rounded-[16px]">
        <div className="flex w-full flex-col items-center gap-[48px] pb-[24px]">
          <div className="w-full">
            <h6 className="m-0 text-center font-graphik-medium text-[16px] font-medium uppercase leading-[150%] tracking-[0.1em] text-[rgb(170,170,173)]">
              what the wrong tools cost you
            </h6>
          </div>
          <div className="flex w-full flex-col items-center gap-[16px] pb-[16px]">
            <div className="w-full">
              <h2 className="m-0 text-center font-grenette text-[30px] font-normal leading-[110%] tracking-[0] text-white tablet:text-[38px] desktop:text-[46px]">
                You run a great business. But why does the system you use make it
                harder?
              </h2>
            </div>
            <div className="w-full">
              <p className="m-0 text-center font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-[rgb(232,232,232)]">
                Most contractors are running on five tools held together with duct
                tape. CloseCrew replaces that.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex h-min w-full flex-col items-start gap-[14px] bg-transparent p-[12px] tablet:p-[20px] desktop:flex-row desktop:gap-0 desktop:p-[30px]">
          <div aria-hidden="true" className="absolute inset-0 z-0 overflow-visible">
            <img
              src="/images/why-podium-comparison-bg.png"
              alt=""
              className="h-full w-full rounded-[inherit] object-fill"
            />
          </div>
          <div className="relative z-[1] flex h-min w-full flex-col items-center gap-0 overflow-visible rounded-[8px] desktop:w-px desktop:flex-[1_0_0]">
            <ColumnHeader label="The Old Way" />
            {ROWS.map((row, i) => (
              <ComparisonRow key={i} icon={<XIcon />} text={row.oldWay} />
            ))}
          </div>
          <div className="relative z-[1] flex h-min w-full flex-col items-center gap-0 overflow-visible rounded-[8px] border border-[#4a4a4d] bg-[#ffffff0d] shadow-[0_4px_10px_#0003] desktop:w-px desktop:flex-[1_0_0]">
            <ColumnHeader label="One System in CloseCrew" />
            {ROWS.map((row, i) => (
              <ComparisonRow key={i} icon={<CheckIcon />} text={row.podium} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
