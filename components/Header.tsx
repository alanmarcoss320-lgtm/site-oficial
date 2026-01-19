
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Diferenciais', href: '#features' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#010101]/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#E4B801] rounded flex items-center justify-center text-[#010101] font-black text-xl shrink-0">
            RS
          </div>
          <span className={`font-bold text-lg md:text-xl tracking-tight leading-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            REFRIGERAÇÃO <br className="md:hidden" /> E MANUTENÇÃO
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-white hover:text-[#E4B801] font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button 
             variant="primary" 
             href="https://w.app/lyijgl" 
             className="!py-2 !px-4 text-sm flex items-center gap-2"
          >
            <Phone size={16} />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#010101] border-t border-gray-800 absolute w-full">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-white hover:text-[#E4B801] font-medium py-2 block text-center uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <Button 
             variant="primary" 
             href="https://w.app/lyijgl" 
             className="w-full flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Fale no WhatsApp
          </Button>
          </div>
        </div>
      )}
    </header>
  );
};