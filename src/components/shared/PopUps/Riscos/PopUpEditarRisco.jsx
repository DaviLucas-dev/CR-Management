import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopupEditarRisco(props) {

    const { children, openPopupEditar } = props;

    return (
        <Dialog open= {openPopupEditar}>
            <DialogTitle>
            <div style={{textAlign: "center"}}>Editar Risco</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}