import styled from 'styled-components';

export const BotaoNovoItem = styled.button`
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 800px)
{
    padding: 0.5rem 0.5rem;
    width: 100%;
}

`

export const BotaoEditarItem = styled.button`
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

@media (max-width: 800px)
{
    padding: 0.5rem 0.5rem;
    width: 100%;
}

`

export const BotaoVisualizarItem = styled.button`
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

@media (max-width: 800px)
{
    padding: 0.5rem 0.5rem;
    width: 100%;
}

`

export const BotaoDeletarItem = styled.button`
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

@media (max-width: 800px)
{
    padding: 0.5rem 0.5rem;
    width: 100%;
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

export const BotaoPesquisar = styled.button`
font-size: 0.9rem;
padding: 0.3rem 0.4rem;
border: 2px solid #303AA6;
border-radius: 50px;
background: #303AA6;
color: #fff;
transition: 0.2 ease-out;
&:hover {
    background: #3063A6;
    transition: 0.2s ease-out;
    cursor: pointer;
    boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

`

export const BotaoPerfilUsuario = styled.button`
    background: transparent;
    border: 2px solid transparent;
    font-size: 1rem;
    color: #fff;
    transition: 0.2 ease-out;
    position: absolute;
    margin-left: 55%;
    &:hover {
        background: transparent;
        color: #D6D6D6;
        transition: 0.2s ease-out;
        cursor: pointer;
        boxShadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

`

export const BotaoNotifiUsuario = styled.button`
    background: transparent;
    border: 2px solid transparent;
    font-size: 1rem;
    color: #fff;
    transition: 0.2 ease-out;
    position: absolute;
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

export const BotaoMenuTopo = styled.div`
color: white;
background: transparent;
width: 125%;
margin-left: -12%;
height: 45px;
margin-top: -20px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
display: flex;
align-items: center;
cursor: pointer;

&:hover {
    background: rgba(214,214,214, 0.5);

}

@media (max-width: 1400px)
{
    margin-left: -12.5%;
}

@media (max-width: 800px)
{
    margin-left: -12.5%;
}

`

export const BotaoMenuMeio = styled.div`
color: white;
background: transparent;
width: 125%;
margin-left: -12%;
height: 45px;
display: flex;
align-items: center;
cursor: pointer;

&:hover {
    background: rgba(214,214,214, 0.5);
}

@media (max-width: 1400px)
{
    margin-left: -12.5%;
}

@media (max-width: 800px)
{
    margin-left: -12.5%;
}

`

export const BotaoMenuBase = styled.div`
color: white;
background: transparent;
width: 125%;
margin-left: -12%;
height: 45px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display: flex;
align-items: center;
cursor: pointer;

&:hover {
    background: rgba(255,0,0, 0.5);;
}

@media (max-width: 1400px)
{
    margin-left: -12.5%;
}

@media (max-width: 800px)
{
    margin-left: -12.5%;
}

`