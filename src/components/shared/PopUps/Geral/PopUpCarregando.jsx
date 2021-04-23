import React from 'react'
import { Dialog, DialogContent} from '@material-ui/core';

export default function PopupCarregando(props) {

    const { openPopupCarregando } = props;

    return (
        <Dialog open= {openPopupCarregando}>
            <DialogContent>
            <i style={{marginLeft: "28%"}} class="fa fa-spinner fa-pulse fa-2x fa-fw"></i> 
            <p>Carregando...</p>
            </DialogContent>
        </Dialog>
    )
}