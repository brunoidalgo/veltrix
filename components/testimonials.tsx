"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "PULSE is extraordinary and, without a doubt, the best agency we've had the opportunity to work with.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc.",
  },
  {
    id: 2,
    quote:
      "The team at PULSE doesn't just deliver results – they become an extension of your business. Their strategic approach transformed our digital presence.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthWave",
  },
  {
    id: 3,
    quote:
      "Working with PULSE has been a game-changer for our business. Their data-driven approach and creative strategies have consistently delivered exceptional ROI.",
    author: "Jessica Martinez",
    position: "Founder, Elevate Retail",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, []) // Removed nextSlide from dependencies

  return (
    <section id="testimonials" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes ?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped grow
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <Quote className="text-blue-300 mb-6" size={48} />

            <div className="min-h-[160px]">
              <p className="text-xl md:text-2xl font-medium mb-8">{testimonials[activeIndex].quote}</p>

              <div>
                <p className="font-bold">{testimonials[activeIndex].author}</p>
                <p className="text-blue-200">{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

