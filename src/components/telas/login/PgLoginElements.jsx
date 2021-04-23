import styled from "styled-components";

export const Container =  styled.div`
    
    width: 100%;
    height: 100vh;
    background-image: radial-gradient(circle, #428AFF, #428AFF, #5250D8, #263774 );
    
`;

export const Input = styled.input`
    
    border: 1.2px solid gray;
    borderRadius: 10px;
    background: #ecf0f1;
    border-radius: 3px;
    margin: 5px;
    textAlign: center;

`;

export const BotaoEntrar = styled.button`
font-size: 0.9rem;
padding: 1rem 4rem;
border: 2px solid green;
border-radius: 50px;
background: green;
color: #fff;
transition: 0.2 ease-out;
&:hover {
    background: #1AAB03;
    transition: 0.2s ease-out;
    cursor: pointer;
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`; 

export const BotaoEsqueciSenha = styled.button`
font-size: 0.9rem;
padding: 1rem 3rem;
border: 2px solid #FFB100;
border-radius: 50px;
background: #FFB100;
color: #fff;
transition: 0.2 ease-out;
&:hover {
    background: #FFBF00;
    transition: 0.2s ease-out;
    cursor: pointer;
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`; 