import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvaider } from './contexts/DarkModeContext.tsx';
import { AuthProvider } from './contexts/Authcontext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
     <AuthProvider>
      <DarkModeProvaider>
        <App />
      </DarkModeProvaider>
     </AuthProvider>
  </BrowserRouter>
);
