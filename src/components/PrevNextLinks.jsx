'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'
import "@/styles/docslayout.css"

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z" />
    </svg>
  )
}

function PageLink({ title, href, dir = 'next', ...props }) {
  return (
    <div style={dir == "next"? {marginLeft:'auto',textAlign:'right'}:{}} {...props}>
      <dt className="pagelinkdt">
        {dir === 'next' ? 'Next' : 'Previous'}
      </dt>
      <dd  style={{marginTop:'0.25rem'}}>
        <Link
          href={href}
          className={clsx(
            'pagelinklink',
            dir === 'previous' && 'pagelinklinkopt1',
          )}
        >
          {title}
          <ArrowIcon
            className={clsx(
              'pagelinkarrow',
              dir === 'previous' && 'pagelinkarrowOpt1',
            )}
          />
        </Link>
      </dd>
    </div>
  )
}

export function PrevNextLinks() {
  let pathname = usePathname()
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === pathname)
  let previousPage = linkIndex > -1 ? allLinks[linkIndex - 1] : null
  let nextPage = linkIndex > -1 ? allLinks[linkIndex + 1] : null

  if (!nextPage && !previousPage) {
    return null
  }

  return (
    <dl className="prevNextlinkdl">
      {previousPage && <PageLink dir="previous" {...previousPage} />}
      {nextPage && <PageLink    {...nextPage} />}
    </dl>
  )
}
