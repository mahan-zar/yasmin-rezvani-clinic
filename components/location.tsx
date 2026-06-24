import { MapPin, Phone, AtSign } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const phones = [
  { display: '۰۹۳۶۲۲۰۵۹۰۲', tel: '09362205902' },
  { display: '۰۹۱۷۶۰۰۲۸۵۸', tel: '09176002858' },
]

const INSTAGRAM_URL =
  'https://www.instagram.com/yasaman_.rezvani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

export function Location() {
  return (
    <section id="location" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="gold-text text-sm font-bold tracking-widest">
              آدرس و راه‌های ارتباطی
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
              ما را اینجا پیدا کنید
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass glass-interactive flex h-full flex-col gap-5 rounded-[2rem] p-8">
              <div className="flex items-center gap-4">
                <span className="glass-gold inline-flex size-12 items-center justify-center rounded-2xl">
                  <MapPin className="size-6 text-gold" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">نشانی کلینیک</h3>
              </div>
              <p className="text-pretty leading-loose text-foreground/80">
                فارس، شیراز، خیابان زرگری، نبش کوچه ۱۹ (کنار کلینیک دکتر خدادوست)،
                کلینیک پوست و مو آرا
              </p>

              <a
                href="https://maps.google.com/?q=کلینیک+پوست+و+مو+آرا+شیراز+خیابان+زرگری"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-auto flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_30%_30%,_oklch(0.3_0.06_255),_oklch(0.18_0.04_258))]"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(oklch(0.82 0.13 88 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.13 88 / 0.18) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                  aria-hidden="true"
                />
                <span className="relative flex flex-col items-center gap-2 text-center">
                  <span className="glass-gold inline-flex size-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110">
                    <MapPin className="size-6 text-gold" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground/85">
                    مشاهده روی نقشه
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-6">
              <div className="glass glass-interactive flex flex-col gap-5 rounded-[2rem] p-8">
                <div className="flex items-center gap-4">
                  <span className="glass-gold inline-flex size-12 items-center justify-center rounded-2xl">
                    <Phone className="size-6 text-gold" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">تماس مستقیم</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="glass glass-interactive flex items-center justify-between gap-3 rounded-2xl p-4"
                    >
                      <span className="font-bold" dir="ltr">
                        {phone.display}
                      </span>
                      <Phone className="size-5 text-gold" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-interactive flex items-center gap-4 rounded-[2rem] p-8"
              >
                <span className="glass-gold inline-flex size-12 items-center justify-center rounded-2xl">
                  <AtSign className="size-6 text-gold" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xl font-bold">اینستاگرام ما</span>
                  <span className="text-sm text-foreground/70" dir="ltr">
                    @yasaman_.rezvani
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
