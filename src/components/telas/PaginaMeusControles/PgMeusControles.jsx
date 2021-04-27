import React, { useState } from 'react';
import { DivConteudo } from '../../shared/template/Divs'

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

        <DivConteudo>

            <h2>Aqui vai ficar todos os controles do usuario logado</h2>

        </DivConteudo>
        
    )
}

export default PgMeusControles