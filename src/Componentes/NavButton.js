import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';


export default function NavButton({titulo}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contaned"
                disableElevation
                onClick={handleClick}
            >
                 {titulo }
            </Button>
            
        </div>
    );
}