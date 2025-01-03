import Link from 'next/link'

import { Icon } from '@/components/Icon'
import "@/styles/tags.css"


export function QuickLinks({ children }) {
  return (
    <div className="not-prose quicklinks">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon }) {
  return (
    <div className="quicklink  quicklink-div">
      <div className="quicklink-div1"/>
      <div className="quicklink-div2">
        <Icon icon={icon} className="quicklink-icon" />
        <h2 className="quicklink-h2">
          <Link href={href}>
            <span  style={{position:'absolute',inset:'-1px',borderRadius:'0.75rem'}} />
            {title}
          </Link>
        </h2>
        <p className="quicklink-p">
          {description}
        </p>
      </div>
    </div>
  )
}
