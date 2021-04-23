import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function Popup(props) {

    const { children, openPopup } = props;

    return (
        <Dialog open= {openPopup}>
            <DialogTitle>
            <div style={{textAlign: "center"}}>Criar um novo risco</div>
                <hr/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}