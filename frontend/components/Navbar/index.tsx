import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Background, Container } from './styles';

function Navbar() {
  return (
    <Background>
      <Container>
        <h1>André Luiz</h1>
        <ul>
          <FiSun size={28} color="#D4AE8B" />
          <li>Cursos</li>
          <li>Portfolio</li>
          <li>Contato</li>
        </ul>
      </Container>
    </Background>
  );
};

export default Navbar;
