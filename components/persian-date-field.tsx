'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Calendar } from 'react-multi-date-picker'
import type { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

export function PersianDateField() {
  const [value, setValue] = useState<DateObject | null>(null)
  const [open, setOpen] = useState(false)
  // Avoid SSR/hydration mismatch — portals need document.body
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  // Close when the user taps/clicks outside both the input and the calendar
  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as Node
      if (inputRef.current?.contains(target)) return
      if (calendarRef.current?.contains(target)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [open])

  const displayValue = value ? value.format('YYYY/MM/DD') : ''

  const popup =
    open && mounted
      ? createPortal(
          <>
            {/* Full-screen backdrop — tapping it closes the calendar */}
            <div
              aria-hidden="true"
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Calendar centred on screen — works on any viewport size */}
            <div
              ref={calendarRef}
              role="dialog"
              aria-modal="true"
              aria-label="انتخاب تاریخ شمسی"
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="pointer-events-auto">
                <Calendar
                  calendar={persian}
                  locale={persian_fa}
                  value={value}
                  onChange={(date) => {
                    setValue(date as DateObject)
                    setOpen(false)
                  }}
                  className="yasmin-datepicker"
                  weekDays={['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']}
                />
              </div>
            </div>
          </>,
          document.body,
        )
      : null

  return (
    <>
      <input
        ref={inputRef}
        readOnly
        // inputMode="none" stops the soft keyboard from appearing on mobile
        inputMode="none"
        value={displayValue}
        placeholder="تاریخ را انتخاب کنید"
        className="form-input cursor-pointer select-none caret-transparent"
        onClick={() => setOpen((v) => !v)}
        // Prevent the browser focusing the input via keyboard (Tab is fine)
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setOpen((v) => !v)
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
      />
      {popup}
    </>
  )
}
