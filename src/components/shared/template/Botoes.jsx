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

export const BotaoUserMenu = styled.div`
color: white;
position: absolute;
width: 89px;
height: 5%;
cursor: default;
margin-left: 70%;
margin-top: -6%;
display: flex;

@media (max-width: 1250px)
{
    margin-left: 69%;
    margin-top: -6.3%;
}

@media (max-width: 1190px)
{
    
    margin-left: 68%;
    margin-top: -6.4%;
}

@media (max-width: 1130px)
{
    
    margin-left: 67%;
    margin-top: -6.7%;
}

@media (max-width: 1080px)
{
    margin-left: 66%;
    margin-top: -7.1%;
}

@media (max-width: 1060px)
{
    margin-left: 65%;
    margin-top: -7.4%;
}

@media (max-width: 1020px)
{
    margin-left: 64%;
    margin-top: -7.6%;
}

@media (max-width: 1000px)
{
    margin-left: 63%;
    margin-top: -7.7%;
}

@media (max-width: 980px)
{
    margin-left: 62%;
}

@media (max-width: 950px)
{
    margin-left: 61%;
    margin-top: -7.9%;
}

@media (max-width: 920px)
{
    
    margin-left: 60%;
    margin-top: -8.4%;
}

@media (max-width: 890px)
{
    margin-left: 59%;
    margin-top: -8.7%;
}

@media (max-width: 860px)
{
    margin-left: 58%;
    margin-top: -8.9%;
}

@media (max-width: 830px)
{
    margin-left: 57%;
    margin-top: -9.3%;
}

@media (max-width: 800px)
{
    margin-left: 82%;
    margin-top: -9.6%;
}

@media (max-width: 760px)
{
    margin-top: -9.8%;
}

@media (max-width: 700px)
{
    
    margin-left: 80%;
    margin-top: -11.2%;
}

@media (max-width: 660px)
{
    margin-left: 80%;
    margin-top: -11.7%;
}

@media (max-width: 620px)
{
    margin-left: 79%;
    margin-top: -12.7%;
}

@media (max-width: 590px)
{
    margin-left: 77%;
    margin-top: -13%;
}

@media (max-width: 550px)
{
    margin-left: 77%;
    margin-top: -13.5%;
}

@media (max-width: 520px)
{
    margin-left: 75%;
    margin-top: -14.3%;
}

@media (max-width: 490px)
{
    margin-left: 75%;
    margin-top: -15.3%;
}


`


