import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ESTA LINHA É O SEGREDO DO VISUAL:
import 'bootstrap/dist/css/bootstrap.min.css' 

import './index.css' // Certifique-se de que este arquivo está vazio para não dar conflito
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)