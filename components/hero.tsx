import Image from 'next/image'
import { Sparkles, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-16"
    >
      <Image
        src="/images/hero.png"
        alt="فضای لاکچری کلینیک زیبایی یاسمن رضوانی"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="glass-gold inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-gold-soft">
              <Sparkles className="size-4" aria-hidden="true" />
              زیبایی شایسته‌ی شماست
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              کلینیک زیبایی تخصصی
              <span className="gold-text mt-2 block">یاسمن رضوانی</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
              تجربه‌ای متفاوت از زیبایی و جوانسازی پوست در محیطی لوکس و آرامش‌بخش.
              با بهره‌گیری از جدیدترین تکنولوژی‌ها و تیمی متخصص، بهترین نسخه‌ی خودتان را کشف کنید.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-gold rounded-xl px-7 py-3.5 text-base font-bold"
              >
                رزرو نوبت
              </a>
              <a
                href="#services"
                className="glass glass-interactive rounded-xl px-7 py-3.5 text-base font-semibold text-foreground"
              >
                مشاهده خدمات
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: '+۱۲', label: 'سال تجربه تخصصی' },
                { value: '+۵۰۰۰', label: 'مراجعه‌کننده راضی' },
                { value: '۴.۹', label: 'امتیاز رضایت', star: true },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="flex items-center gap-1 gold-text text-2xl font-extrabold">
                    {stat.value}
                    {stat.star && (
                      <Star className="size-5 fill-gold text-gold" aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-sm text-foreground/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
