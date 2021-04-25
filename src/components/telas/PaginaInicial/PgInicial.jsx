import React, { useState } from 'react';
import { BotaoPerfilUsuario, BotaoNotifiUsuario, BotaoUserMenu, BotaoControlesAtualizados, BotaoControlesAtualizar, BotaoControlesAtrasados } from '../../shared/template/Botoes';

const PgInicial = (props) => {
    
    var element = document.getElementById('TopNavText');
    
    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Pagina Inicial'
    }

    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)

    if(!carregouItensIniciais){

        //Colocar aqui as funções que seram carregadas uma vez quando abrir a pagina

        setCarregouItensIniciais(true);

    }

    return (
        <div style={{ width: "90%", height: "90%", backgroundColor:""}}>

        <BotaoUserMenu> <BotaoNotifiUsuario><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i></BotaoNotifiUsuario><BotaoPerfilUsuario><i class="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i></BotaoPerfilUsuario></BotaoUserMenu>

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

        </div>
    )
}



export default PgInicial
