import React, { useState } from 'react';
import { BotaoPerfilUsuario, BotaoNotifiUsuario, BotaoUserMenu } from '../../shared/template/Botoes';

const PgMeusControles = props => {

    var element = document.getElementById('TopNavText');

    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Meus Controles'
    }

    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)

    if(!carregouItensIniciais){

        //Colocar aqui as funções que seram carregadas uma vez quando abrir a pagina

        setCarregouItensIniciais(true);

    }
    
    return (

        <div style={{ width: "90%", height: "90%", backgroundColor:""}}>

            <BotaoUserMenu> <BotaoNotifiUsuario><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></BotaoNotifiUsuario><BotaoPerfilUsuario><i class="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i></BotaoPerfilUsuario></BotaoUserMenu>
            <h2>Aqui vai ficar todos os controles do usuario logado</h2>

        </div>
        
    )
}

export default PgMeusControles