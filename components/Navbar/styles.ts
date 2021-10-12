import styled from 'styled-components';

interface ContainerProps {
  tab: number;
  isOpen: boolean;
}

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #272727;
  color: #fff;
  width: 100%;
  
  a {
    color: #fff;
    font-family: 'Anton', Helvetica, sans-serif;
  }

  svg {
    animation-name: loadAnimation;
    animation-duration: 150ms;
  }
`;

export const MenuBar = styled.span`
  width: 30px;
  height: 3px;
  border-radius: 1px;
  background-color: #fff;
  display: block;
  transition: all 150ms;
`;

export const MenuIcon = styled.a<ContainerProps>`
  cursor: pointer;
  display: none;

  & ${MenuBar}:nth-child(1) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(45deg) translate3d(5px, 4px, 0)' : ''};
  }

  & ${MenuBar}:nth-child(2) {
    margin: 6px 0;
    opacity: ${(props): number => (props.isOpen ? 0 : 1)};
  }

  & ${MenuBar}:nth-child(3) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(-45deg) translate3d(9px, -8px, 0)' : ''};
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  li:nth-child(${(props): number => props.tab}) a {
    color: #bb9878;
  }

  p {
    text-transform: uppercase;
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: #fff;
  }

  li {
    margin-left: 25px;
    transition: color 150ms ease;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 950px) {
    ul {
      margin-left: 35px;
    }

    h1{ 
      font-size: 25px;
    }

    p{
      font-size: 22px;
      width: 90px;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;

    ul {
      z-index: 10;
      position: fixed;
      top: 42px;
      left: ${(props): string => (props.isOpen ? '50%' : '100%')};
      display: ${(props): string => (props.isOpen ? 'block' : 'none')};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #272727;
      width: 80vw;
      height: 100vh;
      transition: left 0.4s ease;
    }

    svg {
      order: 1;
      margin-left: 20px;
      margin-top: 10px;
      display: inline-block;
    }
    
    li {
      display: block;
      width: 100%;
      border-bottom: 1px solid #737373;
      padding: 10px 0 10px 25px;
      margin-left: 0;
    }
  }
`;

export const Logo = styled.div `
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 200px;
  justify-content: left;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
  }

	h1 {
		text-transform: uppercase;
		color: #bb9878;
    margin-left: 15px;
    cursor: pointer;
	}
`;