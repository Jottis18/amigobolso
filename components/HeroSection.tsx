export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-amigo-green-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tenha um <span className="text-amigo-green">amigo no seu bolso</span>, cuidando das suas finanças 24h por dia
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Controle seus gastos, organize compromissos e envie comprovantes PIX em segundos – tudo direto do seu iPhone.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-amigo-green-light rounded-full flex items-center justify-center">
                  <span className="text-amigo-green text-lg">⚡</span>
                </div>
                <p className="text-gray-800 text-lg">
                  Envie comprovantes PIX direto pelo botão de ação do iPhone
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🛡️</span>
                </div>
                <p className="text-gray-800 text-lg">
                  IA que entende português com 99,9% de precisão
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">📱</span>
                </div>
                <p className="text-gray-800 text-lg">
                  Criptografia de ponta a ponta – seus dados protegidos
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="bg-gradient-to-r from-amigo-green to-amigo-green-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 btn-hover text-center flex items-center justify-center"
              >
                Quero meu AmigoBolso
                <span className="ml-2 text-white">→</span>
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-amigo-green text-amigo-green px-8 py-4 rounded-full font-bold text-lg hover:bg-amigo-green hover:text-white transition-all duration-300 text-center"
              >
                Como funciona
              </a>
            </div>
          </div>

          {/* iPhone GIF Demo */}
          <div className="flex justify-center lg:justify-end">
            <div className="iphone-frame">
              <div className="power-button"></div>
              <div className="mute-button"></div>
              <div className="volume-up-button"></div>
              <div className="iphone-screen">
                <img 
                  src="/telaiphone.gif" 
                  alt="Demonstração do AmigoBolso no iPhone" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
