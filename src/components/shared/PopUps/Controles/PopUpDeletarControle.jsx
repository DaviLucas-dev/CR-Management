import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopupDeletarControle(props) {

    const { children, openPopupDeletar } = props;

    return (
        <Dialog open= {openPopupDeletar}>
            <DialogTitle>
            <div style={{textAlign: "center"}}>Deletar Controle</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}