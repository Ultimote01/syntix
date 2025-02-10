'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'

import { Logomark } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import '@/styles/mobileNav.css'

function MenuIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  )
}

function CloseOnNavigation({ close }) {
  let pathname = usePathname()
  let searchParams = useSearchParams()

  useEffect(() => {
    close()
  }, [pathname, searchParams, close])

  return null
}

export function MobileNavigation() {
  let [isOpen, setIsOpen] = useState(false)
  let close = useCallback(() => setIsOpen(false), [setIsOpen])

  function onLinkClick(event) {
    let link = event.currentTarget
    console.log(
      link,
      link.pathname,
      link.search,
      link.hash
    )
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mobilenav"
        aria-label="Open navigation"
      >
        <MenuIcon className="menu-icon-mobilenav" />
      </button>
      <Suspense fallback={null}>
        <CloseOnNavigation close={close} />
      </Suspense>
      <Dialog
        open={isOpen}
        onClose={() => close()}
        className="dialog-mobilenav"
        aria-label="Navigation"
      >
        <DialogPanel className="dialogpanel-mobilenav">
          <div className="mobilenav1">
            <button
              type="button"
              onClick={() => close()}
              aria-label="Close navigation"
            >
              <CloseIcon className="closeIcon" />
            </button>
            <Link href="/"  style={{marginLeft: '1.5rem'}} aria-label="Home page">
              <Logomark style={{height:'2.25rem',width:'2.25rem'}} />
            </Link>
          </div>
          <Navigation className="mobilenav2" onLinkClick={onLinkClick} />
        </DialogPanel>
      </Dialog>
    </>
  )
}
