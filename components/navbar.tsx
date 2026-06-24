'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'خدمات' },
  { href: '#hours', label: 'ساعات کاری' },
  { href: '#location', label: 'آدرس' },
  { href: '#contact', label: 'رزرو نوبت' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 nav-glass-transition ${
          scrolled || open ? 'glass' : 'border border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="glass-gold flex size-10 items-center justify-center rounded-xl">
            <Sparkles className="size-5 text-gold" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="gold-text text-lg font-extrabold">یاسمن رضوانی</span>
            <span className="text-[11px] text-muted-foreground">کلینیک تخصصی زیبایی</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/85 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:right-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-gold hidden rounded-xl px-5 py-2.5 text-sm font-bold md:inline-block"
        >
          رزرو نوبت
        </a>

        {/* Hamburger button — both icons live in the DOM permanently, toggled via CSS
            so no React DOM mutation fires during the open/close animation frame. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={open}
          className="glass-gold flex size-10 items-center justify-center rounded-xl text-gold transition-transform duration-300 active:scale-90 md:hidden"
          style={{ touchAction: 'manipulation' }}
        >
          {/* Wrapper gives both icons a shared 20×20 reference frame */}
          <span className="hamburger-wrap" aria-hidden="true">
            <Menu className={`hamburger-icon ${open ? 'hamburger-icon--hide' : 'hamburger-icon--show'}`} />
            <X    className={`hamburger-icon ${open ? 'hamburger-icon--show' : 'hamburger-icon--hide'}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu mx-auto mt-2 max-w-6xl md:hidden ${
          open ? 'is-open' : 'pointer-events-none'
        }`}
      >
        <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:bg-gold/10 hover:text-gold"
                style={{ touchAction: 'manipulation' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold block rounded-xl py-3 text-center text-sm font-bold"
              style={{ touchAction: 'manipulation' }}
            >
              رزرو نوبت
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
