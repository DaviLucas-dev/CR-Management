import React, { useState } from 'react';
import { DataGrid, GridFilterToolbarButton, GridColumnsToolbarButton, GridToolbarContainer, GridToolbarExport } from "@material-ui/data-grid";
import { columnsControlesRisco, rowsControlesRiscos } from '../../scripts/PaginaControles/CarregaTabelaControles'
import { BotaoMenuBase, BotaoMenuMeio, BotaoMenuTopo, BotaoPerfilUsuario, BotaoNotifiUsuario, BotaoNovoItem, BotaoEditarItem, BotaoDeletarItem, BotaoVisualizarItem } from '../../shared/template/Botoes';
import { DivConteudo, DivUsersMenu, DivOpcoesUsuario } from '../../shared/template/Divs'

const PgControles = props => {
    
    var element = document.getElementById('TopNavText');

    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Controles'
    }

    function CustomToolbar() {
        return (
        <GridToolbarContainer>
            <GridColumnsToolbarButton />
            <GridFilterToolbarButton />
            <GridToolbarExport /> 
        </GridToolbarContainer>
        );
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
            <BotaoNovoItem  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-plus" aria-hidden="true"></i> Novo Controle </BotaoNovoItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoEditarItem style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-pencil" aria-hidden="true"></i> Editar Controle </BotaoEditarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoDeletarItem style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-trash" aria-hidden="true"></i> Deletar Controle </BotaoDeletarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoVisualizarItem style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> <i class="fa fa-eye " aria-hidden="true"></i> Visualizar Controle </BotaoVisualizarItem>
            
            <br/>
            <br/> 
            <br/> 

            <div style={{ height: 450, width: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: "2px solid #C7C7C7", borderRadius: "8px" }}>
                <DataGrid rows={rowsControlesRiscos} columns={columnsControlesRisco} pageSize={5} GridToolbarExport GridFilterForm components={{Toolbar: CustomToolbar,}} />
            </div>



            {mostraMenu

                ? <DivOpcoesUsuario style={{marginTop: "-570px"}}>

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