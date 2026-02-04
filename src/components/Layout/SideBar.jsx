import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Gavel, 
  Clock, 
  Users, 
  Calendar, 
  DollarSign, 
  LogOut,
  ChevronRight,
  Globe,        // Adicionado para o site
  ExternalLink  // Adicionado para o PJE
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const colors = {
    sidebar: '#1C120E', // Nogueira
    bg: '#120A07',      // Mogno
    accent: '#8C6A44',   // Bronze
    text: '#D1C7BD',     // Marfim
    border: '#3D2B23'    // Marrom Terra
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/processos', label: 'Gestão de Processos', icon: <Gavel size={20} /> },
    { path: '/prazos', label: 'Controle de Prazos', icon: <Clock size={20} /> },
    { path: '/crm', label: 'CRM Jurídico', icon: <Users size={20} /> },
    { path: '/agenda', label: 'Agenda Jurídica', icon: <Calendar size={20} /> },
    { path: '/financeiro', label: 'Honorários', icon: <DollarSign size={20} /> },
  ];

  // Novos links externos
  const externalLinks = [
    { url: 'https://www.pje.jus.br/navegador/', label: 'Acessar PJE', icon: <ExternalLink size={20} /> },
    { url: 'https://www.processoagil.com.br/', label: 'Processo Agil', icon: <Globe size={20} /> },
  ];

  return (
    <div className="d-flex flex-column vh-100 shadow-lg" 
          style={{ width: '280px', backgroundColor: colors.sidebar, borderRight: `1px solid ${colors.border}` }}>
      
      {/* Branding / Logo */}
      <div className="p-4 mb-4 text-center border-bottom" style={{ borderColor: colors.border }}>
        <h4 className="font-serif fw-bold m-0" style={{ color: colors.text, letterSpacing: '2px' }}>
          DrJoão <span style={{ color: colors.accent }}> & Associados</span>
        </h4>
        <small className="text-uppercase opacity-50" style={{ fontSize: '9px', letterSpacing: '3px' }}>
          Intelligence System
        </small>
      </div>

      {/* Navegação */}
      <nav className="flex-grow-1 px-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className="d-flex align-items-center justify-content-between p-3 mb-2 text-decoration-none transition-all"
              style={{ 
                backgroundColor: isActive ? colors.bg : 'transparent',
                borderLeft: isActive ? `4px solid ${colors.accent}` : '4px solid transparent',
                color: isActive ? colors.accent : colors.text,
              }}
            >
              <div className="d-flex align-items-center gap-3">
                {item.icon}
                <span className="text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  {item.label}
                </span>
              </div>
              {isActive && <ChevronRight size={14} />}
            </Link>
          );
        })}

        {/* Links Externos adicionados mantendo o padrão */}
        {externalLinks.map((link) => (
          <a 
            key={link.url} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 mb-2 text-decoration-none transition-all"
            style={{ 
              color: colors.text,
              borderLeft: '4px solid transparent'
            }}
          >
            {link.icon}
            <span className="text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Rodapé / Usuário */}
      <div className="p-4 border-top mt-auto" style={{ borderColor: colors.border }}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: colors.bg, border: `1px solid ${colors.accent}` }}>
             {/* Foto ou Iniciais */}
             <div className="h-100 d-flex align-items-center justify-content-center fw-bold" style={{ color: colors.accent }}>JS</div>
          </div>
          <div>
            <div className="small fw-bold text-uppercase" style={{ fontSize: '10px', color: colors.text }}>Dr. João</div>
            <div className="opacity-50" style={{ fontSize: '9px', color: colors.text }}>OAB/SP 123.456</div>
          </div>
        </div>
        
        <Link to="/" className="btn w-100 d-flex align-items-center justify-content-center gap-2 rounded-0 fw-bold border-0" 
                style={{ backgroundColor: colors.bg, color: '#9e2a2b', fontSize: '11px' }}>
          <LogOut size={16} /> SAIR DO SISTEMA
        </Link>
      </div>

      {/* CSS Hover Effect */}
      <style>{`
        nav a:hover {
          background-color: ${colors.bg} !important;
          color: ${colors.accent} !important;
          padding-left: 2rem !important;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;