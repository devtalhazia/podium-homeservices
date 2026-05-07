import '../styles/why-podium-comparison.css'

// ─── SVG sub-components ─────────────────────────────────────────────────────
// Source: svg-1102847618_209 + svg-657198490_209 in why-podium.html
// Container: framer-1rq8khs → width:24px height:24px overflow:hidden
// Both SVGs are inset:5px 7px 7px 5px → 12×12 displayed inside 24×24 box

function XIcon() {
  return (
    <div
      aria-hidden="true"
      style={{
        // framer-1rq8khs: flex:none; width:24px; height:24px; position:relative; overflow:hidden
        flexShrink: 0,
        width: 24,
        height: 24,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Path 1: M12 0L0 12 — diagonal line 1 */}
      <div style={{ position: 'absolute', inset: '5px 7px 7px 5px' }}>
        <svg
          width="14"
          height="14"
          viewBox="-1 -1 14 14"
          fill="none"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <path
            d="M12 0L0 12"
            stroke="#9D403C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Path 2: M0 0L12 12 — diagonal line 2 */}
      <div style={{ position: 'absolute', inset: '5px 7px 7px 5px' }}>
        <svg
          width="14"
          height="14"
          viewBox="-1 -1 14 14"
          fill="none"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <path
            d="M0 0L12 12"
            stroke="#9D403C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

// Source: svg-1979211170_213 in why-podium.html
// width=18 height=13 viewBox="-1 -1 18 13" stroke #6E7551
// Rendered in same framer-1rq8khs 24×24 container
function CheckIcon() {
  return (
    <div
      aria-hidden="true"
      style={{
        flexShrink: 0,
        width: 24,
        height: 24,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="18"
        height="13"
        viewBox="-1 -1 18 13"
        fill="none"
        style={{ overflow: 'visible' }}
      >
        <path
          d="M16 0L5 11L0 6"
          stroke="#6E7551"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// Source: svg-1833096432_311 in why-podium.html
// framer-egexls: position:absolute; bottom:0; left:0; right:0
// framer-14omjol: width:130px; height:1px
// Path: M 0 0 L 130 0, stroke rgb(74,74,77) opacity 0.5
function RowDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        // framer-egexls: absolute; bottom:0; left:0; right:0
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexFlow: 'column' as const,
        placeContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 0,
        height: 'min-content',
        overflow: 'clip',
      }}
    >
      {/* framer-14omjol: width:130px; height:1px */}
      <div style={{ width: 130, height: 1, position: 'relative' }}>
        <svg
          viewBox="0 0 130 1"
          overflow="visible"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <path
            d="M 0 0 L 130 0"
            fill="transparent"
            stroke="rgb(74, 74, 77)"
            strokeMiterlimit={10}
            opacity={0.5}
          />
        </svg>
      </div>
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Sub-components ──────────────────────────────────────────────────────────

// framer-19fzfjs: flex-flow:column; flex:none; place-content:center; align-items:center;
//                 gap:0; width:100%; height:100px; padding:16px 24px 16px 16px; position:relative
// framer-k0igva:  flex-flow:row; flex:none; place-content:center flex-start; align-items:center;
//                 gap:12px; width:100%; height:min-content
// framer-1nnunlw: flex:1 0 0; width:1px (flex child grows)
// row text: font Graphik 14px 400 150% color rgb(220,220,225) letter-spacing:0px
function ComparisonRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      style={{
        // framer-19fzfjs
        display: 'flex',
        flexFlow: 'column' as const,
        placeContent: 'center',
        alignItems: 'center',
        gap: 0,
        width: '100%',
        height: 100,
        padding: '16px 24px 16px 16px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* framer-k0igva */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'row' as const,
          placeContent: 'center flex-start',
          alignItems: 'center',
          gap: 12,
          width: '100%',
          height: 'min-content',
          flexShrink: 0,
        }}
      >
        {icon}
        {/* framer-1nnunlw: flex:1 0 0; width:1px */}
        <div
          style={{
            flex: '1 0 0',
            width: '1px',
          }}
        >
          <p
            style={{
              // Source: inline style on <p> in dump
              // --framer-font-family:"Graphik","Graphik Placeholder",sans-serif
              // --framer-font-size:14px; --framer-letter-spacing:0px
              // --framer-line-height:150%; --framer-text-color:rgb(220,220,225)
              fontFamily: '"Graphik Regular", sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: 0,
              color: 'rgb(220, 220, 225)',
              margin: 0,
            }}
          >
            {text}
          </p>
        </div>
      </div>
      {/* Divider: framer-egexls — absolute bottom:0 left:0 right:0 */}
      <RowDivider />
    </div>
  )
}

// framer-2y7zzz: flex-flow:column; flex:none; place-content:center flex-end; align-items:center;
//                gap:0; width:100%; height:80px; padding:12px 32px
//                border-bottom:1px solid #4a4a4d
// column header text: Graphik 500 24px 120% rgb(255,255,255) text-align:center letter-spacing:0px
function ColumnHeader({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column' as const,
        placeContent: 'center flex-end',
        alignItems: 'center',
        gap: 0,
        width: '100%',
        height: 80,
        padding: '12px 32px',
        borderBottom: '1px solid #4a4a4d',
        flexShrink: 0,
      }}
    >
      <p
        style={{
          // Source: inline style on <p> in dump
          // --framer-font-family:"Graphik","Graphik Placeholder",sans-serif
          // --framer-font-size:24px; --framer-font-weight:500
          // --framer-letter-spacing:0px; --framer-line-height:120%
          // --framer-text-alignment:center; --framer-text-color:rgb(255,255,255)
          fontFamily: '"Graphik Medium", sans-serif',
          fontSize: 24,
          fontWeight: 500,
          lineHeight: '120%',
          letterSpacing: 0,
          color: 'rgb(255, 255, 255)',
          textAlign: 'center',
          margin: 0,
          width: '100%',
        }}
      >
        {label}
      </p>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function WhyPodiumComparisonSection() {
  return (
    // framer-1sqbg4q: background-color:#18181c; height:min-content; overflow:clip
    //   flex-flow:row; flex:none; place-content:flex-start center; align-items:flex-start
    //   gap:30px; width:100%; padding:80px; position:relative
    <section
      className="why-podium-comparison-outer"
      style={{
        backgroundColor: '#18181c',
        height: 'min-content',
        overflow: 'clip',
        display: 'flex',
        flexFlow: 'row' as const,
        placeContent: 'flex-start center',
        alignItems: 'flex-start',
        gap: 30,
        width: '100%',
        padding: 80,
        position: 'relative',
      }}
    >
      {/* Blue radial fade — framer-16858zm: absolute; top:-650px; left:-650px; 1147×1147 z-index:0 */}
      <div
        aria-hidden="true"
        style={{
          width: 1147,
          height: 1147,
          position: 'absolute',
          top: -650,
          left: -650,
          zIndex: 0,
          overflow: 'visible',
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      >
        <img
          src="/images/why-podium-comparison-blue-fade.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>

      {/* Red radial fade — framer-1u0l3qx: absolute; bottom:-650px; right:-650px; 1147×1147 z-index:0 */}
      <div
        aria-hidden="true"
        style={{
          width: 1147,
          height: 1147,
          position: 'absolute',
          bottom: -650,
          right: -650,
          zIndex: 0,
          overflow: 'visible',
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      >
        <img
          src="/images/why-podium-comparison-red-fade.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>

      {/* Contractor photo — framer-1res489: absolute; top:13px; left:-468px; 948×809 z-index:0 */}
      <div
        aria-hidden="true"
        style={{
          width: 948,
          height: 809,
          position: 'absolute',
          top: 13,
          left: -468,
          zIndex: 0,
          overflow: 'visible',
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      >
        <img
          src="/images/why-podium-comparison-contractor.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>

      {/* Content wrapper — framer-14vofwi:
          border-radius:16px; flex-flow:column; flex:1 0 0; place-content:center flex-start
          align-items:center; gap:48px; width:1px; max-width:900px; height:min-content; padding:0
      */}
      <div
        style={{
          borderRadius: 16,
          display: 'flex',
          flexFlow: 'column' as const,
          placeContent: 'center flex-start',
          alignItems: 'center',
          gap: 48,
          flex: '1 0 0',
          width: '1px',
          maxWidth: 900,
          height: 'min-content',
          padding: 0,
          position: 'relative',
          overflow: 'visible',
          zIndex: 1,
        }}
      >
        {/* Heading group — framer-4na7px:
            flex-flow:column; flex:none; place-content:flex-start center; align-items:center
            gap:48px; width:100%; height:min-content; padding:0 0 24px
        */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'column' as const,
            placeContent: 'flex-start center',
            alignItems: 'center',
            gap: 48,
            width: '100%',
            height: 'min-content',
            padding: '0 0 24px',
          }}
        >
          {/* Preheader — framer-1h16ojl contains h6
              Typography from framer-styles-preset-271l27:
              font-family: "Graphik Medium"; font-size:16px; font-weight:500
              letter-spacing:0.1em; line-height:150%; text-transform:uppercase
              text-alignment:center; text-color:rgb(170,170,173)
          */}
          <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
            <h6
              style={{
                fontFamily: '"Graphik Medium", sans-serif',
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: 'rgb(170, 170, 173)',
                margin: 0,
              }}
            >
              what the wrong tools cost you
            </h6>
          </div>

          {/* Heading inner — framer-18n4kb3:
              flex-flow:column; flex:none; place-content:center; align-items:center
              gap:16px; width:100%; height:min-content; padding:0 0 16px
          */}
          <div
            style={{
              display: 'flex',
              flexFlow: 'column' as const,
              placeContent: 'center',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              height: 'min-content',
              padding: '0 0 16px',
            }}
          >
            {/* H2 — framer-l6pu9u / framer-styles-preset-xcqpjm:
                font-family:"Grenette Regular"; font-size:46px; font-weight:400
                line-height:110%; letter-spacing:0px; text-alignment:center
                text-color:rgb(255,255,255)
            */}
            <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
              <h2
                style={{
                  fontFamily: '"Grenette Regular", sans-serif',
                  fontSize: 46,
                  fontWeight: 400,
                  lineHeight: '110%',
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: 'rgb(255, 255, 255)',
                  margin: 0,
                }}
              >
                You run a great business. But why does the system you use make it
                harder?
              </h2>
            </div>

            {/* Subheader — framer-3zuzid / framer-styles-preset-zmyn5w:
                font-family:"Graphik Regular"; font-size:16px; font-weight:400
                line-height:150%; letter-spacing:0em; text-alignment:center (inline override)
                text-color:rgb(232,232,232)
            */}
            <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
              <p
                style={{
                  fontFamily: '"Graphik Regular", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: 'rgb(232, 232, 232)',
                  margin: 0,
                }}
              >
                Most contractors are running on five tools held together with duct
                tape. Podium replaces that.{' '}
              </p>
            </div>
          </div>
        </div>

        {/* Table container — framer-ft18wq:
            background-color:#0000; flex-flow:row; flex:none; place-content:flex-start
            align-items:flex-start; gap:0; width:100%; height:min-content
            padding:30px; position:relative; overflow:visible
        */}
        <div
          className="why-podium-comparison-table"
          style={{
            backgroundColor: 'transparent',
            display: 'flex',
            flexFlow: 'row' as const,
            placeContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 0,
            width: '100%',
            height: 'min-content',
            padding: 30,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Table background image — framer-1xuqs5f: z-index:0; absolute; inset:0
              Image: IetLqSuKHo9qW1foV37pJHm4Nc.png (1800×1720 dark texture)
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'visible',
            }}
          >
            <img
              src="/images/why-podium-comparison-bg.png"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                borderRadius: 'inherit',
              }}
            />
          </div>

          {/* Old Way column — framer-5jbpsu:
              border-radius:8px; flex-flow:column; flex:1 0 0; place-content:center flex-end
              align-items:center; gap:0; width:1px; height:min-content; padding:0
          */}
          <div
            className="why-podium-comparison-col"
            style={{
              borderRadius: 8,
              display: 'flex',
              flexFlow: 'column' as const,
              placeContent: 'center flex-end',
              alignItems: 'center',
              gap: 0,
              flex: '1 0 0',
              width: '1px',
              height: 'min-content',
              padding: 0,
              position: 'relative',
              overflow: 'visible',
              zIndex: 1,
            }}
          >
            <ColumnHeader label="The Old Way" />
            {ROWS.map((row, i) => (
              <ComparisonRow key={i} icon={<XIcon />} text={row.oldWay} />
            ))}
          </div>

          {/* Podium column — framer-1h0zrqd:
              border:1px solid #4a4a4d; background-color:#ffffff0d; border-radius:8px
              flex-flow:column; flex:1 0 0; place-content:center flex-end; align-items:center
              gap:0; width:1px; height:min-content; padding:0; box-shadow:0 4px 10px #0003
          */}
          <div
            className="why-podium-comparison-col"
            style={{
              border: '1px solid #4a4a4d',
              backgroundColor: '#ffffff0d',
              borderRadius: 8,
              boxShadow: '0 4px 10px #0003',
              display: 'flex',
              flexFlow: 'column' as const,
              placeContent: 'center flex-end',
              alignItems: 'center',
              gap: 0,
              flex: '1 0 0',
              width: '1px',
              height: 'min-content',
              padding: 0,
              position: 'relative',
              overflow: 'visible',
              zIndex: 1,
            }}
          >
            <ColumnHeader label="One System in Podium" />
            {ROWS.map((row, i) => (
              <ComparisonRow key={i} icon={<CheckIcon />} text={row.podium} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
