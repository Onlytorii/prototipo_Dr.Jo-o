import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando componentes
import Login from './page/Auth/Login.jsx'; 
import Sidebar from './components/Layout/SideBar.jsx';
import Welcome from './page/Auth/Welcome.jsx';
import Dashboard from './page/Auth/Dashboard.jsx';
import PaginaProcessos from './page/Auth/GestaoDeProcesso.jsx';
import PaginaPrazos from './page/Auth/Prazos.jsx';
import PaginaCRM from './page/Auth/Crm.jsx';
import Agenda from './page/Auth/Agenda.jsx';
import Financeiro from './page/Auth/Financeiro.jsx';

// Layout Ajustado para Responsividade
const InternalLayout = ({ children }) => (
  <div 
    className="d-flex flex-column flex-md-row" // No mobile empilha (column), no PC fica lado a lado (row)
    style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#120A07' }}
  >
    <Sidebar /> 
    
    {/* O "main" agora precisa de um ajuste para não ficar por baixo do botão do menu no mobile */}
    <main 
      className="flex-grow-1" 
      style={{ 
        overflowY: 'auto', 
        backgroundColor: '#120A07',
        paddingTop: '60px', // Espaço para o botão do menu no mobile
      }}
    >
      {/* Container para dar um respiro nas laterais em telas menores */}
      <div className="container-fluid p-3 p-md-4">
        {children}
      </div>
    </main>
    
    <style>{`
      @media (min-width: 768px) {
        main { padding-top: 0 !important; }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/welcome" element={
          <InternalLayout>
            <Welcome />
          </InternalLayout>
        } />

        <Route path="/dashboard" element={<InternalLayout><Dashboard /></InternalLayout>} />
        <Route path="/processos" element={<InternalLayout><PaginaProcessos /></InternalLayout>} />
        <Route path="/prazos" element={<InternalLayout><PaginaPrazos /></InternalLayout>} />
        <Route path="/crm" element={<InternalLayout><PaginaCRM /></InternalLayout>} />
        <Route path="/agenda" element={<InternalLayout><Agenda /></InternalLayout>} />
        <Route path="/financeiro" element={<InternalLayout><Financeiro /></InternalLayout>} />
      </Routes>
    </Router>
  );
}

export default App;