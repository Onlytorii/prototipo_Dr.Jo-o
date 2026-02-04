import React from 'react';
import { Container } from 'react-bootstrap';
import { Scale } from 'lucide-react';

const Welcome = () => {
  const colors = {
    bg: '#120A07',
    accent: '#8C6A44',
    text: '#D1C7BD',
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: colors.bg }}>
      <Container className="text-center animate-in fade-in zoom-in duration-1000">
        <Scale size={60} style={{ color: colors.accent }} className="mb-4" />
        <h1 className="font-serif display-4 mb-2" style={{ color: colors.text, letterSpacing: '4px' }}>
          BEM-VINDO, DOUTOR
        </h1>
        <p className="text-uppercase opacity-50 tracking-widest" style={{ color: colors.text, fontSize: '12px' }}>
          Selecione um módulo no menu lateral para iniciar a gestão.
        </p>
        <div className="mt-4 mx-auto" style={{ width: '50px', height: '1px', backgroundColor: colors.accent }}></div>
      </Container>
    </div>
  );
};

export default Welcome;