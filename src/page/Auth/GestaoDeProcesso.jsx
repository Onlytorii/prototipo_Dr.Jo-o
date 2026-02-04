import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Gavel, Users, Plus, ShieldCheck, Scale, Trash2 } from 'lucide-react';

const PaginaProcessos = () => {
  const [equipe, setEquipe] = useState(["Dr. João Silva (OAB/SP 123.456)"]);
  const [partes, setPartes] = useState(["Empresa Alfa LTDA", "Sócio Diretor Beta"]);

  const colors = {
    bg: '#120A07',
    section: '#1C120E',
    accent: '#8C6A44',
    text: '#D1C7BD',
    border: '#3D2B23',
    inputBg: '#0D0705'
  };

  const addMembro = () => {
    const nome = prompt("Nome e OAB do Advogado:");
    if (nome) setEquipe([...equipe, nome]);
  };

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row className="g-4">
            
            {/* COLUNA PRINCIPAL: DADOS DO PROCESSO */}
            <Col lg={8}>
              <div className="p-4 shadow-lg mb-4" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
                <div className="d-flex align-items-center mb-4 border-bottom pb-3" style={{ borderColor: colors.border }}>
                  <Gavel size={24} className="me-3" style={{ color: colors.accent }} />
                  <h3 className="font-serif text-uppercase mb-0 tracking-wider" style={{ fontSize: '1.2rem' }}>Informações do Auto</h3>
                </div>

                <Row className="g-3">
                  <Col md={12}>
                    <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px', color: colors.accent }}>Número do Processo (CNJ)</Form.Label>
                    <Form.Control placeholder="0000000-00.0000.0.00.0000" style={{ backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.text, borderRadius: '0', fontSize: '1.1rem' }} />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px', color: colors.accent }}>Tribunal / Comarca</Form.Label>
                    <Form.Select style={{ backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.text, borderRadius: '0' }}>
                      <option>TJSP - Tribunal de Justiça de SP</option>
                      <option>TRF3 - Federal</option>
                      <option>TST - Trabalho</option>
                    </Form.Select>
                  </Col>
                  <Col md={6}>
                    <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px', color: colors.accent }}>Classe Processual</Form.Label>
                    <Form.Control placeholder="Ex: Procedimento Comum" style={{ backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.text, borderRadius: '0' }} />
                  </Col>
                  <Col md={12}>
                    <Form.Label className="text-uppercase small fw-bold opacity-50" style={{ fontSize: '10px', color: colors.accent }}>Objeto da Ação / Resumo</Form.Label>
                    <Form.Control as="textarea" rows={3} style={{ backgroundColor: colors.inputBg, borderColor: colors.border, color: colors.text, borderRadius: '0' }} />
                  </Col>
                </Row>
              </div>

              {/* LISTA DE PARTES (CLIENTES/ADVERSÁRIOS) */}
              <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="text-uppercase fw-bold mb-0" style={{ fontSize: '11px', color: colors.accent }}>Partes Envolvidas</h6>
                  <Button size="sm" variant="link" onClick={() => setPartes([...partes, "Nova Parte"])} style={{ color: colors.accent }}>
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="space-y-2">
                  {partes.map((p, i) => (
                    <div key={i} className="d-flex justify-content-between align-items-center p-3 mb-2" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
                      <span className="small text-uppercase fw-bold">{p}</span>
                      <Trash2 size={14} className="opacity-25" style={{ cursor: 'pointer' }} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* COLUNA LATERAL: EQUIPE E STATUS */}
            <Col lg={4}>
              <div className="p-4 shadow-lg mb-4" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2" style={{ borderColor: colors.border }}>
                  <h6 className="text-uppercase fw-bold mb-0" style={{ fontSize: '11px', color: colors.accent }}>Equipe Responsável</h6>
                  <Button size="sm" onClick={addMembro} style={{ backgroundColor: colors.accent, border: 'none', borderRadius: '0' }}>
                    <Plus size={14} color={colors.bg} />
                  </Button>
                </div>
                {equipe.map((adv, i) => (
                  <div key={i} className="p-3 mb-2 small fw-bold text-uppercase d-flex justify-content-between" style={{ backgroundColor: colors.bg, borderLeft: `3px solid ${colors.accent}` }}>
                    {adv}
                  </div>
                ))}
              </div>

              <div className="p-4 shadow-lg" style={{ backgroundColor: colors.section, border: `2px solid ${colors.accent}` }}>
                <div className="text-center mb-4">
                  <ShieldCheck size={40} className="mb-2" style={{ color: colors.accent }} />
                  <p className="text-uppercase fw-black small mb-0" style={{ letterSpacing: '2px' }}>Ações de Protocolo</p>
                </div>
                <Button className="w-100 py-3 mb-2 fw-bold border-0" style={{ backgroundColor: colors.accent, color: colors.bg, borderRadius: '0' }}>
                  PROTOCOLAR AGORA
                </Button>
                <Button className="w-100 py-2 fw-bold bg-transparent border-secondary" style={{ color: colors.text, borderRadius: '0', fontSize: '10px' }}>
                  GERAR CAPA DO PROCESSO
                </Button>
              </div>
            </Col>

          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default PaginaProcessos;