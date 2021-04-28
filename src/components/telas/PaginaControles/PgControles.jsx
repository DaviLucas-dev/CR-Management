import React, { useState } from 'react';
import { DataGrid, GridFilterToolbarButton, GridColumnsToolbarButton, GridToolbarContainer, GridToolbarExport } from "@material-ui/data-grid";
import { columnsControlesRisco, rowsControlesRiscos } from '../../scripts/PaginaControles/CarregaTabelaControles'
import { BotaoNovoItem, BotaoEditarItem, BotaoDeletarItem, BotaoVisualizarItem, BotaoCriar, BotaoCancelar } from '../../shared/template/Botoes';
import { DivConteudo } from '../../shared/template/Divs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PopUpNovoControle from '../../shared/PopUps/Controles/PopUpNovoControle';
import PopUpEditarControle from '../../shared/PopUps/Controles/PopUpEditarControle';
import PopUpDeletarControle from '../../shared/PopUps/Controles/PopUpDeletarControle';
import PopUpVisualizarControle from '../../shared/PopUps/Controles/PopUpVisualizarControle';

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

    let itemSelecionado

    let datasSelecionadas= {
        iddoControle: "",
        nomedoControle: "",
        donodoControle: "",
        riscodoControle: "",
        divisaodoControle: "",
        statusdoControle: "",
        criticidadedoControle: "",
    }

    const [carregouItensIniciais, setCarregouItensIniciais] = useState(false)
    const [openPopupNovo, setOpenPopupCriar] = useState(false)
    const [openPopupVisualizar, setOpenPopupVisualizar] = useState(false)
    const [openPopupEditar, setOpenPopupEditar] = useState(false)
    const [openPopupDeletar, setOpenPopupDeletar] = useState(false)

    const [openVisualizar, setOpenVisualizar] = React.useState(false);
    const [openEditar, setOpenEditar] = React.useState(false);
    const [openDeletar, setOpenDeletar] = React.useState(false);

//--------------------------------------- Consts Popular Dados ------------------------------------

    const [idControle, setIdControle] = useState(datasSelecionadas.iddoControle)
    const [nomeControle, setNomeControle] = useState(datasSelecionadas.nomedoControle)
    const [donoControle, setDonoControle] = useState(datasSelecionadas.donodoControle)
    const [riscoControle, setRiscoControle] = useState(datasSelecionadas.riscodoControle)
    const [divisaoControle, setDivisaoControle] = useState(datasSelecionadas.divisaodoControle)
    const [statusControle, setStatusControle] = useState(datasSelecionadas.statusdoControle)
    const [criticidadeControle, setCriticidadeControle] = useState(datasSelecionadas.criticidadedoControle)

