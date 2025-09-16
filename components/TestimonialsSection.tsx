'use client'

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Beatriz Silva",
      role: "Empresária",
      avatar: "👩‍💼",
      quote: "Mudou minha vida financeira!",
      content: "Consegui pagar minhas dívidas e controlar minhas despesas de forma simples e prática. O AmigoBolso me ajudou a ter uma visão clara do meu dinheiro.",
      rating: 5
    },
    {
      id: 2,
      name: "Amanda Cardoso",
      role: "Designer",
      avatar: "👩‍🎨",
      quote: "Os dados que ele traz são incríveis.",
      content: "Simples, visual e direto ao ponto. Os relatórios são fantásticos e me ajudam a tomar decisões financeiras mais inteligentes.",
      rating: 5
    },
    {
      id: 3,
      name: "Leonardo da Costa",
      role: "Engenheiro",
      avatar: "👨‍💻",
      quote: "Muito prático.",
      content: "Me ajuda a lembrar de tudo e a me organizar sem muito trabalho. A integração com o WhatsApp é perfeita!",
      rating: 5
    },
    {
      id: 4,
      name: "Mariana Santos",
      role: "Médica",
      avatar: "👩‍⚕️",
      quote: "Revolucionou minha organização!",
      content: "Como médica, tenho uma agenda corrida. O AmigoBolso me lembra de todos os compromissos financeiros e me ajuda a manter tudo organizado.",
      rating: 5
    },
    {
      id: 5,
      name: "Carlos Oliveira",
      role: "Aposentado",
      avatar: "👨‍🦳",
      quote: "Simplicidade que funciona!",
      content: "Aos 65 anos, aprendi a usar o AmigoBolso rapidamente. Agora controlo minha aposentadoria de forma muito mais eficiente.",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="avaliacoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 pessoas já transformaram sua vida financeira com o AmigoBolso. 
            Veja alguns depoimentos reais:
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="testimonial-card text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                "{testimonials[currentTestimonial].quote}"
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {testimonials[currentTestimonial].content}
              </p>
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-amigo-green scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amigo-green mb-2">
              10K+
            </div>
            <p className="text-gray-600">Usuários ativos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amigo-green mb-2">
              4.9
            </div>
            <p className="text-gray-600">Avaliação média</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amigo-green mb-2">
              98%
            </div>
            <p className="text-gray-600">Satisfação</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amigo-green mb-2">
              24/7
            </div>
            <p className="text-gray-600">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  )
}
