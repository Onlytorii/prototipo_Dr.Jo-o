import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { DollarSign } from 'lucide-react';

const Financeiro = () => {
  const [modalidade, setModalidade] = useState('exitum');
  const [valorBase, setValorBase] = useState(0);
  const [porcentagemExito, setPorcentagemExito] = useState(20);

  const colors = {
    bg: '#120A07',
    section: '#1C120E',
    accent: '#8C6A44',
    text: '#D1C7BD',
    border: '#3D2B23'
  };

  const totalBruto = modalidade === 'exitum' 
    ? (Number(valorBase) * (Number(porcentagemExito) / 100)) 
    : Number(valorBase);

  return (
    <div className="p-4 w-100" style={{ backgroundColor: colors.bg, minHeight: '100vh', color: colors.text }}>
      <Container fluid>
        <h2 className="fw-bold mb-4 font-serif uppercase tracking-wider" style={{ color: colors.accent }}>
          <DollarSign className="me-2" /> Engenharia de Honorários
        </h2>

        <Row className="g-4">
          <Col lg={8}>
            <div className="p-4" style={{ backgroundColor: colors.section, border: `1px solid ${colors.border}` }}>
              {/* Toggle de Modalidade */}
              <div className="d-flex mb-4 p-1" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
                <Button 
                  onClick={() => setModalidade('mensalista')}
                  className={`flex-fill border-0 rounded-0 py-2 fw-bold small ${modalidade === 'mensalista' ? '' : 'bg-transparent text-muted'}`}
                  style={modalidade === 'mensalista' ? { backgroundColor: colors.accent, color: colors.bg } : {}}
                >
                  PARTIDO (MENSAL)
                </Button>
                <Button 
                  onClick={() => setModalidade('exitum')}
                  className={`flex-fill border-0 rounded-0 py-2 fw-bold small ${modalidade === 'exitum' ? '' : 'bg-transparent text-muted'}`}
                  style={modalidade === 'exitum' ? { backgroundColor: colors.accent, color: colors.bg } : {}}
                >
                  AD EXITUM / ÊXITO
                </Button>
              </div>

              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold opacity-50 uppercase tracking-widest">Valor de Referência</Form.Label>
                  <Form.Control 
                    type="number" 
                    onChange={(e) => setValorBase(e.target.value)}
                    style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text, fontSize: '1.5rem' }} 
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col lg={4}>
            <div className="p-4 text-center sticky-top" style={{ backgroundColor: colors.section, border: `2px solid ${colors.accent}` }}>
              <span className="small fw-bold text-uppercase opacity-50">Honorário Estimado</span>
              <h1 className="display-6 fw-bold my-3" style={{ color: colors.text }}>
                R$ {totalBruto.toLocaleString('pt-BR')}
              </h1>
              <Button className="w-100 py-3 fw-bold border-0 rounded-0" style={{ backgroundColor: colors.accent, color: colors.bg }}>
                LANÇAR NO FLUXO
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Financeiro;