//-------------------------------------------------------------------------------------------------

    if(!carregouItensIniciais){

        //Colocar aqui as funções que seram carregadas uma vez quando abrir a pagina

        setCarregouItensIniciais(true);

    }

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
        
        function abrirVisualizar() {
            try {
                
                setIdControle(itemSelecionado['id']);
                setNomeControle(itemSelecionado['controle']);
                setDonoControle(itemSelecionado['donoControle']);
                setRiscoControle(itemSelecionado['riscoControle']);
                setDivisaoControle(itemSelecionado['divisaoControle']);
                setStatusControle(itemSelecionado['statusControle']);
                setCriticidadeControle(itemSelecionado['nivelControle']);

                console.log(idControle)
                console.log(nomeControle)
                console.log(donoControle)
                console.log(riscoControle)
                console.log(divisaoControle)
                console.log(statusControle)
                console.log(criticidadeControle)

                setOpenPopupVisualizar(true);
        
            } catch (error) {
        
                handleClickVisualizar();
        
            }
                
        }
        
        function abrirEditar() {
            try {
        
                setIdControle(itemSelecionado['id']);
                setNomeControle(itemSelecionado['controle']);
                setDonoControle(itemSelecionado['donoControle']);
                setRiscoControle(itemSelecionado['riscoControle']);
                setDivisaoControle(itemSelecionado['divisaoControle']);
                setStatusControle(itemSelecionado['statusControle']);
                setCriticidadeControle(itemSelecionado['nivelControle']);

                setOpenPopupEditar(true);
        
            } catch (error) {
        
                handleClickEditar();
        
            }
                
        }
        
        function abrirDeletar() {
            try {
        
                setIdControle(itemSelecionado['id']);
                setNomeControle(itemSelecionado['controle']);
                setDonoControle(itemSelecionado['donoControle']);
                setRiscoControle(itemSelecionado['riscoControle']);
                setDivisaoControle(itemSelecionado['divisaoControle']);
                setStatusControle(itemSelecionado['statusControle']);
                setCriticidadeControle(itemSelecionado['nivelControle']);

                setOpenPopupDeletar(true);
        
            } catch (error) {
        
                handleClickDeletar();
        
            }
                
        }

    return (

        <DivConteudo>

            <BotaoNovoItem onClick={() => setOpenPopupCriar(true)} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-plus" aria-hidden="true"></i> Novo Controle </BotaoNovoItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoEditarItem onClick={() => abrirEditar(true)} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-pencil" aria-hidden="true"></i> Editar Controle </BotaoEditarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoDeletarItem onClick={() => abrirDeletar(true)} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}><i class="fa fa-trash" aria-hidden="true"></i> Deletar Controle </BotaoDeletarItem>&nbsp;&nbsp;&nbsp;&nbsp;
            <BotaoVisualizarItem onClick={() => abrirVisualizar(true)} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> <i class="fa fa-eye " aria-hidden="true"></i> Visualizar Controle </BotaoVisualizarItem>
            
            <br/>
            <br/> 
            <br/> 

            <div style={{ height: 450, width: "100%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: "2px solid #C7C7C7", borderRadius: "8px" }}>
            <DataGrid rows={rowsControlesRiscos} columns={columnsControlesRisco} pageSize={5} GridToolbarExport GridFilterForm components={{Toolbar: CustomToolbar,}} onRowSelected={(e) => itemSelecionado = e.data} onCellDoubleClick={() => abrirVisualizar()}/>
            </div>

            <PopUpNovoControle 
                openPopupNovo={openPopupNovo} 
                setOpenPopupCriar={setOpenPopupCriar}
            >
                Novo Controleeeeeeeeeeeeeeeeeeeeeeeee
                <br/>
                <br/>
                <BotaoCriar onClick={() => setOpenPopupCriar(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Criar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopupCriar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>

            </PopUpNovoControle>

            <PopUpEditarControle 
                openPopupEditar={openPopupEditar} 
                setOpenPopupEditar={setOpenPopupEditar}
            >
                Editar Controleeeeeeeeeeeeeeeeeeeeeeeee
                <br/>
                <br/>
                <BotaoCriar onClick={() => setOpenPopupEditar(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Criar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopupEditar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>

            </PopUpEditarControle>

            <PopUpDeletarControle 
                openPopupDeletar={openPopupDeletar} 
                setOpenPopupDeletar={setOpenPopupDeletar}
            >
                Deletar Controleeeeeeeeeeeeeeeeeeeeeeeee
                <br/>
                <br/>
                <BotaoCriar onClick={() => setOpenPopupDeletar(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Criar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopupDeletar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>

            </PopUpDeletarControle>

            <PopUpVisualizarControle 
                openPopupVisualizar={openPopupVisualizar} 
                setOpenPopupVisualizar={setOpenPopupVisualizar}
            >
                Visualizar Controleeeeeeeeeeeeeeeeeeeeeeeee
                <br/>
                <br/>
                <BotaoCriar onClick={() => setOpenPopupVisualizar(true)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> Criar </BotaoCriar>
                <BotaoCancelar onClick={() => setOpenPopupVisualizar(false)}  style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", float: "right"}}> Cancelar </BotaoCancelar>

            </PopUpVisualizarControle>

            <Snackbar open={openVisualizar} autoHideDuration={1700} onClose={handleCloseVisualizar}>
                <Alert onClose={handleCloseVisualizar} severity="warning">
                    Favor selecionar um controle na tabela para ser visualizado.
                </Alert>
            </Snackbar>

            <Snackbar open={openEditar} autoHideDuration={1700} onClose={handleCloseEditar}>
                <Alert onClose={handleCloseEditar} severity="warning">
                    Favor selecionar um controle na tabela para ser editado.
                </Alert>
            </Snackbar>

            <Snackbar open={openDeletar} autoHideDuration={1700} onClose={handleCloseDeletar}>
                <Alert onClose={handleCloseDeletar} severity="warning">
                    Favor selecionar um controle na tabela para ser deletado.
                </Alert>
            </Snackbar>

        </DivConteudo>

    )
}

export default PgControles