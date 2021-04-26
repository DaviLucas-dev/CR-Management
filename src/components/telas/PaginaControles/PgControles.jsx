import React, { useState } from 'react';
import { BotaoMenuBase, BotaoMenuMeio, BotaoMenuTopo, BotaoPerfilUsuario, BotaoNotifiUsuario } from '../../shared/template/Botoes';
import { DivConteudo, DivUsersMenu, DivOpcoesUsuario } from '../../shared/template/Divs'

const PgControles = props => {
    
    var element = document.getElementById('TopNavText');

    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Controles'
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
            
            
            <h2>Aqui vai ficar todos os controles da divisao</h2>



            {mostraMenu

                ? <DivOpcoesUsuario style={{marginTop: "-93px"}}>

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

export default PgControles