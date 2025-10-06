'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-amigobolso.svg" 
              alt="AmigoBolso - Seu atalho financeiro inteligente" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#como-funciona" className="text-gray-700 hover:text-amigo-green transition-colors">
              Como funciona
            </a>
            <a href="#avaliacoes" className="text-gray-700 hover:text-amigo-green transition-colors">
              Avaliações
            </a>
            <a href="#planos" className="text-gray-700 hover:text-amigo-green transition-colors">
              Planos
            </a>
            <a href="#login" className="text-gray-700 hover:text-amigo-green transition-colors">
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#planos"
              className="bg-gradient-to-r from-amigo-green to-amigo-green-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 btn-hover"
            >
              Quero ter um assessor
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amigo-green focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#como-funciona" className="text-gray-700 hover:text-amigo-green transition-colors">
                Como funciona
              </a>
              <a href="#avaliacoes" className="text-gray-700 hover:text-amigo-green transition-colors">
                Avaliações
              </a>
              <a href="#planos" className="text-gray-700 hover:text-amigo-green transition-colors">
                Planos
              </a>
              <a href="#login" className="text-gray-700 hover:text-amigo-green transition-colors">
                Login
              </a>
              <a
                href="#planos"
                className="bg-gradient-to-r from-amigo-green to-amigo-green-dark text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Quero ter um assessor
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
