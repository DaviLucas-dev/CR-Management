import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopupDeletarRisco(props) {

    const { children, openPopupDeletar } = props;

    return (
        <Dialog open= {openPopupDeletar}>
            <DialogTitle>
                <div style={{textAlign: "center"}}>Deletar Risco</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}