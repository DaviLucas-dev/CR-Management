
// ----------------------------------------------- Importações -----------------------------------------------




//----- Bibliotecas React ------

import React, { useState } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'

//--- Fim Bibliotecas React ----



//----------- Layout -----------

import Content from '../shared/template/Content'
import Container from '../shared/template/Container'
import Header from '../shared/template/Header'
import Nav from '../shared/template/Nav'
import SideNav from '../shared/template/SideNav'
import Toolbar from '../shared/template/Toolbar'
import TopNav from '../shared/template/TopNav'

//--------- Fim Layout ----------

import { BotaoMenuBase, BotaoMenuMeio, BotaoMenuTopo, BotaoPerfilUsuario, BotaoNotifiUsuario } from '../shared/template/Botoes';
import { DivUsersMenu, DivOpcoesUsuario } from '../shared/template/Divs'

//----------- Scripts -----------

import { isAuthenticated } from '../scripts/Geral/auth'

//--------- Fim Scripts ---------



//----------- Telas -------------

import PgInicial from '../telas/PaginaInicial/PgInicial'
import PgRiscos from '../telas/PaginaRiscos/PgRiscos'
import PgLogin from '../telas/login/PgLogin'
import PgControles from '../telas/PaginaControles/PgControles'
import PgMeusControles from '../telas/PaginaMeusControles/PgMeusControles'

//---------- Fim Telas ----------





// ------------------------------------------------ Fim Importações -------------------------------------------

const EstaLogado = (props) => {

    var switchPag

    isAuthenticated() ? (
        switchPag = <RoutesApp/>
    ) : (
        switchPag = <PgLogin/>
    )

    return(switchPag)

}

const QualTela = (props) => {

    let ggwp

    var gg = document.URL

    switch (gg) {

        case 'http://localhost:3000':
            ggwp = 'Pagina Inicial'
        break;

        case 'http://localhost:3000/':
            ggwp = 'Pagina Inicial'
        break;

        case 'http://localhost:3000/PgRiscos':
            ggwp = 'Riscos'
        break;

        case 'http://localhost:3000/PgMeusControles':
            ggwp = 'Meus Controles'
        break;

        case 'http://localhost:3000/PgControles':
            ggwp = 'Controles'
        break;
        
        default:
            ggwp = 'Bem Vindo'
          break;
      }
 
    return(<div id="TopNavText" style={{ float: "center", marginTop: "1%", marginLeft: "44%", fontWeight: "bold", fontSize: "20px" }} > {ggwp} </div>)
}


const RoutesApp = (props) => {

    const [mostraMenu, setmostraMenu] = useState(false)

    function AbrirMenuDoUsuario() {
        
        if(mostraMenu){
            setmostraMenu(false)
        } else{
            setmostraMenu(true)
        }
    
    }

    function FecharMenuDoUsuario() {
        
        if(mostraMenu){
            setmostraMenu(false)
        }
    
    }

    return (
        
        <Container onClick={() => FecharMenuDoUsuario()}>
            <BrowserRouter>
                <Route path="/PgLogin">
                    <PgLogin/>
                </Route>
            <Header>
                <h1><i class="fa fa-exclamation-triangle" aria-hidden="true" style={{color: "#C30006"}}></i> CR - Management</h1>
            </Header>
                    <Toolbar>
                        <QualTela/>

                        <DivUsersMenu> <BotaoNotifiUsuario><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></BotaoNotifiUsuario><BotaoPerfilUsuario onClick={() => AbrirMenuDoUsuario()}><i class="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i></BotaoPerfilUsuario></DivUsersMenu>

                        
                    </Toolbar>
                    <TopNav>
                        <Nav></Nav>
                    </TopNav>
                    <SideNav>
                        <Nav></Nav>
                    </SideNav>
                    <Content>
                        <Switch>
                            <Route path="/PgRiscos">
                                <PgRiscos />
                            </Route>
                            <Route path="/PgControles">
                                <PgControles />
                            </Route>
                            <Route path="/PgMeusControles">
                                <PgMeusControles />
                            </Route>
                            <Route path="/">  
                                <PgInicial />
                            </Route>
                        </Switch>
                    </Content>

                    {mostraMenu

                        ?   <DivOpcoesUsuario style={{marginTop: "65px"}}>

                                <Link to={"/"} style={{ textDecoration: "none" }} ><BotaoMenuTopo> &nbsp;&nbsp;&nbsp;<i class="fa fa-address-card fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Informações Perfil </BotaoMenuTopo></Link>
                                <BotaoMenuMeio> &nbsp;&nbsp;&nbsp;<i class="fa fa-users fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Minhas Divisões </BotaoMenuMeio>
                                <BotaoMenuMeio> &nbsp;&nbsp;&nbsp;<i class="fa fa-cog fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Configurações </BotaoMenuMeio>
                                <BotaoMenuBase> &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sign-out fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Finalizar Seção </BotaoMenuBase>


                            </DivOpcoesUsuario>

                        :   <div style={{background: "red"}}></div>

                    }

            </BrowserRouter>

        </Container>
    )
}


export default EstaLogado
