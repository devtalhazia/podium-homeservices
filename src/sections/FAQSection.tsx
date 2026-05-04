import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ_DATA = [
  {
    id: 'switch',
    question: 'How difficult is it to switch to Podium from another scheduling software?',
    answer: (
      <>
        <p dir="auto" className="framer-text framer-styles-preset-zmyn5w">
          {"Podium's onboarding team aims to have you up and running in days, not months. Our onboarding team makes the transition as smooth as possible:"}
          <br className="framer-text" />
          <br className="framer-text trailing-break" />
        </p>
        <ul dir="auto" className="framer-text">
          {[
            'White-glove onboarding within 48 hours of signing',
            'Dedicated team to answer questions',
            'Data migration (customers, jobs, history, etc.)',
            'We test and refine your AI Employee until it reflects your business',
            'Staff training for your entire team',
          ].map((item) => (
            <li key={item} data-preset-tag="p" className="framer-text framer-styles-preset-zmyn5w">
              <p className="framer-text framer-styles-preset-zmyn5w">{item}</p>
            </li>
          ))}
        </ul>
        <p dir="auto" className="framer-text framer-styles-preset-zmyn5w">
          {'Our goal is to minimize disruption so your business stays up and running during the change. '}
          <a className="framer-text framer-styles-preset-1eycndh" href="demo.html">
            <strong className="framer-text">Book a meeting today to learn more.</strong>
          </a>
        </p>
      </>
    ),
  },
]

const BORDER_LINE_STYLE = {
  '--border-bottom-width': '1px',
  '--border-color': 'var(--token-0d370e99-f85c-4d8b-8383-980b00d4aaf8, rgb(78, 97, 118))',
  '--border-left-width': '1px',
  '--border-right-width': '1px',
  '--border-style': 'solid',
  '--border-top-width': '1px',
  backgroundColor: 'var(--token-0d370e99-f85c-4d8b-8383-980b00d4aaf8, rgb(78, 97, 118))',
} as React.CSSProperties

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>('switch')

  return (
    <div className="framer-23t8eo" data-framer-name="Page Section/FAQ-WIP" id="faq">
      {/* Heading */}
      <div className="ssr-variant">
        <div className="framer-oty6pl-container">
          <div
            className="framer-RwRi6 framer-mpaIx framer-WLYKn framer-aQP8P framer-h9oxO framer-1etrr6s framer-v-1mzkp2b"
            data-framer-name="H3"
            style={{ '--hz6pv8': '0px', maxWidth: '100%', width: '100%' } as React.CSSProperties}
          >
            <div className="framer-18n4kb3" data-framer-name="Heading">
              <div
                className="framer-l6pu9u"
                data-framer-name="Heading 2"
                data-framer-component-type="RichTextContainer"
                style={
                  {
                    justifyContent: 'flex-end',
                    '--framer-paragraph-spacing': '0px',
                    transform: 'none',
                  } as React.CSSProperties
                }
              >
                <h3
                  className="framer-text framer-styles-preset-19h1oaz"
                  data-styles-preset="kMm6Jx4vg"
                  dir="auto"
                  style={{ '--framer-text-alignment': 'center' } as React.CSSProperties}
                >
                  Frequently Asked Questions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ list */}
      <div className="framer-18dcb4c">
        <div className="framer-10mf0n0" data-framer-name="List">
          <div className="ssr-variant">
            {FAQ_DATA.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <motion.div
                  key={faq.id}
                  className="framer-1jd6l4i-container"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div
                    className={`framer-SLAP6 framer-1xuaV framer-gm0hU framer-WLYKn framer-aQP8P framer-zhgfh framer-MQ9VS framer-J5aJG framer-h9oxO framer-wm6Ds framer-Giurq framer-NKMBL framer-1epd33h${isOpen ? ' framer-v-1epd33h' : ''}`}
                    data-border="true"
                    data-framer-name={isOpen ? 'Open' : 'Closed'}
                    style={
                      {
                        '--border-bottom-width': '0px',
                        '--border-color': 'rgb(233, 225, 216)',
                        '--border-left-width': '0px',
                        '--border-right-width': '0px',
                        '--border-style': 'solid',
                        '--border-top-width': '1px',
                        width: '100%',
                      } as React.CSSProperties
                    }
                  >
                    {/* Question row — clickable */}
                    <div
                      className="framer-1vbh5ho"
                      data-framer-name="Question"
                      data-highlight="true"
                      tabIndex={0}
                      role="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? '' : faq.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setOpenId(isOpen ? '' : faq.id)
                        }
                      }}
                    >
                      <div
                        className="framer-kfx8s8"
                        data-framer-name="Question"
                        data-framer-component-type="RichTextContainer"
                        style={
                          {
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            transform: 'none',
                          } as React.CSSProperties
                        }
                      >
                        <h6
                          className="framer-text framer-styles-preset-1963bkz"
                          data-styles-preset="WECHwDZ8N"
                          dir="auto"
                        >
                          {faq.question}
                        </h6>
                      </div>

                      {/* +/− icon */}
                      <button
                        className="framer-absii9"
                        data-framer-name="Icon"
                        data-reset="button"
                        style={{
                          borderBottomLeftRadius: '100px',
                          borderBottomRightRadius: '100px',
                          borderTopLeftRadius: '100px',
                          borderTopRightRadius: '100px',
                        }}
                        aria-label={isOpen ? 'Collapse' : 'Expand'}
                        tabIndex={-1}
                      >
                        <motion.div
                          className="framer-17jayhm"
                          data-border="true"
                          data-framer-name="Line 2"
                          animate={{ rotate: isOpen ? 270 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          style={BORDER_LINE_STYLE}
                        />
                        <motion.div
                          className="framer-b4cqkn"
                          data-border="true"
                          data-framer-name="Line 1"
                          animate={{ rotate: isOpen ? 90 : 90 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          style={BORDER_LINE_STYLE}
                        />
                      </button>
                    </div>

                    {/* Answer panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          className="framer-1mp8ga4"
                          data-framer-appear-id="1mp8ga4"
                          data-framer-name="Answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            className="framer-1npzsui"
                            data-framer-name="Answer - formatted text"
                            data-selection="true"
                            data-framer-component-type="RichTextContainer"
                            style={{ transform: 'none' }}
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
