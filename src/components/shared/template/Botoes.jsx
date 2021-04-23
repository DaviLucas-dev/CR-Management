import styled from 'styled-components';

export const BotaoNovoRisco = styled.button`
font-size: 0.9rem;
padding: 1rem 1rem;
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

`

export const BotaoEditarRisco = styled.button`
font-size: 0.9rem;
padding: 1rem 1rem;
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

`

export const BotaoVisualizarRisco = styled.button`
font-size: 0.9rem;
padding: 1rem 1rem;
border: 2px solid #303AA6;
border-radius: 50px;
background: #303AA6;
color: #fff;
transition: 0.2 ease-out;

&:hover {
    background: #3063A6;
    transition: 0.2s ease-out;
    cursor: pointer;
}

`

export const BotaoDeletarRisco = styled.button`
font-size: 0.9rem;
padding: 1rem 1rem;
border: 2px solid #DC0006;
background: #DC0006;
border-radius: 50px;
color: #fff;
transition: 0.2 ease-out;
&:hover {
    background: red;
    transition: 0.2s ease-out;
    cursor: pointer;
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

`

export const BotaoCriar = styled.button`
font-size: 0.9rem;
padding: 0.5rem 1rem;
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

`

export const BotaoCancelar = styled.button`
font-size: 0.9rem;
padding: 0.5rem 1rem;
border: 2px solid #DC0006;
border-radius: 50px;
background: #DC0006;
color: #fff;
transition: 0.2 ease-out;
&:hover {
    background: red;
    transition: 0.2s ease-out;
    cursor: pointer;
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

`

export const BotaoPerfilUsuario = styled.button`
    font-size: 0.9rem;
    padding: 1rem 1rem;
    border: 2px solid transparent;
    border-radius: 50px;
    background: transparent;
    color: #fff;
    transition: 0.2 ease-out;
    float: right;
    margin-top: -4%;
    &:hover {
        background: transparent;
        color: #D6D6D6;
        transition: 0.2s ease-out;
        cursor: pointer;
        boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

`

export const BotaoNotifiUsuario = styled.button`
    font-size: 0.9rem;
    padding: 1rem 0.4rem;
    border: 2px solid transparent;
    border-radius: 50px;
    background: transparent;
    color: #fff;
    transition: 0.2 ease-out;
    float: right;
    margin-top: -4%;
    &:hover {
        background: transparent;
        color: #D6D6D6;
        transition: 0.2s ease-out;
        cursor: pointer;
        boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

`

export const BotaoControlesAtualizados = styled.div`
color: white;
width: 25%;
height: 100%;
border: 2px solid green;
border-radius: 12px;
background-image: linear-gradient(-45deg, #1AAB03, green);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-right: 14%;
cursor: pointer;
transition: all .3s ease-in-out;
-webkit-transition: all .3s ease-in-out;

&:hover {
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
}

`

export const BotaoControlesAtualizar = styled.div`
color: white;
width: 25%;
height: 100%;
border: 2px solid #FFB100;
border-radius: 12px;
background-image: linear-gradient(-45deg, #FFD800, #FFB100);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-right: 14%;
cursor: pointer;
transition: all .3s ease-in-out;
-webkit-transition: all .3s ease-in-out;

&:hover {
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
}

`

export const BotaoControlesAtrasados = styled.div`
color: white;
width: 25%;
height: 100%;
border: 2px solid #DC0006;
border-radius: 12px;
background-image: linear-gradient(-45deg, #FF0000, #C80006);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
cursor: pointer;
transition: all .3s ease-in-out;
-webkit-transition: all .3s ease-in-out;

&:hover {
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
}

`


