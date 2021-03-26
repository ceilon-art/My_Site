import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, Hello, Section, SocialMedia } from '../styles/indexStyles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hello>
          <img src="/foto_perfil.jpeg" alt="" />
          <h1>Olá!</h1>
        </Hello>
        <Section>
          <p>
          Meu nome é André Luiz , sou Desenvolvedor Fullstack com foco nas
          tecnologias: React JS, NextJs, Laravel, Django e Node JS
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
    </>
  );
};

export default Home;