
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppConfig } from './types'; // Importar o tipo AppConfig

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Acessar o objeto de configuração global
const appConfig: AppConfig = (window as any).appConfig || {
  heroBackgroundImageUrl: '', // Fallback default
  galleryImages: []
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App appConfig={appConfig} />
  </React.StrictMode>
);