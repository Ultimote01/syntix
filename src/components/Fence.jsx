'use client'

import { Fragment } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export function Fence({ children, language }) {
 
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={themes.dracula}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className+" fence"} style={{}}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
