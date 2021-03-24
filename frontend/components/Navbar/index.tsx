import React from 'react';

import { Background, Container } from './styles';

function Navbar() {
  return (
    <Background>
      <Container>
        <h1>André Luiz</h1>
        <ul>
          <li>Portfolio</li>
          <li>Contato</li>
        </ul>
      </Container>
    </Background>
  );
};

export default Navbar;
