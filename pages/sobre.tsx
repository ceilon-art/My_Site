import React from 'react';
import WhatsApp from '../components/WhatsApp';
import { Container, Project, Text } from '../styles/sobreStyles';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>André Luiz</p>
        <span>
          {' '}
          Meu nome é André Luiz, tenho 22 anos, sou estudante 
          de Sistemas de Informação pela Universidade Anhembi Morumbi.
          Atualmente trabalho como analista de suporte técnico na Força Aérea 
          Brasileira e, também, realizo trabalhos freelancer como desenvolvedor
          web e mobile, focado nas ferramentas Laravel, ReactJs, React Native,
          NodeJs e Django.
        </span>

      <p>Experiências Profissionais</p>

      <Project>
        <Text>
          <strong>
            - Função:
            <span> Analista de Suporte Técnico Júnior</span>
          </strong>
          <br />
          <strong>
            - Empresa:
            <span> Força Aérea Brasileira</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Responsável pelo(a):
              Gerenciamento SGBD da unidade militar,
              Suporte aos problemas de redes,
              Manutenção de Hardwares e Softwares dos computadores,
              Gerenciamento de permissões de contas de usuários com Active
              Directory e, Gerenciamento do CMS Joomla, atualizando todos 
              os conteúdos no site local.
            </span>
          </strong>
        </Text>
      </Project>

      <Project>
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor React Native/Expo Júnior</span>
          </strong>
          <br />
          <strong>
            - Empresa:
            <span>
              {' '}
              Fashionshop Consultoria de Desenvolvimentos e Gestão Empresarial
            </span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Desenvolvedor React Native/Expo, responsável pela criação de todo
              o aplicativo mobile da empresa Fashionshop, utilizando ferramentas
              como React Redux, Redux Saga, Context Manager, React Navigation, 
              Typescript e entra outras ferramentas.
            </span>
          </strong>
        </Text>
      </Project>

      <p>Cursos Complementares</p>

      <Project>
        <Text>
          <strong>
            - Curso:
            <span>{' '} Desenvolvimento JavaScript e TypeScript</span>
          </strong>
          <br />
          <strong>
            - Instituição:
            <span>
            {' '}
              Udemy
            </span>
          </strong>
        </Text>
      </Project>

      <Project>
        <Text>
          <strong>
            - Curso:
            <span>{' '} Desenvolvedor Fullstack ReactJs e NodeJs</span>
          </strong>
          <br />
          <strong>
            - Instituição:
            <span>
            {' '}
            Rocketseat
            </span>
          </strong>
        </Text>
      </Project>

      <Project>
        <Text>
          <strong>
            - Curso:
            <span>{' '} MySQL do básico ao avançado</span>
          </strong>
          <br />
          <strong>
            - Instituição:
            <span>
            {' '}
            Udemy
            </span>
          </strong>
        </Text>
      </Project>

      <Project>
        <Text>
          <strong>
            - Curso:
            <span>{' '} Desenvolvedor Fullstack Laravel</span>
          </strong>
          <br />
          <strong>
            - Instituição:
            <span>
            {' '}
            Udemy
            </span>
          </strong>
        </Text>
      </Project>

      <Project>
        <Text>
          <strong>
            - Curso:
            <span>{' '} Python do básico ao avançado</span>
          </strong>
          <br />
          <strong>
            - Instituição:
            <span>
            {' '}
            Udemy
            </span>
          </strong>
        </Text>
      </Project>
      <WhatsApp />
    </Container>
  );
};

export default Portfolio;