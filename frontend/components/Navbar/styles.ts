import styled from 'styled-components';

export const Background = styled.div`
    background-color: #272727;
    height: 60px;
    color: #fff;  
    display: flex;
    align-items: center;
`; 

export const Container = styled.div `
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
        text-transform: uppercase;
        font-size: 30px;
        color: #BB9878;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    li {
        padding-left: 25px;
    }

`;
