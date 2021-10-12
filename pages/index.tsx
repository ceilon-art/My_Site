import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Container, Hello, Section, SocialMedia } from '../styles/indexStyles';
import WhatsApp from '../components/WhatsApp'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hello>
          <img src="/Logo.png" alt="" />
          <h1>Transformando suas ideias em realidade!</h1>
        </Hello>
        <Section>
          <p>
            Nos destacamos por sermos uma equipe de profissionais 
            dedicados e altamente qualificados, que se esforçam 
            para atender às suas necessidades em todo o cenário digital,
            oferecendo serviços especializados por meio de uma ampla 
            gama de serviços.
          </p>
          <SocialMedia>
            <a
                href="https://www.instagram.com/kanaan_solutions/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram size={56} />
                <p>@kanaan_solutions</p>
            </a>

            <a
                href="https://github.com/kanaan-solutions"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={56} />
                <p>kanaan-solutions</p>
            </a>
          </SocialMedia>
        </Section>
      </Container>
      <WhatsApp />
    </>
  );
};

export default Home;