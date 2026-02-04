import React from 'react';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
import { Briefcase, Clock, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const colors = {
    bg: '#120A07',      // Marrom Mogno quase preto
    section: '#1C120E',  // Nogueira Escura
    accent: '#8C6A44',   // Bronze / Ouro Velho
    text: '#D1C7BD',     // Marfim Suave
    border: '#3D2B23',   // Marrom terra para linhas
    statusNeutral: '#A19D94' // Platina para substituição do verde
  };

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        
        {/* Cabeçalho - Ajustado para não ter azul */}
        <div className="mb-5 p-4" style={{ backgroundColor: colors.section, borderLeft: `5px solid ${colors.accent}`, borderRadius: '2px' }}>
          <h2 className="fw-bold m-0" style={{ color: colors.text, fontFamily: 'serif', letterSpacing: '1px' }}>
            Dr. João Augusto
          </h2>
          <p className="m-0 mt-1 small text-uppercase" style={{ color: colors.accent, letterSpacing: '2px', fontWeight: 'bold' }}>
            Painel de Controle Jurídico
          </p>
        </div>

        {/* Cards de Métricas */}
        <Row className="mb-4 g-3">
          {[
            { title: 'Prazos Críticos', val: '03', icon: <AlertTriangle size={26} />, color: '#5C1A14' },
            { title: 'Audiências', val: '08', icon: <Clock size={26} />, color: colors.accent },
            { title: 'Processos Ativos', val: '142', icon: <Briefcase size={26} />, color: colors.accent },
          ].map((item, idx) => (
            <Col md={4} key={idx}>
              <div style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}`, padding: '25px', borderRadius: '2px' }} className="shadow-lg">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="small text-uppercase mb-2" style={{ color: colors.accent, letterSpacing: '1px' }}>{item.title}</h6>
                    <h2 className="fw-bold m-0" style={{ fontSize: '2.5rem' }}>{item.val}</h2>
                  </div>
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Tabela de Movimentações - Sem fundos azuis e com cores sóbrias */}
        <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
          <h5 className="fw-bold mb-4" style={{ color: colors.accent, fontFamily: 'serif', letterSpacing: '1px' }}>
            MOVIMENTAÇÕES RECENTES
          </h5>
          <Table responsive variant="dark" className="m-0" style={{ backgroundColor: 'transparent' }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.accent}`, color: colors.accent }}>
                <th className="bg-transparent border-0 pb-3 small fw-bold">PROCESSO</th>
                <th className="bg-transparent border-0 pb-3 small fw-bold">CLIENTE</th>
                <th className="bg-transparent border-0 pb-3 small fw-bold">DATA</th>
                <th className="bg-transparent border-0 pb-3 small fw-bold">STATUS</th>
              </tr>
            </thead>
            <tbody className="border-0">
  {[
    { id: '0812345-67.2023.8.20', cliente: 'Maria Silva', data: 'Há 2 horas', status: 'Processado', color: colors.statusNeutral },
    { id: '0009876-54.2022.8.20', cliente: 'Empresa XPTO', data: 'Ontem', status: 'Pendente', color: colors.accent }
  ].map((row, i) => (
    <tr key={i} style={{ borderBottom: `1px solid ${colors.bg}`, backgroundColor: 'transparent' }}>
      <td className="bg-transparent border-0 py-3" style={{ color: colors.text, opacity: 0.7 }}>{row.id}</td>
      <td className="bg-transparent border-0 py-3" style={{ color: colors.text }}>{row.cliente}</td>
      <td className="bg-transparent border-0 py-3 small" style={{ color: colors.accent, opacity: 0.6 }}>{row.data}</td>
      <td className="bg-transparent border-0 py-3">
        {/* Badge com !important para aniquilar o azul interno */}
        <span style={{ 
          backgroundColor: 'transparent', 
          border: `1px solid ${row.color}`, 
          color: row.color,
          borderRadius: '0',
          fontWeight: '400',
          padding: '4px 8px',
          fontSize: '10px',
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {row.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>  
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;