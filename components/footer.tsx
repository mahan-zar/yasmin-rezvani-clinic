import { Sparkles, AtSign, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-right">
            <div className="max-w-sm">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span className="glass-gold flex size-10 items-center justify-center rounded-xl">
                  <Sparkles className="size-5 text-gold" aria-hidden="true" />
                </span>
                <span className="gold-text text-lg font-extrabold">یاسمن رضوانی</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                کلینیک زیبایی تخصصی یاسمن رضوانی؛ همراه شما برای تجربه‌ای لاکچری از
                زیبایی، سلامت و جوانسازی پوست.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 text-sm text-foreground/75 md:items-end">
              <span className="flex items-start gap-2 md:text-right">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span className="max-w-xs leading-relaxed">
                  شیراز، خیابان زرگری، نبش کوچه ۱۹ (کنار کلینیک دکتر خدادوست)،
                  کلینیک پوست و مو آرا
                </span>
              </span>
              <a
                href="tel:09362205902"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-gold"
                dir="ltr"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                ۰۹۳۶۲۲۰۵۹۰۲
              </a>
              <a
                href="tel:09176002858"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-gold"
                dir="ltr"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                ۰۹۱۷۶۰۰۲۸۵۸
              </a>
              <a
                href="https://www.instagram.com/yasaman_.rezvani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-gold"
              >
                <AtSign className="size-4 text-gold" aria-hidden="true" />
                yasaman_.rezvani
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-center text-xs text-foreground/50">
            © {new Date().getFullYear()} کلینیک زیبایی تخصصی یاسمن رضوانی — تمامی حقوق محفوظ است.
          </div>
        </div>
      </div>
    </footer>
  )
}
