export default function PlansSection() {
  const plans = [
    {
      id: 1,
      title: "1 Mês",
      subtitle: "Perfeito para experimentar",
      price: "R$ 19,90",
      period: "/mês",
      features: [
        "Envio de comprovantes PIX",
        "IA com 99,9% de precisão",
        "Criptografia de ponta a ponta",
        "Relatórios básicos",
        "Suporte por email"
      ],
      buttonText: "Começar agora",
      trialText: "3 dias grátis para testar!",
      popular: false
    },
    {
      id: 3,
      title: "6 Meses",
      subtitle: "Oferta mais vantajosa",
      price: "R$ 59,90",
      period: "/6 meses",
      originalPrice: "R$ 119,40",
      savings: "Economize R$ 60.00",
      monthlyPrice: "Apenas R$ 9,98/mês",
      features: [
        "Tudo do plano mensal",
        "Relatórios avançados",
        "Agenda de compromissos",
        "Backup automático",
        "Suporte prioritário"
      ],
      buttonText: "Quero 3 dias grátis",
      trialText: "3 dias grátis para testar",
      popular: true,
      badge: "✨ Plano mais escolhido pelos usuários"
    },
    {
      id: 2,
      title: "3 Meses",
      subtitle: "Custo-benefício intermediário",
      price: "R$ 39,90",
      period: "/3 meses",
      originalPrice: "R$ 59,70",
      savings: "Economize R$ 20.00",
      features: [
        "Tudo do plano mensal",
        "Relatórios intermediários",
        "Lembretes de pagamento",
        "Suporte por chat",
        "Exportação de dados"
      ],
      buttonText: "Assinar agora",
      popular: false
    }
  ]

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Escolha seu plano
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todos os planos incluem acesso completo ao AmigoBolso. 
            Quanto mais tempo você se compromete, mais você economiza!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 px-4 md:px-0">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'featured' : ''} relative`}
            >
              {plan.badge && (
                <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-amigo-green to-amigo-green-dark text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                {plan.subtitle && (
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                    {plan.subtitle}
                  </p>
                )}
                <div className="mb-3 md:mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1 text-sm md:text-base">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-base md:text-lg text-gray-400 line-through mr-2">
                      {plan.originalPrice}
                    </span>
                    <span className="text-xs md:text-sm text-amigo-green font-semibold">
                      {plan.savings}
                    </span>
                  </div>
                )}
                {plan.monthlyPrice && (
                  <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    {plan.monthlyPrice}
                  </p>
                )}
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-amigo-green mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href="#"
                  className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-full font-bold text-base md:text-lg transition-all duration-300 btn-hover text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amigo-green to-amigo-green-dark text-white hover:shadow-xl'
                      : 'border-2 border-amigo-green text-amigo-green hover:bg-amigo-green hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </a>
                {plan.trialText && (
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    {plan.trialText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Todos os planos incluem garantia de 30 dias
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 text-xs md:text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-amigo-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Pagamento seguro
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-amigo-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancele quando quiser
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-amigo-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Suporte 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
