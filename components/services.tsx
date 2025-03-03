import { BarChart3, Megaphone, Palette, Globe, TrendingUp, Users } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O time de marketing da <span className="text-blue-400 underline">Veltrix</span> Trabalha para o sucesso da sua empresa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa equipe de especialistas em marketing digital está pronta para ajudar a sua empresa a crescer e alcançar grandes objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <Megaphone size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Anúncios Digitais</h3>
            <p className="text-gray-400">
              Atraia mais clientes com campanhas de anúncios digitais eficazes com o Google Ads e Meta ADS, otimizados para conversões e ROI positivo.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-xl  hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <Globe size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Otimização SEO</h3>
            <p className="text-gray-400">
              Melhore a classificação do seu site nos mecanismos de busca com estratégias de SEO eficazes, pesquisa de palavras-chave e otimização de conteúdo.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-xl  hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <Palette size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Desenvolvimento de Marca</h3>
            <p className="text-gray-400">
              Crie uma marca forte e atraente com design gráfico, desenvolvimento de sites e conteúdo de alta qualidade.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Gerenciamento de Mídias Digitais</h3>
            <p className="text-gray-400">
              Aumente o engajamento e a fidelidade do cliente com gerenciamento de mídias sociais, marketing de influenciadores e estratégias de conte
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <BarChart3 size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Análises & Relatórios</h3>
            <p className="text-gray-400">
              Obtenha insights valiosos sobre o desempenho de suas campanhas de marketing com análises detalhadas e relatórios personalizados.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-800 p-8 rounded-xl  hover:bg-gray-750 transition-colors">
            <div className="text-blue-400 mb-4">
              <TrendingUp size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3">Estratégia de Crescimento</h3>
            <p className="text-gray-400">
              Desenvolva uma estratégia de marketing digital abrangente e personalizada para impulsionar o crescimento e o sucesso da sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

