import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;  
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;

  p {
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: 'Anton', Helvetica;
    text-transform: uppercase;
    font-size: 32px;
  }

  strong,
  span {
    font-size: 18px;
  }

  span {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    p {
      text-align: center;
      font-size: 30px;
    }

    strong,
    span {
      font-size: 16px;
    }
  }
`;
