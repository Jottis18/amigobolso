export default function BenefitsSection() {
  const benefits = [
    {
      icon: "⚡",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Envie comprovantes PIX direto pelo botão de ação do iPhone",
      description: "Sem WhatsApp ou apps extras. Tudo integrado ao seu iPhone para máxima praticidade.",
      included: true
    },
    {
      icon: "🧠",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "IA que entende português com 99,9% de precisão",
      description: "Nossa inteligência artificial foi treinada especificamente para o português brasileiro.",
      included: true
    },
    {
      icon: "🛡️",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Criptografia de ponta a ponta – seus dados protegidos",
      description: "Seus dados financeiros são protegidos com a mesma tecnologia usada por bancos.",
      included: true
    },
    {
      icon: "📅",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Organização financeira + agenda de compromissos em um só lugar",
      description: "Controle suas finanças e compromissos em uma única plataforma integrada.",
      included: true
    }
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o AmigoBolso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolucione sua gestão financeira com tecnologia de ponta e praticidade incomparável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                <div className={`w-12 h-12 ${benefit.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`text-2xl ${benefit.iconColor}`}>
                    {benefit.icon}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {benefit.included && (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Incluído no plano
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amigo-green to-amigo-green-dark rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua vida financeira?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de pessoas que já simplificaram sua gestão financeira com o AmigoBolso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#planos"
                className="bg-white text-amigo-green px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 btn-hover"
              >
                Começar teste grátis
              </a>
              <a
                href="#avaliacoes"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amigo-green transition-all duration-300"
              >
                Ver depoimentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
