import clsx from 'clsx'

import "@/styles/prose.css"

export function Prose({ as, className, ...props }) {
  let Components = as ?? 'div'


  return (
    <Components
      className={clsx(
        className,
        'prose',
      )}
      {...props}
    />
  )
}
