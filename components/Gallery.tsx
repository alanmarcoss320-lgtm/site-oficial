
import React, { useState } from 'react';
import { GalleryProps } from '../types'; // Importar GalleryProps
import { ImageOff } from 'lucide-react'; // Importar ImageOff para o fallback

// Componente para um item da galeria com fallback de imagem
const GalleryItem: React.FC<{ imageUrl: string; caption: string }> = ({ imageUrl, caption }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group relative h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {!imageError && imageUrl ? (
        <img 
          src={imageUrl} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center text-gray-400 text-center p-4">
          <ImageOff size={32} />
          <span className="mt-2 text-sm font-medium">Imagem indisponível</span>
          {caption && <span className="text-xs italic mt-1 break-words max-w-[90%]">{caption}</span>}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-bold text-lg border-l-4 border-[#E4B801] pl-3">
          {caption}
        </span>
      </div>
    </div>
  );
};

export const Gallery: React.FC<GalleryProps> = ({ galleryImages }) => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-[#E4B801] font-bold tracking-widest uppercase text-sm mb-2 block">Nosso Trabalho</span>
                <h2 className="text-4xl font-black text-[#010101]">GALERIA DE PROJETOS</h2>
            </div>
            <div className="hidden md:block">
                 <p className="text-gray-500 font-medium">Veja nossos técnicos em ação</p>
            </div>
        </div>

        {/* Grid ajustado para 3 colunas em telas médias e grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((photo, index) => (
            <GalleryItem key={index} imageUrl={photo.url} caption={photo.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};