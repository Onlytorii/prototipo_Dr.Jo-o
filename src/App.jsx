import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando componentes
import Login from './page/Auth/Login.jsx'; 
import Sidebar from './components/Layout/SideBar.jsx';
import Welcome from './page/Auth/Welcome.jsx'; // Certifique-se de ter este arquivo
import Dashboard from './page/Auth/Dashboard.jsx';
import PaginaProcessos from './page/Auth/GestaoDeProcesso.jsx';
import PaginaPrazos from './page/Auth/Prazos.jsx';
import PaginaCRM from './page/Auth/Crm.jsx';
import Agenda from './page/Auth/Agenda.jsx';
import Financeiro from './page/Auth/Financeiro.jsx';

// Layout que organiza a Sidebar ao lado do conteúdo
const InternalLayout = ({ children }) => (
  <div className="d-flex" style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#120A07' }}>
    <Sidebar /> 
    <main className="flex-grow-1" style={{ overflowY: 'auto', backgroundColor: '#120A07' }}>
      {children}
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Tela inicial de Login */}
        <Route path="/" element={<Login />} />

        {/* Página de Boas-Vindas após o Login */}
        <Route path="/welcome" element={
          <InternalLayout>
            <Welcome />
          </InternalLayout>
        } />

        {/* Dashboard e Atribuições da Sidebar */}
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
