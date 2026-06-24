import Image from 'next/image'
import { Syringe, Droplets, Zap, Sparkles, Waves, Scan } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Service = {
  title: string
  desc: string
  icon: React.ElementType
  image?: string
  className: string
}

const services: Service[] = [
  {
    title: 'تزریق فیلر',
    desc: 'حجم‌دهی و فرم‌دهی طبیعی لب و صورت با فیلرهای استاندارد و اورجینال.',
    icon: Syringe,
    image: '/images/filler.png',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'تزریق بوتاکس',
    desc: 'محو خطوط و چین‌وچروک برای ظاهری جوان و شاداب.',
    icon: Droplets,
    image: '/images/botox.png',
    className: 'md:col-span-1',
  },
  {
    title: 'لیزر موهای زائد',
    desc: 'حذف دائمی موهای زائد با دستگاه‌های روز دنیا.',
    icon: Zap,
    image: '/images/laser.png',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'جوانسازی پوست',
    desc: 'بازگرداندن شادابی و درخشش پوست با متدهای نوین.',
    icon: Sparkles,
    image: '/images/skin.png',
    className: 'md:col-span-1',
  },
  {
    title: 'هایفوتراپی',
    desc: 'لیفت و سفت‌سازی پوست بدون جراحی با امواج اولتراسوند.',
    icon: Waves,
    image: '/images/hifu.png',
    className: 'md:col-span-1',
  },
  {
    title: 'کانتورینگ صورت',
    desc: 'فرم‌دهی و برجسته‌سازی اجزای صورت برای تناسبی هماهنگ.',
    icon: Scan,
    image: '/images/contouring.png',
    className: 'md:col-span-2',
  },
]

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="glass glass-interactive group relative flex h-full min-h-44 flex-col justify-end overflow-hidden rounded-3xl p-6">
      {service.image && (
        <>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/50 to-transparent" />
        </>
      )}
      <div className="relative z-10">
        <span className="glass-gold mb-4 inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="size-6 text-gold" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/75">
          {service.desc}
        </p>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="gold-text text-sm font-bold tracking-widest">خدمات تخصصی ما</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
            خدماتی لاکچری برای زیبایی ماندگار
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-foreground/70">
            مجموعه‌ای کامل از خدمات زیبایی و جوانسازی پوست، با بالاترین کیفیت و
            توسط متخصصان مجرب کلینیک یاسمن رضوانی.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(11rem,1fr)] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className={service.className}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
