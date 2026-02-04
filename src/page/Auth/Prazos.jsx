import React from 'react';
import { Container, Row, Col, Badge, Button, ProgressBar } from 'react-bootstrap';
import { AlertCircle, Clock, CheckCircle2, Calendar } from 'lucide-react';

const PaginaPrazos = () => {
  const colors = {
    bg: '#120A07',
    section: '#1C120E',
    accent: '#8C6A44',
    text: '#D1C7BD',
    border: '#3D2B23',
    danger: '#5C1A14', // Vinho para prazos fatais
    success: '#6B8E23'  // Oliva para concluídos
  };

  const prazos = [
    { id: 1, cnj: "0812345-67.2023.8.20", tarefa: "Réplica à Contestação", data: "15/02", dias: 2, status: 'urgente' },
    { id: 2, cnj: "0009876-54.2022.8.20", tarefa: "Recurso Especial", data: "20/02", dias: 7, status: 'alerta' },
    { id: 3, cnj: "0771234-99.2023.8.20", tarefa: "Manifestação de Laudo", data: "12/02", dias: 0, status: 'concluido' }
  ];

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        <Row className="g-4">
          
          {/* LISTA DE PRAZOS FATAIS */}
          <Col lg={8}>
            <div className="p-4 shadow-lg mb-4" style={{ backgroundColor: colors.section, borderTop: `4px solid ${colors.danger}`, borderLeft: `1px solid ${colors.border}`, borderRight: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="font-serif text-uppercase mb-0 tracking-widest" style={{ fontSize: '1.2rem' }}>
                  <AlertCircle size={22} className="me-2" style={{ color: colors.danger }} /> Prazos Fatais
                </h3>
                <span className="small fw-bold opacity-50 text-uppercase" style={{ fontSize: '10px' }}>Fevereiro 2026</span>
              </div>

              <div className="space-y-3">
                {prazos.map((item) => (
                  <div key={item.id} className="p-3 mb-3 d-flex align-items-center justify-content-between transition-all" 
                       style={{ 
                         backgroundColor: colors.bg, 
                         border: `1px solid ${item.status === 'concluido' ? colors.success : colors.border}`,
                         borderLeft: `4px solid ${item.status === 'urgente' ? colors.danger : (item.status === 'concluido' ? colors.success : colors.accent)}`
                       }}>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span style={{ fontSize: '10px', color: colors.accent }} className="fw-bold font-monospace">{item.cnj}</span>
                        {item.status === 'concluido' && <Badge style={{ backgroundColor: 'transparent', border: `1px solid ${colors.success}`, color: colors.success, fontSize: '8px' }}>CONCLUÍDO</Badge>}
                      </div>
                      <h6 className="mb-0 text-uppercase fw-bold" style={{ letterSpacing: '0.5px', color: item.status === 'concluido' ? '#444' : colors.text }}>{item.tarefa}</h6>
                    </div>

                    <div className="text-end" style={{ minWidth: '120px' }}>
                      <div className="small fw-bold text-uppercase" style={{ fontSize: '9px', color: colors.accent }}>Vencimento</div>
                      <div className="fw-bold" style={{ color: item.status === 'urgente' ? colors.danger : colors.text }}>
                        <Calendar size={14} className="me-1" /> {item.data}
                        <span className="ms-2 opacity-50" style={{ fontSize: '11px' }}>({item.dias}d)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* COLUNA LATERAL: MÉTRICAS DE PRODUTIVIDADE */}
          <Col lg={4}>
            <div className="p-4 shadow-lg mb-4 text-center" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: '10px', color: colors.accent, letterSpacing: '2px' }}>Eficiência Semanal</h6>
              <div className="position-relative d-inline-block mb-3">
                <h2 className="fw-bold mb-0">85%</h2>
                <span className="small opacity-50 text-uppercase" style={{ fontSize: '8px' }}>Prazos Cumpridos</span>
              </div>
              <div className="px-4">
                <div style={{ height: '4px', backgroundColor: colors.bg, width: '100%' }}>
                   <div style={{ height: '100%', backgroundColor: colors.accent, width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '10px', color: colors.accent }}>Configurações de Alerta</h6>
              <div className="small opacity-75 mb-4" style={{ fontSize: '11px' }}>Notificações enviadas para Dr. João e Secretaria.</div>
              
              <Button className="w-100 py-3 fw-bold rounded-0 mb-2 border-0" style={{ backgroundColor: colors.accent, color: colors.bg, fontSize: '11px' }}>
                 RELATÓRIO DE PENDÊNCIAS
              </Button>
              <Button variant="outline-dark" className="w-100 py-2 fw-bold rounded-0" style={{ borderColor: colors.border, color: colors.accent, fontSize: '10px' }}>
                 SINCRONIZAR COM TRIBUNAL
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default PaginaPrazos;