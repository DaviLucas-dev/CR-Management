import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopupVisualizarControle(props) {

    const { children, openPopupVisualizar } = props;

    return (
        <Dialog open= {openPopupVisualizar}>
            <DialogTitle>
            <div style={{textAlign: "center"}}>Visualizar Controle</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}