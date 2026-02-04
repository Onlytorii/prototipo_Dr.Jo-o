import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { CalendarDays, Clock, Users, Plus, Download } from 'lucide-react';

const Agenda = () => {
  const compromissos = [
    { hora: "09:00", tipo: "Audiência", caso: "Instrução - Proc. 00123", adv: "Dr. João Silva" },
    { hora: "14:30", tipo: "Reunião", caso: "Alinhamento Cliente Alfa", adv: "Dra. Helena" },
    { hora: "16:00", tipo: "Prazo", caso: "Protocolo de Recurso Especial", adv: "Dr. João Silva" }
  ];

  const colors = {
    bg: '#120A07',      // Mogno Profundo
    section: '#1C120E',  // Nogueira
    accent: '#8C6A44',   // Bronze
    text: '#D1C7BD',     // Marfim
    border: '#3D2B23',   // Marrom Terra
    inputBg: '#0D0705'   // Quase preto
  };

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        <Row className="g-4">
          
          {/* PAUTA PRINCIPAL */}
          <Col lg={8}>
            <div className="p-4 shadow-lg h-100" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3" style={{ borderColor: colors.border }}>
                <h4 className="fw-bold m-0 font-serif uppercase tracking-widest" style={{ color: colors.accent, fontSize: '1.2rem' }}>
                  <CalendarDays className="me-2" size={22} /> Pauta Diária
                </h4>
                <Button variant="link" className="text-decoration-none p-0 fw-bold" style={{ color: colors.accent, fontSize: '10px' }}>
                  <Download size={14} className="me-1" /> EXPORTAR PDF
                </Button>
              </div>
              
              <Table responsive variant="dark" className="m-0" style={{ backgroundColor: 'transparent' }}>
                <thead>
                  <tr style={{ color: colors.accent, borderBottom: `2px solid ${colors.accent}` }}>
                    <th className="bg-transparent border-0 small py-3">HORA</th>
                    <th className="bg-transparent border-0 small py-3">NATUREZA</th>
                    <th className="bg-transparent border-0 small py-3">DETALHES</th>
                    <th className="bg-transparent border-0 small py-3">ADVOGADO</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  {compromissos.map((c, i) => (
                    <tr key={i} className="align-middle" style={{ borderBottom: `1px solid ${colors.bg}`, cursor: 'pointer' }}>
                      <td className="bg-transparent border-0 py-4 font-monospace fw-bold" style={{ color: colors.accent }}>
                        <Clock size={14} className="me-2" /> {c.hora}
                      </td>
                      <td className="bg-transparent border-0 py-4">
                        <span className="small fw-bold text-uppercase opacity-75" style={{ fontSize: '10px' }}>{c.tipo}</span>
                      </td>
                      <td className="bg-transparent border-0 py-4">
                        <div className="fw-bold text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>{c.caso}</div>
                      </td>
                      <td className="bg-transparent border-0 py-4">
                        <div className="d-flex align-items-center gap-2 small text-uppercase opacity-50" style={{ fontSize: '10px' }}>
                          <Users size={12} /> {c.adv}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>

          {/* AÇÕES LATERAIS */}
          <Col lg={4}>
            <div className="p-4 shadow-lg mb-4" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '10px', color: colors.accent, letterSpacing: '2px' }}>Ações de Agenda</h6>
              <Button className="w-100 py-3 mb-3 fw-bold border-0 rounded-0" style={{ backgroundColor: colors.accent, color: colors.bg, letterSpacing: '1px' }}>
                <Plus size={16} className="me-2" /> NOVO COMPROMISSO
              </Button>
              <div className="p-3 text-center" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
                <div className="small opacity-50 text-uppercase mb-1" style={{ fontSize: '9px' }}>Total hoje</div>
                <h4 className="fw-bold m-0" style={{ color: colors.accent }}>{compromissos.length} ATOS</h4>
              </div>
            </div>

            <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
               <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '10px', color: colors.accent }}>Filtro de Equipe</h6>
               <select className="w-full w-100 p-2 border-0 text-uppercase fw-bold" style={{ backgroundColor: colors.bg, color: colors.text, fontSize: '11px', outline: 'none' }}>
                  <option>Todos os Profissionais</option>
                  <option>Dr. João Silva</option>
                  <option>Dra. Helena</option>
               </select>
            </div>
          </Col>

        </Row>
      </Container>

      {/* Estilo para hover na tabela sem usar azul */}
      <style>{`
        tbody tr:hover td {
          background-color: #251812 !important;
          transition: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Agenda;