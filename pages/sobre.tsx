import React from 'react';
import WhatsApp from '../components/WhatsApp';
import { Container } from '../styles/sobreStyles';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <h1>Sobre Nós</h1>

      <p>
        A Kanaan Solutions nasceu de uma paixão imensa que temos
        por programação e soluções tecnológicas no geral. A vontade 
        de criar e trazer resultados para empresas dos mais diversos 
        ramos, nos fez ter a iniciativa de criar nossa empresa de 
        soluções tecnológicas, tendo em mente a clara ideia de que
        entraríamos para o mercado com o intuito de se destacar em
        todos os tipos de serviços que prestarmos.
      </p>
      
      <p>
        Com essa ideia em mente, trabalhamos, arduamente, para te
        proporcionar o melhor resultado, atendendo a todas às suas 
        necessidades. Nós trabalhamos focando todas as nossas energias 
        em entregar o melhor resultado para o cliente, no menor espaço de 
        tempo possível, de modo a não perder a qualidade e a sofisticação 
        do projeto. Prezamos pelo atendimento, por isso temos uma equipe 
        especializada para garantir a você um atendimento de ponta, com baixo
        tempo de espera e ótimo conhecimento técnico sobre o assunto.
      </p>

      <p>   
        Nosso trabalho é te proporcionar a melhor experiência possível,
        dessa forma, damos nosso máximo para que você receba muito mais do
        que você espera. 
      </p>

      <p>
        <strong>Esse é o nosso trabalho e faremos o possível e impossível
        para te garantir isso</strong>         
      </p>
      
      <WhatsApp />
    </Container>
  );
};

export default Portfolio;