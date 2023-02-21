


import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { border } from '@mui/system';

const toolbarStyles = {
    title: {
        color: 'red',
        border: '1px solid black',
        variant: 'h5'
    }
}

function Navbar() {


    return (
        // <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent' elevation={1}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        style={toolbarStyles.title}
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        MUI
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        // </Box>
    );
}


export default Navbar