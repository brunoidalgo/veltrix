"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    name: "Isaias Turismo",
    title: "De pequena agência de turismo a líder regional",
    subtitle: "Crescimento de 300%",
    description:
      "Com mais de um ano de parceria, essa agência de turismo viu seu faturamento crescer 300%.",
    image: "/placeholder.svg?height=600&width=800",
    results: ["400% increase in revenue", "10 new franchise locations", "250% growth in social media following"],
  },
  {
    id: 2,
    name: "Isaias Turismo",
    title: "De pequena agência de turismo a líder regional",
    subtitle: "Crescimento de 300%",
    description:
      "Com mais de um ano de parceria, essa agência de turismo viu seu faturamento crescer 300%.",
    image: "/placeholder.svg?height=600&width=800",
    results: [
      "312% increase in online sales",
      "68% reduction in customer acquisition cost",
      "4.8/5 average customer satisfaction",
    ],
  },
  {
    id: 3,
    name: "Isaias Turismo",
    title: "De pequena agência de turismo a líder regional",
    subtitle: "Crescimento de 300%",
    description:
      "Com mais de um ano de parceria, essa agência de turismo viu seu faturamento crescer 300%.",
    image: "/placeholder.svg?height=600&width=800",
    results: ["10x increase in qualified leads", "45% higher conversion rate", "28% reduction in sales cycle length"],
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === caseStudies.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? caseStudies.length - 1 : current - 1))
  }

  const activeCase = caseStudies[activeIndex]

  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Histórias de Sucesso</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos de sucesso e descubra como ajudamos nossos clientes a alcançar seus objetivos de negócios.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={activeCase.image || "/placeholder.svg"}
                  alt={activeCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-sm text-blue-600 font-medium mb-2">Estudo de Caso {activeCase.name}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{activeCase.title}</h3>
                <p className="text-lg text-blue-600 mb-4">{activeCase.subtitle}</p>
                <p className="text-gray-600 mb-6">{activeCase.description}</p>

                <div className="space-y-2">
                  <p className="font-medium text-gray-900">Resultados Chave:</p>
                  <ul className="space-y-1">
                    {activeCase.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

