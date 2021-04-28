import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopupNovoControle(props) {

    const { children, openPopupNovo } = props;

    return (
        <Dialog open= {openPopupNovo}>
            <DialogTitle>
            <div style={{textAlign: "center"}}>Novo Controle</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}