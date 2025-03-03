import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Sobre a <span className="text-blue-600">Veltrix</span>
            </h2>
            <p className="text-gray-700 mb-6">
              A Veltrix é uma agência de marketing digital full-service que oferece soluções personalizadas para
              empresas de todos os tamanhos. Nossa missão é ajudar nossos clientes a alcançar seus objetivos de negócios
              através de estratégias de marketing inovadoras e eficazes.
            </p>
            <p className="text-gray-700 mb-6">
              O que nos diferencia é nosso compromisso em tratar o seu negócio como se fosse o nosso. Não somos apenas
              prestadores de serviços – somos parceiros de crescimento investidos no seu sucesso a longo prazo.
            </p>
            <p className="text-gray-700 mb-6">
              Com uma equipe talentosa e apaixonada, estamos prontos para ajudá-lo a alcançar novos patamares de
              sucesso. Entre em contato conosco hoje mesmo para saber mais sobre como podemos ajudar a sua empresa a
              crescer.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">25+</p>
                <p className="text-gray-600">empresas satisfeitas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">10000+</p>
                <p className="text-gray-600">Faturamento gerado</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Retenção de clientes</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">1</p>
                <p className="text-gray-600">Membros do time</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="PULSE Marketing Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

