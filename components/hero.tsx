import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br bg-gray-900  text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transforme o seu negócio em uma maquina de vendas com nossos <span className="text-blue-200 underline decoration-2 decoration-blue-400">especialistas em marketing digital</span>
          </h1>
          <p className="text-base md:text-xl mb-10 text-blue-50">
            Marque uma reunião <span className="underline decoration-2 decoration-blue-400" >estratégica</span> com nosso especialista para alavancar o seu negócio com estratégias de atração de leads qualificados.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Agendar reunião
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

