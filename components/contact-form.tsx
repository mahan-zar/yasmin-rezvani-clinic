'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, User, CalendarDays, MessageCircle, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PersianDateField } from '@/components/persian-date-field'

const serviceOptions = [
  'تزریق فیلر',
  'تزریق بوتاکس',
  'لیزر موهای زائد',
  'جوانسازی پوست',
  'هایفوتراپی',
  'کانتورینگ صورت',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="gold-text text-sm font-bold tracking-widest">رزرو نوبت</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
            همین حالا وقت زیبایی خود را رزرو کنید
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-foreground/70">
            فرم زیر را تکمیل کنید تا کارشناسان ما در کوتاه‌ترین زمان برای هماهنگی
            نوبت با شما تماس بگیرند. تجربه‌ی زیبایی لاکچری در انتظار شماست.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-[2rem] p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
                <span className="glass-gold inline-flex size-16 items-center justify-center rounded-full">
                  <Check className="size-8 text-gold" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold">درخواست شما ثبت شد</h3>
                <p className="max-w-xs text-foreground/70">
                  به‌زودی برای هماهنگی نوبت با شما تماس می‌گیریم. سپاس از اعتماد شما.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label="نام و نام خانوادگی" icon={User}>
                  <input
                    type="text"
                    required
                    placeholder="نام خود را وارد کنید"
                    className="form-input"
                  />
                </Field>

                <Field label="شماره تماس" icon={Phone}>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="0912 000 0000"
                    className="form-input text-right"
                  />
                </Field>

                <Field label="خدمت موردنظر" icon={MessageCircle}>
                  <select required defaultValue="" className="form-input">
                    <option value="" disabled>
                      یک خدمت را انتخاب کنید
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="تاریخ پیشنهادی (شمسی)" icon={CalendarDays} asDiv>
                  <PersianDateField />
                </Field>

                <button
                  type="submit"
                  className="btn-gold w-full rounded-xl py-3.5 text-base font-bold"
                >
                  ثبت درخواست نوبت
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  icon: Icon,
  children,
  asDiv = false,
}: {
  label: string
  icon: React.ElementType
  children: React.ReactNode
  asDiv?: boolean
}) {
  const Wrapper = asDiv ? 'div' : 'label'
  return (
    <Wrapper className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground/80">
        <Icon className="size-4 text-gold" aria-hidden="true" />
        {label}
      </span>
      {children}
    </Wrapper>
  )
}
