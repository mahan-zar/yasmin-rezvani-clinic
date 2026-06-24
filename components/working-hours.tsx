import { Sunrise, Sunset, CalendarX } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const hours = [
  { icon: Sunrise, label: 'صبح‌ها', value: '۱۰ تا ۱۳', note: 'شنبه تا پنجشنبه' },
  { icon: Sunset, label: 'عصرها', value: '۱۷ تا ۲۱', note: 'شنبه تا پنجشنبه' },
  { icon: CalendarX, label: 'جمعه‌ها', value: 'تعطیل', note: 'روز تعطیل هفتگی' },
]

export function WorkingHours() {
  return (
    <section id="hours" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="glass-gold overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="text-center">
            <span className="gold-text text-sm font-bold tracking-widest">در خدمت شما</span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
              ساعات کاری کلینیک
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {hours.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal
                  key={item.label}
                  delay={i * 110}
                  className="glass glass-interactive flex flex-col items-center rounded-3xl p-7 text-center"
                >
                  <span className="glass-gold mb-4 inline-flex size-14 items-center justify-center rounded-2xl">
                    <Icon className="size-7 text-gold" aria-hidden="true" />
                  </span>
                  <span className="text-lg font-bold text-foreground">{item.label}</span>
                  <span className="gold-text mt-1 text-2xl font-extrabold">{item.value}</span>
                  <span className="mt-2 text-sm text-foreground/65">{item.note}</span>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
