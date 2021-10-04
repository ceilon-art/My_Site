import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;
 
  h1 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: 'Anton', Helvetica;
    text-transform: uppercase;
    font-size: 38px;
    text-align: center;
  }

  p {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 26px;
    text-align: center;
  }

  strong {
    font-size: 36px;
    text-align: center;
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