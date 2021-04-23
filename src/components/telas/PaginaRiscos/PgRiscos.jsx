import React, { useState } from 'react';
import { DataGrid, GridFilterToolbarButton, GridColumnsToolbarButton, GridToolbarContainer, GridToolbarExport } from "@material-ui/data-grid";
import Popup from '../../shared/PopUps/Riscos/PopUpNovoRisco';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PopupVisualizarRisco from '../../shared/PopUps/Riscos/PopUpVisualizarRisco';
import PopupEditarRisco from '../../shared/PopUps/Riscos/PopUpEditarRisco';
import PopupDeletarRisco from '../../shared/PopUps/Riscos/PopUpDeletarRisco';
import { BotaoNovoRisco, BotaoEditarRisco, BotaoVisualizarRisco, BotaoDeletarRisco, BotaoCriar, BotaoCancelar } from '../../shared/template/Botoes';
import { columnsRiscos, rowsRiscos, testeLoad } from '../../scripts/PaginaRiscos/CarregaTabelaRiscos';
import { columnsControlesRisco, rowsControlesRiscos } from '../../scripts/PaginaRiscos/CarregaTabelaControlesDoRisco';

const PgRiscos = props => {

    var element = document.getElementById('TopNavText');

    if (element !== null && element.value !== '') {
        document.getElementById('TopNavText').innerHTML = 'Riscos'
    }

// --------------------------- Entra as funções de carregar os itens da tela ---------------------

    //Como exemplo é o testeLoad(), ela só é acionada quando a tela é carregada e não é carregada junto
    //com o site, todas as funções devem vir assim, para carregalas somente quando necessario.


    //Essa const faz vom que a tabela apenas seja carregada quando a pagina foi aberta.
    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)

    if(!carregouItensIniciais){

        testeLoad()

        setCarregouItensIniciais(true);

    }

// ------------------------------------------------------------------------------------------------

        let itemSelecionado

        let datasSelecionadas= {
            iddoRisco: "",
            nomedoRisco: "",
            donodoRisco: "",
            divisaodoRisco: "",
            statusdoRisco: "",
            criticidadedoRisco: "",
        }

//--------------------------------------- Consts Popular Dados ------------------------------------

        const [idRisco, setIdRisco] = useState(datasSelecionadas.iddoRisco)
        const [nomeRisco, setNomeRisco] = useState(datasSelecionadas.nomedoRisco)
        const [donoRisco, setDonoRisco] = useState(datasSelecionadas.donodoRisco)
        const [divisaoRisco, setDivisaoRisco] = useState(datasSelecionadas.divisaodoRisco)
        const [statusRisco, setStatusRisco] = useState(datasSelecionadas.statusdoRisco)
        const [criticidadeRisco, setCriticidadeRisco] = useState(datasSelecionadas.criticidadedoRisco)

//-------------------------------------------------------------------------------------------------

//------------------------------------------- Conts PopUps ----------------------------------------

    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupVisualizar, setOpenPopupVisualizar] = useState(false)
    const [openPopupEditar, setOpenPopupEditar] = useState(false)
    const [openPopupDeletar, setOpenPopupDeletar] = useState(false)

//-------------------------------------------------------------------------------------------------

//-------------------------------------------- Consts de Controle ---------------------------------

    const [mostraTabelaControles, setMostraTabelaControles] = useState(false)

//-------------------------------------------------------------------------------------------------

const [openVisualizar, setOpenVisualizar] = React.useState(false);
const [openEditar, setOpenEditar] = React.useState(false);
const [openDeletar, setOpenDeletar] = React.useState(false);

const handleClickVisualizar = () => {
  setOpenVisualizar(true);
};

const handleClickEditar = () => {
    setOpenEditar(true);
  };

const handleClickDeletar = () => {
    setOpenDeletar(true);
  };

const handleCloseVisualizar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenVisualizar(false);
};

const handleCloseEditar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenEditar(false);
  };

