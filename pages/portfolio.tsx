import React from 'react';

import WhatsApp from '../components/WhatsApp'
import Project from '../components/Project';

import { Container } from '../styles/portfolioStyles';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <Project 
          imageName="/bossabox.jpeg" 
          altName="BossaBox"
          functionName="Desenvolveodr Fullstack"
          description="Estou disponível como freelancer na plataforma Bossabox."
          linkName="https://app.bossabox.com/u/andre-nagano"
        />

        <Project 
          imageName="/foto_perfil.jpeg" 
          altName="André Luiz"
          functionName="Desenvolveodr Fullstack"
          description="ceilon.vercel.app é o site que você está acessando. Eu o criei do
          completo zero usando ferramentas como NextJs, Figma e Typescript como
          linguagem."
          linkName="https://github.com/ceilon-art?tab=repositories"
        />

        <Project 
          imageName="/bossabox.jpeg" 
          altName="VUTTUR"
          functionName="Desenvolveodr Fullstack"
          description="Desenvolvimento do app VUTTR (Very Useful
            to Remember). Neste app utilizei NextJs no
            frontend, AdonisJs no backend e Typescript 
            como linguagem de programação. Este app foi 
            usado como teste na plataforma Bossabox, afim
            de certificar minhas competências."
          linkName="https://github.com/ceilon-art/VUTTR"
        />

        <Project 
          imageName="/netflix.jpg" 
          altName="Netflix"
          functionName="Desenvolveodr Frontend"
          description="Um clone da Netflix, um pouco diferente, utilizando 
          TypeScript, ReactJs e outras ferramentas super 
          interessantes para dar um destaque na aplicação. Todo 
          o conteúdo de filmes, nomes dos filmes, banners e outros, 
          veio da API da Tmdb, uma API super bacana para quem busca 
          realizar aplicações como essa. "
          linkName="https://github.com/ceilon-art/Flex-Movie"
        />   

        <Project 
          imageName="/github.png" 
          altName="GitHub"
          functionName="Desenvolveodr Frontend"
          description="Um clone do GitHub, utilizando 
          TypeScript e ReactJs. Nesse projeto 
          é possível pesquisar por outros usuários 
          e ver seus repositórios. Além disso,
          você pode fazer uso do modo noturno. "
          linkName="https://github.com/ceilon-art/Clone-GitHub"
        />   

        <Project 
          imageName="/youtube.png" 
          altName="Youtube"
          functionName="Desenvolveodr Frontend"
          description="Um clone do Youtube, utilizando 
          ReactJs e CSS puro. Nesse projeto 
          fizemos um clone, simples, da interface
          gráfica do aplicativo Youtube."
          linkName="https://github.com/ceilon-art/Youtube-clone"
        />    
      </Container>
      <WhatsApp />
    </>
   );
};

export default Portfolio;