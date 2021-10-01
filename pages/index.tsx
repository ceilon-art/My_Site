import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, Hello, Section, SocialMedia } from '../styles/indexStyles';
import WhatsApp from '../components/WhatsApp'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hello>
          <img src="/foto_perfil.jpeg" alt="" />
          <h1>Transformando suas ideias em realidade!</h1>
        </Hello>
        <Section>
          <p>
            Nos destacamos por ser uma equipe de profissionais 
            dedicados e altamente qualificados, que se esforçam 
            para atender às suas necessidades em todo o cenário digital,
            oferecendo serviços especializados por meio de uma ampla 
            gama de serviços.
          </p>
          <SocialMedia>
            <a
                href="https://app.bossabox.com/u/andre-nagano"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="bossabox.jpeg" />
                <p>André Nagano</p>
            </a>

            <a
                href="https://www.workana.com/freelancer/b58fdc5ad8638ed1a3a3e84d617022d4?ref=user_dropdown"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/workana.png" />
                <p>André Luiz</p>
            </a>
            <a
                href="https://github.com/ceilon-art"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={36} />
                <p>ceilon-art</p>
            </a>
          </SocialMedia>
        </Section>
      </Container>
      <WhatsApp />
    </>
  );
};

export default Home;