import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

export default function ContainerLayout({ children }) {
  return (
    <>
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        {children}
      </Container>
    </>
  );
}
