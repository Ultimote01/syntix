import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { Highlight,themes } from 'prism-react-renderer'


import { Button } from '@/components/button/Button'
import { HeroBackground } from './HeroBackground'
import blurCyanImage from  '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import  "../styles/hero.css"


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})


const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`



const tabs = [
    { name: 'cache-advance.config.js', isActive: true },
    { name: 'package.json', isActive: false },
  ]
  


  function TrafficLightsIcon(props) {
    return (
      <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
        <circle cx="5" cy="5" r="4.5" />
        <circle cx="21" cy="5" r="4.5" />
        <circle cx="37" cy="5" r="4.5" />
      </svg>
    )
  }


  export function Hero() {
    return (
      <div className={'hero1'}>
         <div className={'hero2'}>
          <div className={'hero3'}>
          <div className={'hero4'}>
          <Image
              className={'image'}
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div style={{position:'relative'}}>
            <p className= {'hero5'}>
                Never miss the cache again.
              </p>

              <p className={'hero6'}>
                Cache every single thing your app could ever do ahead of time,
                so your code never even has to run at all.
              </p>

        <div className={'hero7'}>
        <Button href="/">Get started</Button>
        <Button href="/" variant="secondary">
           View on GitHub
          </Button>
          </div>
          </div>
          </div>

          <div className={'hero8'} >
           <div className={'hero9'}>
          <HeroBackground className={'herobackground'}/>
          </div>
          <div style={{position:'relative'}}>
          <Image
                className={'image1'}
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />

              <Image
                className={'image2'}
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className={'hero10'}/>
              <div className={'hero11'}/>
              <div className={'hero12'}>
              <div className={'hero13'}/>
              <div className={'hero14'}/>
              <div className={'hero15'}>
              <TrafficLightsIcon className={'hero16'}/>
              <div className= {'hero17'} >
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'hero18',
                          tab.isActive
                            ? 'hero18_option1'
                            : 'hero18_option2',
                        )}
                      >
                        <div
                          className={clsx(
                            'hero19',
                            tab.isActive && 'hero19_option',
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={'hero20'}>
                  <div
                      aria-hidden="true"
                      className= {'hero21'}
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                <Highlight
                  code={code}
                  language={codeLanguage}
                  theme={themes.dracula}
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre
                      className={clsx(
                        className,
                        'hero22',
                      )}
                      style={{}}
                    >
                      <code style={{paddingRight:'1rem',paddingLeft:'1rem',fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"}}>
                        {tokens.map((line, lineIndex) => (
                          <div key={lineIndex} {...getLineProps({ line })}>
                            {line.map((token, tokenIndex) => (
                              <span
                                key={tokenIndex}
                                {...getTokenProps({ token })}
                              />
                            ))}
                          </div>
                        ))}
                      </code>
                    </pre>
                  )}
            </Highlight>
            </div>
            </div>
              </div>
          </div>
          </div>
          </div>
         </div>
      </div>
    )
  }
  