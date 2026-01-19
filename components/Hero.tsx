

import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroProps } from '../types'; // Importar HeroProps

export const Hero: React.FC<HeroProps> = ({ heroBackgroundImageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const brands = ['ELECTROLUX', 'CONSUL', 'BRASTEMP', 'BOSCH'];

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {!imageError && heroBackgroundImageUrl ? (
          <img 
            src={heroBackgroundImageUrl} 
            alt="Técnico da RS Refrigeração e Manutenção operando uma máquina de lavar, demonstrando serviço especializado e de confiança." 
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          // Fallback visual: apenas o gradiente escuro se a imagem falhar ou não houver URL
          <div className="w-full h-full bg-[#010101] flex items-center justify-center text-white/50 text-xl font-bold">
            {/* Opcional: ícone ou texto de fallback aqui se o design exigir mais que apenas o gradiente */}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010101] via-[#010101]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#E4B801]/20 border border-[#E4B801]/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-[#E4B801] animate-pulse"></span>
             <span className="text-[#E4B801] font-bold text-xs md:text-sm tracking-wider uppercase">Técnicos disponíveis agora</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            SUA MÁQUINA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4B801] to-yellow-300">
              NOVA COMO NUNCA!
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl font-light">
            Assistência técnica especializada em manutenção de geladeiras e máquinas de lavar, com atendimento ágil em <strong className="text-[#E4B801]">São José dos Campos e região</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="https://w.app/lyijgl" className="gap-2">
              ORÇAMENTO GRÁTIS <ArrowRight size={20} />
            </Button>
            <Button variant="outline" href="#gallery" className="border-white text-white hover:bg-white hover:text-[#010101]">
              NOSSOS PROJETOS
            </Button>
          </div>

          <div className="border-t border-gray-700/50 pt-8">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Trabalhamos com as principais marcas</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center gap-2 text-gray-300 font-semibold">
                  <CheckCircle2 size={16} className="text-[#E4B801]" />
                  {brand}
                </div>
              ))}
              <div className="flex items-center gap-2 text-gray-500 font-semibold italic">
                E DEMAIS MARCAS...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};