import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import React from 'react'
import { Link } from 'react-router-dom';

const Modal = ({handleClose, open, children, title}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {children}
                <Link to="/"><button className='btn-cart'>Ok</button></Link>
            </DialogContent>
        </Dialog>
    )
}

export default Modal;