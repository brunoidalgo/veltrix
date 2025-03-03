import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import FloatingNavbar from "@/components/floating-navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingNavbar />
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

