import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WorkingHours } from '@/components/working-hours'
import { Location } from '@/components/location'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WorkingHours />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  )
}
