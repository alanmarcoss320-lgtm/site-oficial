

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ'; // Importando o componente FAQ
import { Footer } from './components/Footer';
import { AppProps } from './types'; // Importar o tipo AppProps

function App({ appConfig }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero heroBackgroundImageUrl={appConfig.heroBackgroundImageUrl} />
        <Services />
        <Features />
        <Gallery galleryImages={appConfig.galleryImages} />
        <SocialProof />
        <FAQ /> {/* Adicionando o componente FAQ */}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button (Sticky for mobile) */}
      <a 
        href="https://w.app/lyijgl"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebc57] transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  );
}

export default App;