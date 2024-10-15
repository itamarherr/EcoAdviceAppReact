import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvaider } from './contexts/DarkModeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <DarkModeProvaider>
  <App />
  </DarkModeProvaider>
  </BrowserRouter>
  
)
