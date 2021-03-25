import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import { Container, Hello, Section, SocialMedia } from '../styles/indexStyles';


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>André Luiz</title>
      </Head>

      <Navbar />
      <Container>
      <Hello>
        <img src='/foto_perfil.jpeg' alt="" />
        <h1>Olá!</h1>
      </Hello>
      <Section>
        <p>
          Meu nome é André Luiz, sou Desenvolvedor Fullstack com foco nas
          tecnologias: React JS, NextJs, Laravel, Django, React Native e Node JS
        </p>
        <SocialMedia>
          <a
            href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg/videos?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={36} />
            <p>Daniel Berg</p>
          </a>

          <a
            href="https://www.instagram.com/berg.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} />
            <p>@berg.dev</p>
          </a>
          <a
            href="https://www.github.com/danielbergholz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} />
            <p>danielbergholz</p>
          </a>
        </SocialMedia>
      </Section>
    </Container>
    </>
  );
};

export default Home