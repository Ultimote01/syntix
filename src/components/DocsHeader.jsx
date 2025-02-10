'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'

import "@/styles/docslayout.css"

export function DocsHeader({ title }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="docsheader">
      {section && (
        <p >
          {section.title}
        </p>
      )}
      {title && (
        <h1 >
          {title}
        </h1>
      )}
    </header>
  )
}
