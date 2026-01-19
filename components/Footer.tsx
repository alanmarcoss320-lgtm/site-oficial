
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#050505] text-gray-300 pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#E4B801] rounded flex items-center justify-center text-[#010101] font-black text-xl shrink-0">
                RS
              </div>
              <span className="font-bold text-xl text-white tracking-tight leading-tight">
                REFRIGERAÇÃO <br/> E MANUTENÇÃO
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Assistência técnica especializada em manutenção de geladeiras e máquinas de lavar, oferecendo atendimento ágil e confiável em <strong className="text-[#E4B801]">São José dos Campos e região</strong>.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4B801] hover:text-[#010101] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E4B801] hover:text-[#010101] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-[#E4B801] shrink-0 mt-1" size={18} />
                <span className="text-sm">(12) 99724-6530</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#E4B801] shrink-0 mt-1" size={18} />
                <span className="text-sm">rafapequeno01@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#E4B801] shrink-0 mt-1" size={18} />
                <span className="text-sm"><strong className="text-[#E4B801]">São José dos Campos e Região</strong></span>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-3">
              {/* Replaced 'class' with 'className' for anchor tags */}
              <li><a href="#home" className="text-sm hover:text-[#E4B801] transition-colors">Início</a></li>
              <li><a href="#services" className="text-sm hover:text-[#E4B801] transition-colors">Serviços</a></li>
              <li><a href="#features" className="text-sm hover:text-[#E4B801] transition-colors">Diferenciais</a></li>
              <li><a href="#gallery" className="text-sm hover:text-[#E4B801] transition-colors">Galeria</a></li>
              <li><a href="#faq" className="text-sm hover:text-[#E4B801] transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Solicite Agora</h4>
            <p className="text-sm text-gray-400">
              Sua máquina parou? Não perca tempo, chame a RS no WhatsApp.
            </p>
            <Button variant="primary" className="w-full" href="https://w.app/lyijgl">
              CHAMAR TÉCNICO
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} RS Refrigeração e Manutenção. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
              {/* Replaced 'class' with 'className' for span tags */}
              <span className="text-gray-700 text-xs">Política de Privacidade</span>
              <span className="text-gray-700 text-xs">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