const handleCloseDeletar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenDeletar(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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

function fecharVisualizar() {

    setOpenPopupVisualizar(false);
    setMostraTabelaControles(false);

}

function abrirVisualizar() {
    try {
        
        setIdRisco(itemSelecionado['id']);
        setNomeRisco(itemSelecionado['risco']);
        setDonoRisco(itemSelecionado['dono']);
        setDivisaoRisco(itemSelecionado['divisao']);
        setStatusRisco(itemSelecionado['status']);
        setCriticidadeRisco(itemSelecionado['nivel']);

        setOpenPopupVisualizar(true);
        setMostraTabelaControles(true);

    } catch (error) {

        handleClickVisualizar();

    }
        
}

function abrirEditar() {
    try {
        
        setIdRisco(itemSelecionado['id']);
        setNomeRisco(itemSelecionado['risco']);
        setDonoRisco(itemSelecionado['dono']);
        setDivisaoRisco(itemSelecionado['divisao']);
        setStatusRisco(itemSelecionado['status']);
        setCriticidadeRisco(itemSelecionado['nivel']);

        setOpenPopupEditar(true);

    } catch (error) {

        handleClickEditar();

    }
        
}

function abrirDeletar() {
    try {
        
        setIdRisco(itemSelecionado['id']);
        setNomeRisco(itemSelecionado['risco']);
        setDonoRisco(itemSelecionado['dono']);
        setDivisaoRisco(itemSelecionado['divisao']);
        setStatusRisco(itemSelecionado['status']);
        setCriticidadeRisco(itemSelecionado['nivel']);

        setOpenPopupDeletar(true);

    } catch (error) {

        handleClickDeletar();

    }
        
}

    return (
        
        
        <div style={{ width: "90%", height: "90%", backgroundColor:""}}>

         <BotaoNovoRisco onClick={() => setOpenPopup(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-plus" aria-hidden="true"></i> Novo Risco </BotaoNovoRisco>&nbsp;&nbsp;&nbsp;&nbsp;
         <BotaoEditarRisco onClick={() => abrirEditar()} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-pencil" aria-hidden="true"></i> Editar Risco </BotaoEditarRisco>&nbsp;&nbsp;&nbsp;&nbsp;
         <BotaoDeletarRisco onClick={() => abrirDeletar()} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-trash" aria-hidden="true"></i> Deletar Risco </BotaoDeletarRisco>&nbsp;&nbsp;&nbsp;&nbsp;
         <BotaoVisualizarRisco onClick={() => abrirVisualizar()} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> <i class="fa fa-eye " aria-hidden="true"></i> Visualizar Risco </BotaoVisualizarRisco>
                 
         <br/>
         <br/> 
         <br/> 
            <div style={{ height: 450, width: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: "2px solid #C7C7C7", borderRadius: "8px" }}>
                <DataGrid rows={rowsRiscos} columns={columnsRiscos} pageSize={5} GridToolbarExport GridFilterForm components={{Toolbar: CustomToolbar,}} onRowSelected={(e) => itemSelecionado = e.data} onCellDoubleClick={() => abrirVisualizar()}/>
            </div>

            <Popup 
                openPopup={openPopup} 
                setOpenPopup={setOpenPopup}
            >
                <label for="fname" style={{ fontWeight: "bold"}}>&nbsp;&nbsp;&nbsp;Nome do Risco:</label><br/>
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "400px", height: "25px"}} name="NomeRisco" placeholder="  Digite o nome do novo risco..." /><br/><p/>
                <label for="lname" style={{ fontWeight: "bold"}}>&nbsp;&nbsp;&nbsp;Divisão:</label><br/>
                <select style={{borderRadius: "30px", width: "400px", height: "25px"}} name="topic" id="topic">
                    <option value="" selected="selected">Selecione uma Divisão...</option>
                    <option value="">Ger Avia Setor 1</option>
                    <option value="">Ger Avia Setor 2</option>
                </select><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>&nbsp;&nbsp;&nbsp;Criticidade:</label><br/><p/>
                <form>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="baixo" name="critico" value="baixo"/>
                    <label for="baixo">Baixo</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="medio" name="critico" value="medio"/>
                    <label for="medio">Médio</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="alto" name="critico" value="alto"/>
                    <label for="alto">Alto</label>
                </form> <br/>
                <label for="fname" style={{ fontWeight: "bold"}}>&nbsp;&nbsp;&nbsp;Status:</label><br/><p/>
                <form>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="habilitado" name="status" value="habilitado"/>
                    <label for="habilitado">Habilitado</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="desabilitado" name="status" value="desabilitado"/>
                    <label for="desabilitado">Desabilitado</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </form> 
                <br/><br/>
                <BotaoCriar onClick={() => setOpenPopup(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Criar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopup(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>
                <br/><p/>
            </Popup>

            <PopupVisualizarRisco 
                openPopupVisualizar={openPopupVisualizar} 
                setOpenPopupVisualizar={setOpenPopupVisualizar}
            >
                <label for="fname" style={{ fontWeight: "bold"}}>Cód: </label>
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "80px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={idRisco} />
                <label for="fname" style={{ fontWeight: "bold"}}>&nbsp;&nbsp;Risco:</label>&nbsp;&nbsp;
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "340px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={nomeRisco} /><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Dono:</label>&nbsp;&nbsp;
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "200px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={donoRisco} />&nbsp;&nbsp;
                <label for="fname" style={{ fontWeight: "bold"}}>Status:</label>&nbsp;&nbsp;
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "180px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={statusRisco} /><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Criticidade:</label>&nbsp;&nbsp;
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "100px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={criticidadeRisco} />&nbsp;&nbsp;
                <label for="fname" style={{ fontWeight: "bold"}}>Divisão:</label>&nbsp;&nbsp;
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "226px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={divisaoRisco} /><br/><p/>
                <p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Controles do risco: </label>
                <p/>

                {mostraTabelaControles

                    ?   <div style={{ height: 250, width: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: "2px solid #C7C7C7", borderRadius: "8px" }}>
                            <DataGrid rows={rowsControlesRiscos} columns={columnsControlesRisco} density={'compact'} headerHeight={30} pageSize={5} GridToolbarExport GridFilterForm components={{Toolbar: CustomToolbar,}} onRowSelected={(e) => itemSelecionado = JSON.parse(e.data)}/>
                        </div>

                    :   <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style={{ alignContent: "center" }} ></i>
                        
                }

                <p/>

                <BotaoCancelar onClick={() => fecharVisualizar()}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Fechar </BotaoCancelar>
                <br/>

            </PopupVisualizarRisco>

            <PopupEditarRisco 
                openPopupEditar={openPopupEditar} 
                setOpenPopupEditar={setOpenPopupEditar}
            >
                <label for="fname" style={{ fontWeight: "bold"}}>Cód: </label>
                <input id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "80px", height: "25px", textAlign: "center"}} name="NomeRisco" disabled="disabled" value={idRisco} /><br/><br/>
                <label for="fname" style={{ fontWeight: "bold"}}>Risco:</label>&nbsp;&nbsp;
                <input type="text" id="NomeRisco" style={{border: "1.2px solid gray", borderRadius: "30px", width: "340px", height: "25px", textAlign: "center"}} name="NomeRisco" placeholder={nomeRisco} /><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Status:</label>&nbsp;&nbsp;
                <select style={{borderRadius: "30px", width: "200px", height: "25px"}} name="topic" id="criti">
                    <option value="" selected="selected">Padrão: {statusRisco}</option>
                    <option value="">Habilitado</option>
                    <option value="">Desabilitado</option>
                </select><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Criticidade:</label>&nbsp;&nbsp;
                <select style={{borderRadius: "30px", width: "200px", height: "25px"}} name="topic" id="criti">
                    <option value="" selected="selected">Padrão: {criticidadeRisco}</option>
                    <option value="">Baixo</option>
                    <option value="">Médio</option>
                    <option value="">Alto</option>
                </select><br/><p/>
                <label for="fname" style={{ fontWeight: "bold"}}>Divisão:</label>&nbsp;&nbsp;
                <select style={{borderRadius: "30px", width: "200px", height: "25px"}} name="topic" id="divis">
                    <option value="" selected="selected">Padrão: {divisaoRisco}</option>
                    <option value="">Ger Avia Setor 1</option>
                    <option value="">Ger Avia Setor 2</option>
                </select><br/><p/>
                <br/>

                <BotaoCriar style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Salvar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopupEditar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>
                <br/>

            </PopupEditarRisco>

            <PopupDeletarRisco
            openPopupDeletar={openPopupDeletar} 
            setOpenPopupDeletar={setOpenPopupDeletar}
            >
                <h4>Tem certeza que voce deseja deletar permanentemente esse risco?</h4>
                <p/>
                <h4 style={{textAlign:"center"}} >{nomeRisco}</h4>
                <p/>
                <p style={{color: "#3885DA"}}><i class="fa fa-info-circle" aria-hidden="true" style={{color: "#3885DA"}}></i> Se você executar a exclusão desse risco, irá resultar na exclusão permanente de todos os controles associados a esse risco.</p>
                <br/>
                <br/>

                <BotaoCancelar style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Deletar </BotaoCancelar>
                <BotaoCancelar onClick={() => setOpenPopupDeletar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>
                <p/>

            </PopupDeletarRisco>

            <Snackbar open={openVisualizar} autoHideDuration={1700} onClose={handleCloseVisualizar}>
                <Alert onClose={handleCloseVisualizar} severity="warning">
                    Favor selecionar um risco na tabela para ser visualizado.
                </Alert>
            </Snackbar>

            <Snackbar open={openEditar} autoHideDuration={1700} onClose={handleCloseEditar}>
                <Alert onClose={handleCloseEditar} severity="warning">
                    Favor selecionar um risco na tabela para ser editado.
                </Alert>
            </Snackbar>

            <Snackbar open={openDeletar} autoHideDuration={1700} onClose={handleCloseDeletar}>
                <Alert onClose={handleCloseDeletar} severity="warning">
                    Favor selecionar um risco na tabela para ser deletado.
                </Alert>
            </Snackbar>

        </div>  
        
    );

}

export default PgRiscos