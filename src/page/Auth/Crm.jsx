import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { Users, History, Plus, ChevronRight, Phone, Mail } from 'lucide-react';

const PaginaCRM = () => {
  const [tipoPessoa, setTipoPessoa] = useState('PJ');
  
  const colors = {
    bg: '#120A07',      // Mogno de fundo
    section: '#1C120E',  // Nogueira dos cards
    accent: '#8C6A44',   // Bronze dos detalhes
    text: '#D1C7BD',     // Marfim do texto
    border: '#3D2B23'    // Marrom das divisórias
  };

  const historico = [
    { data: "10/01/2026", evento: "Reunião de Alinhamento", desc: "Apresentação de parecer sobre recurso extraordinário.", autor: "Dr. João Silva" },
    { data: "05/01/2026", evento: "Envio de Documentação", desc: "Cliente enviou contratos sociais e procurações assinadas.", autor: "Secretaria" }
  ];

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        <Row className="g-4">
          
          {/* COLUNA ESQUERDA: FICHA DO CLIENTE */}
          <Col lg={5}>
            <div className="p-4 shadow-lg h-100" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3" style={{ borderColor: colors.border }}>
                <h3 className="font-serif text-uppercase mb-0 tracking-wider" style={{ color: colors.text, fontSize: '1.2rem' }}>
                  <Users size={22} className="me-2 text-bronze" style={{ color: colors.accent }} /> Ficha do Cliente
                </h3>
                
                <div className="d-flex bg-green p-1" style={{ border: `1px solid ${colors.border}` }}>
                  {['PF', 'PJ'].map(t => (
                    <Button 
                      key={t}
                      size="sm"
                      onClick={() => setTipoPessoa(t)}
                      className={`border-0 rounded-0 px-3 fw-bold ${tipoPessoa === t ? '' : 'bg-transparent text-muted'}`}
                      style={tipoPessoa === t ? { backgroundColor: colors.accent, color: colors.bg } : { fontSize: '10px' }}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>

              <Form className="row g-3">
                <Col md={12}>
                  <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px' }}>Nome / Razão Social</Form.Label>
                  <Form.Control style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }} />
                </Col>
                <Col md={6}>
                  <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px' }}>CPF/CNPJ</Form.Label>
                  <Form.Control style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }} />
                </Col>
                <Col md={6}>
                  <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px' }}>Telefone</Form.Label>
                  <Form.Control placeholder="(00) 00000-0000" style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }} />
                </Col>
                <Col md={12}>
                  <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px' }}>E-mail Jurídico</Form.Label>
                  <Form.Control style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }} />
                </Col>
                <Col md={12} className="mt-4">
                  <Button className="w-100 py-3 fw-bold rounded-0 border-0" style={{ backgroundColor: colors.accent, color: colors.bg, letterSpacing: '2px' }}>
                    ATUALIZAR CADASTRO
                  </Button>
                </Col>
              </Form>
            </div>
          </Col>

          {/* COLUNA DIREITA: TIMELINE DE EVENTOS */}
          <Col lg={7}>
            <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <h3 className="font-serif text-uppercase mb-0 tracking-wider" style={{ color: colors.text, fontSize: '1.2rem' }}>
                  <History size={22} className="me-2" style={{ color: colors.accent }} /> Linha do Tempo
                </h3>
                <Button variant="outline-secondary" size="sm" className="rounded-0 text-uppercase fw-bold" style={{ fontSize: '10px', borderColor: colors.border, color: colors.accent }}>
                  + Novo Registro
                </Button>
              </div>

              {/* TIMELINE CUSTOMIZADA */}
              <div className="position-relative ps-4" style={{ borderLeft: `2px solid ${colors.border}` }}>
                {historico.map((h, i) => (
                  <div key={i} className="mb-5 position-relative">
                    {/* O Ponto da Timeline */}
                    <div 
                      className="position-absolute" 
                      style={{ 
                        left: '-33px', 
                        top: '5px', 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: colors.accent, 
                        borderRadius: '50%',
                        border: `3px solid ${colors.section}` 
                      }} 
                    />
                    
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-uppercase fw-bold" style={{ fontSize: '10px', color: colors.accent }}>{h.data}</span>
                      <span className="text-uppercase fw-bold opacity-50" style={{ fontSize: '9px' }}>{h.autor}</span>
                    </div>
                    <h6 className="text-uppercase fw-bold mb-2" style={{ letterSpacing: '1px' }}>{h.evento}</h6>
                    <p className="small opacity-75 mb-0" style={{ lineHeight: '1.6' }}>{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default PaginaCRM;