import React, { useState } from 'react';
import { BotaoPerfilUsuario, BotaoNotifiUsuario } from '../../shared/template/Botoes';
import { DivConteudo, DivUsersMenu } from '../../shared/template/Divs'

const PgControles = props => {
    
    var element = document.getElementById('TopNavText');

    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Controles'
    }

    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)

    if(!carregouItensIniciais){

        //Colocar aqui as funções que seram carregadas uma vez quando abrir a pagina

        setCarregouItensIniciais(true);

    }

    return (

        <DivConteudo>

            <DivUsersMenu> <BotaoNotifiUsuario><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></BotaoNotifiUsuario><BotaoPerfilUsuario><i class="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i></BotaoPerfilUsuario></DivUsersMenu>
            <h2>Aqui vai ficar todos os controles da divisao</h2>

        </DivConteudo>

    )
}

export default PgControles