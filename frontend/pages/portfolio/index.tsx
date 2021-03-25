import React from 'react';
import Link from 'next/link';

import { Container, Project, Text } from '../../styles/portfolioStyles';
import Button from '../../components/Button';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>Experiência</p>
      <strong>
        - Graduação:
        <span> Graduando em Engenharia de Redes de Comunicações na UnB</span>
      </strong>
      <strong>
        - Estágio:
        <span>
          {' '}
          6 meses de experiência em desenvolvimento mobile com React Native
        </span>
      </strong>

      <p>Projetos</p>

      <Project>
        <img src="/bossabox.jpeg" alt="BossaBox" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Estou disponível como freelancer na plataforma Bossabox.
            </span>
          </strong>

          <Button link="https://app.bossabox.com/u/daniel-bergholz">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/foto_perfil.jpeg" alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend, Designer</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              bergdaniel.com.br é o site que você está acessando. Eu o criei do
              completo zero, desde a concepção da arquitetura e navegação de
              páginas no whimsical e o design no Figma até o desenvolvimento com
              React.
            </span>
          </strong>
          <Link href="/portfolio/bergdaniel">
            <Button>Ver mais</Button>
          </Link>
        </Text>
      </Project>

      <Project>
        <img src="/bossabox.jpeg" alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Fundador, Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span> Mais detalhes em breve</span>
          </strong>
        </Text>
      </Project>
    </Container>
  );
};

export default Portfolio;