import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Scale } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100" 
         style={{ backgroundColor: '#1A0F0A' }}> {/* Fundo Mogno Profundo */}
      
      <Card className="p-4 border-0 shadow-lg" 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '2px', 
              backgroundColor: '#2D1B14', // Card levemente mais claro
              border: '1px solid #3D2B23' 
            }}>
        <Card.Body className="text-center">
          <div className="mb-3" style={{ color: '#8C6A44' }}>
            <Scale size={48} strokeWidth={1.5} />
          </div>
          <h2 className="fw-bold mb-1" style={{ color: '#D1C7BD', fontFamily: 'serif', letterSpacing: '2px' }}>
            JURÍDICO PRO
          </h2>
          <div style={{ height: '1px', backgroundColor: '#8C6A44', width: '50px', margin: '15px auto' }}></div>
          
          <Form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="small fw-bold" style={{ color: '#8C6A44' }}>CREDENCIAIS</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="E-mail" 
                style={{ backgroundColor: '#1A0F0A', borderColor: '#3D2B23', color: '#D1C7BD' }} 
                required 
              />
            </Form.Group>
            
            <Form.Group className="mb-4 text-start">
              <Form.Control 
                type="password" 
                placeholder="Senha" 
                style={{ backgroundColor: '#1A0F0A', borderColor: '#3D2B23', color: '#D1C7BD' }} 
                required 
              />
            </Form.Group>
            
            <Button type="submit" className="w-100 py-2 fw-bold" 
                    style={{ backgroundColor: '#8C6A44', border: 'none', color: '#1A0F0A', borderRadius: '0' }}>
              ENTRAR NO SISTEMA
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;