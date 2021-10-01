import { ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa'

import { Container } from './styles';

function WhatsApp() {
  return (
    <Container href="https://wa.me/5511981733274?&text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento!">
      <FaWhatsapp color="green" size={66} />
    </Container>
  );
};

export default WhatsApp;
