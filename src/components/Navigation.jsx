import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'
import "@/styles/navigation.css"

export function Navigation({ className, onLinkClick }) {
  let pathname = usePathname()

  return (
    <nav className={clsx(className)}>
      <ul role="list" className="navigation_ul">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="navigation_h1">
              {section.title}
            </h2>
            <ul
              role="list"
              className="navigation_ul1"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative" style={{position:'relative'}}>
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'navigation_link',
                      link.href === pathname
                        ? 'navigation_link_opt1'
                        : 'navigation_link_opt2',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
