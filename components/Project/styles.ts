import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  button {
    margin-top: 14px;
    padding: 8px;
    font-size: 19px;
  }

  img {
    width: 165px;
    border-radius: 6px;
    display: inline;
    margin-right: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    button {
      margin: 14px auto 0 auto;
    }
    
    img {
      margin: 0 auto;
      width: 125px;
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 700px) {
    margin: 10px 0 10px 0;
  }
`;