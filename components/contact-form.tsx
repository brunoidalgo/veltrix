"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    money: "",
    social: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        money: "",
        social: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Vamos elevar o nível do seu negócio ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preencha esse formulário e entraremos em contato com você em breve para agendar a reunião.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                <p className="text-gray-600">Obrigado por nos enviar essa mensagem, vamos entrar em contato o mais breve possível!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email (Opcional)
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="johnsmith@gmail.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="money" className="text-sm font-medium text-gray-700">
                      Faturamento Mensal *
                    </label>
                    <select id="money" name="money" required className="text-black flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" onChange={handleChange}>
                      <option value="Selecione...">Selecione...</option>
                      <option value="Selecione...">Até 10 Mil</option>
                      <option value="Selecione...">De 10 Mil à 20 Mil</option>
                      <option value="Selecione...">De 25 Mil à 40 Mil</option>
                      <option value="Selecione...">Mais de 50 Mil</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Nome da Empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      placeholder="Sua empresa"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Celular/WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 0000-0000"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="social" className="text-sm font-medium text-gray-700">
                      Instagram (Opcional)
                    </label>
                    <Input
                      id="social"
                      name="social"
                      value={formState.social}
                      onChange={handleChange}
                      required
                      placeholder="@suaempresa"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Como podemos lhe ajudar ? (Opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Descreve um pouco sobre o seu negócio se quiser..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar esse formulário você concorda com{" "}
                  <a href="#" className="underline">
                    Política de Privacidade
                  </a>{" "}
                  e nossos{" "}
                  <a href="#" className="underline">
                    Termos de Serviço
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section >
  )
}

