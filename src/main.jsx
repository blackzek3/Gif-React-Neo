import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
);

