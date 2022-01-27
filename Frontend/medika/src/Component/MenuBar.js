import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MenuBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default' style={{ backgroundColor: 'black', color: 'white' }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <a className='text-decoration-none text-white' href='/'>MedikaBazar</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default MenuBar;