import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import { Container, BotaoEntrar, BotaoEsqueciSenha } from './PgLoginElements'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PopupCarregando from '../../shared/PopUps/Geral/PopUpCarregando'

function PgLogin() {

    const [openEmail, setOpenEmail] = useState(false);
    const [openSenha, setOpenSenha] = useState(false);
    const [openEmailSenha, setOpenEmailSenha] = useState(false);
    const [openPopupCarregando, setOpenPopupCarregando] = useState(false)
    const [EmailUsuario, setEmailUsuario] = useState('');
    const [SenhaUsuario, setSenhaUsuario] = useState('');
 
    const handleClickEmail = () => {
        setOpenEmail(true);
    };
    
    const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
          
            setOpenEmail(false);
    };
      
    const handleClickSenha = () => {
          setOpenSenha(true);
    };
    
    const handleCloseSenha = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
          
            setOpenSenha(false);
    };

    const handleClickEmailSenha = () => {
        setOpenEmailSenha(true);
  };
  
  const handleCloseEmailSenha = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
        
          setOpenEmailSenha(false);
  };
    
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function FazerLogin() {

        if(EmailUsuario === '' | SenhaUsuario === ''){

            if(EmailUsuario === '' & SenhaUsuario === ''){
                handleClickEmailSenha();
            } else{
                if(EmailUsuario === ''){
                    handleClickEmail();
                } else {
                    handleClickSenha();
                }
            }

        } else {

            setOpenPopupCarregando(true);

            //chamar funcao aqui

            

        }
          
    }

    

    return (
        <Container>
            <br/><br/>
            <h1 style={{textAlign: "center", color: "white"}}> <i class="fa fa-exclamation-triangle" aria-hidden="true" style={{color: "#FF0006" }}></i> CR - Management</h1>
            <Dialog open={true}>
                <DialogTitle>
                    <div style={{textAlign: "center"}}>Seja bem vindo(a), faça login para continuar</div>
                    <hr/>
                </DialogTitle>
                <DialogContent>
                    <input id="EmailUsuario" onInput={e => setEmailUsuario(e.target.value)} style={{border: "1.2px solid gray", borderRadius: "30px", width: "65%", height: "40px", textAlign: "center", marginLeft: "16%"}} placeholder="Informe seu e-mail" value={EmailUsuario}/><p/>
                    <input id="SenhaUsuario" onInput={e => setSenhaUsuario(e.target.value)} type="password" style={{border: "1.2px solid gray", borderRadius: "30px", width: "65%", height: "40px", textAlign: "center", marginLeft: "16%"}} placeholder="Informe sua senha" value={SenhaUsuario}/><p/>
                    <br/>
                    <BotaoEntrar onClick={() => FazerLogin()}> <i class="fa fa-sign-in" aria-hidden="true"></i> Entrar </BotaoEntrar>&nbsp;&nbsp;
                    <BotaoEsqueciSenha><i class="fa fa-exclamation" aria-hidden="true"></i> Esqueci a Senha</BotaoEsqueciSenha><p/>
                    
                </DialogContent>
            </Dialog>

            <PopupCarregando openPopupCarregando={openPopupCarregando} setOpenPopupCarregando={setOpenPopupCarregando}></PopupCarregando>

            <Snackbar open={openEmail} autoHideDuration={2000} onClose={handleCloseEmail}>
                <Alert onClose={handleCloseEmail} severity="warning">
                    Favor inserir um e-mail para efetuar o login.
                </Alert>
            </Snackbar>

            <Snackbar open={openSenha} autoHideDuration={2000} onClose={handleCloseSenha}>
                <Alert onClose={handleCloseSenha} severity="warning">
                    Favor inserir a senha.
                </Alert>
            </Snackbar>

            <Snackbar open={openEmailSenha} autoHideDuration={2000} onClose={handleCloseEmailSenha}>
                <Alert onClose={handleCloseEmailSenha} severity="warning">
                    Favor inserir email e senha para logar.
                </Alert>
            </Snackbar>

        </Container>
    )
}

export default PgLogin;