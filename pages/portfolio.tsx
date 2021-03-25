import React from 'react';
import Link from 'next/link';

import { Container, Project, Text } from '../styles/portfolioStyles';
import Button from '../components/Button';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>Experiência</p>
      <strong>
        - Graduação:
        <span> Graduando em Sistemas de Informações na Universidade Anhembi Morumbi</span>
      </strong>
      <strong>
        - Freelancer:
        <span>
          {' '}
          Trabalho desde de janeiro de 2021 como desenvolvedor React Native
        </span>
      </strong>
      <strong>
        - Analista de Suporte Técnico Júnior:
        <span>
          {' '}
          Trabalho desde de março de 2018 como analista de suporte técnico, 
          atuando com as mais diversas funções, desde assistência ao usuário
          até problemas relacionados com servidores.
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

          <Button link="https://app.bossabox.com/u/andre-nagano">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/foto_perfil.jpeg" alt="André Luiz" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              ceilon.vercel.app é o site que você está acessando. Eu o criei do
              completo zero usando ferramentas como NextJs, Figma e Typescript como
              linguagem.
            </span>
          </strong>
          <Button link="https://github.com/ceilon-art?tab=repositories">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/bossabox.jpeg" alt="VUTTR" />
        <Text>
          <strong>
            - Função:
            <span>Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
            {' '}
              Desenvolvimento do app VUTTR (Very Useful
              to Remember). Neste app utilizei NextJs no
              frontend, AdonisJs no backend e Typescript 
              como linguagem de programação. Este app foi 
              usado como teste na plataforma Bossabox, afim
              de certificar minhas competências.
            </span>
          </strong>
          <Button link="https://github.com/ceilon-art/VUTTR">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/foto_perfil.jpeg" alt="VUTTR" />
        <Text>
          <strong>
            - Função:
            <span>Desenvolvedor Frontend</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
            {' '}
            Um clone da Netflix, um pouco diferente, utilizando 
            TypeScript, ReactJs e outras ferramentas super 
            interessantes para dar um destaque na aplicação. Todo 
            o conteúdo de filmes, nomes dos filmes, banners e outros, 
            veio da API da Tmdb, uma API super bacana para quem busca 
            realizar aplicações como essa. 
            </span>
          </strong>
          <Button link="https://github.com/ceilon-art/Flex-Movie">
            Ver mais
          </Button>
        </Text>
      </Project>
    </Container>
  );
};

export default Portfolio;