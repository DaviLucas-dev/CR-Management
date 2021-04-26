import React, { useState } from 'react';
import { BotaoMenuBase, BotaoMenuMeio, BotaoMenuTopo, BotaoPerfilUsuario, BotaoNotifiUsuario, BotaoControlesAtualizados, BotaoControlesAtualizar, BotaoControlesAtrasados } from '../../shared/template/Botoes';
import { DivConteudo, DivUsersMenu, DivOpcoesUsuario } from '../../shared/template/Divs'

const PgInicial = (props) => {
    
    var element = document.getElementById('TopNavText');
    
    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Pagina Inicial'
    }

    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)
    const [mostraMenu, setmostraMenu] = useState(false)

    if(!carregouItensIniciais){

        //Colocar aqui as funções que seram carregadas uma vez quando abrir a pagina

        setCarregouItensIniciais(true);

    }

    function AbrirMenuDoUsuario() {

        if(mostraMenu){
            setmostraMenu(false)
        } else{
            setmostraMenu(true)
        }
    
    }

    return (
        <DivConteudo>

        <DivUsersMenu> <BotaoNotifiUsuario><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></BotaoNotifiUsuario><BotaoPerfilUsuario onClick={() => AbrirMenuDoUsuario(true)}><i class="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i></BotaoPerfilUsuario></DivUsersMenu>

            <div id="CardsControles" style={{ width: "100%", height: "27%", backgroundColor:"", display: "flex"}}>

                <BotaoControlesAtualizados>
                    <p style={{textAlign: "center", fontWeight: "bolder",}}>Controles Atualizados:<hr/></p>
                    <p/>
                    &nbsp;&nbsp;&nbsp;<i class="fa fa-check fa-4x" aria-hidden="true" style={{color: "#1AAB03"}}></i>
                    <i style={{float: "right", fontSize: "40px", fontWeight: "bolder"}}>15&nbsp;&nbsp;</i>
                </BotaoControlesAtualizados>  

                <BotaoControlesAtualizar>
                    <p style={{textAlign: "center", fontWeight: "bolder",}}>Controles Para Atualizar:<hr/></p>
                    <p/>
                    &nbsp;&nbsp;&nbsp;<i class="fa fa-exclamation-triangle fa-4x" aria-hidden="true" style={{color: "#FFD800"}}></i>
                    <i style={{float: "right", fontSize: "40px", fontWeight: "bolder"}}>8&nbsp;&nbsp;</i>
                </BotaoControlesAtualizar>

                <BotaoControlesAtrasados>
                    <p style={{textAlign: "center", fontWeight: "bolder",}}>Controles Atrasados:<hr/></p>
                    <p/>
                    &nbsp;&nbsp;&nbsp;<i class="fa fa-times fa-4x" aria-hidden="true" style={{color: "#AC0000"}}></i>
                    <i style={{float: "right", fontSize: "40px", fontWeight: "bolder"}}>11&nbsp;&nbsp;</i>
                </BotaoControlesAtrasados>     

            </div>    

            {mostraMenu

                ? <DivOpcoesUsuario style={{marginTop: "-178px"}}>

                    <BotaoMenuTopo> &nbsp;&nbsp;&nbsp;<i class="fa fa-address-card fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Informações Perfil </BotaoMenuTopo>
                    <BotaoMenuMeio> &nbsp;&nbsp;&nbsp;<i class="fa fa-users fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Minhas Divisões </BotaoMenuMeio>
                    <BotaoMenuMeio> &nbsp;&nbsp;&nbsp;<i class="fa fa-cog fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Configurações </BotaoMenuMeio>
                    <BotaoMenuBase> &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sign-out fa-2x" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Finalizar Seção </BotaoMenuBase>


                </DivOpcoesUsuario>

                : <div style={{background: "red"}}></div>

            }

        </DivConteudo>
    )
}



export default PgInicial
