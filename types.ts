

import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Brand {
  name: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface AppConfig {
  heroBackgroundImageUrl: string;
  galleryImages: GalleryImage[];
}

// Props para o componente App
export interface AppProps {
  appConfig: AppConfig;
}

// Props para o componente Hero
export interface HeroProps {
  heroBackgroundImageUrl: string;
}

// Props para o componente Gallery
export interface GalleryProps {
  galleryImages: GalleryImage[];
}