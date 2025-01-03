import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const styles = {
  note: {
    container:
      'callout-note-container',
    title: 'callout-note-title',
    body: 'callout-note-body',
  },
  warning: {
    container:
      'callout-warning-container',
    title: 'callout-warning-title',
    body: 'callout-warning-body',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
}

export function Callout({ title, children, type = 'note' }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx( styles[type].container)} 
    style={{marginTop:'2rem',marginBottom:'2rem',padding:'1.2rem',
      borderRadius:'1.5rem', display:'flex'
    }}>
      <IconComponent className="callout-icon" />
      <div className="" style={{marginLeft:'1rem',flex:'1 1 auto'}}>
        <p className={clsx('m-0 font-display text-xl', styles[type].title)} style={{margin:'0',fontFamily:'Inter'}}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)} style={{marginTop:''}}>
          {children}
        </div>
      </div>
    </div>
  )
}
