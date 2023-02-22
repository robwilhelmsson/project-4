
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const toolbarStyles = {
    title: {
        color: '#e4f4f2',
        fontFamily: 'Raleway',
        fontWeight: '300',
        fontSize: '25px',
        marginLeft: '30px',
        letterSpacing: '4px'
    },
    item: {
        color: '#e4f4f2',
        fontFamily: 'Raleway',
        fontWeight: '300',
        fontSize: '11px',
        letterSpacing: '2px',
        marginRight: '40px'
    },
    btn: {
        width: '100px',
        color: '#2c5b53',
        backgroundColor: '#e6c764',
        fontFamily: 'Raleway',
        fontWeight: '400',
        fontSize: '11px',
        letterSpacing: '2px',
        boxShadow: 'none',
        borderRadius: '20px',
        marginRight: '25px'
    }
}

function Navbar() {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent' elevation={0} sx={{ height: 120, justifyContent: 'center' }}>
            <Toolbar>
                <Typography style={toolbarStyles.title}>
                    THORTS
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', mr: 20 }}> 
                    <Typography style={toolbarStyles.item}>
                        ALL THORTS
                    </Typography>
                    <Typography style={toolbarStyles.item}>
                        CREATE
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography style={toolbarStyles.item} sx={{ mr: 4 }}>
                        BASKET
                    </Typography>
                    <Typography style={toolbarStyles.item}>
                        SIGN IN
                    </Typography>
                </Box>
                <Button variant='contained' style={toolbarStyles.btn}>
                    SIGNUP
                </Button>
            </Toolbar>
        </AppBar>
        // </Box>
    );
}


export default Navbar



{/* <IconButton size="large" aria-label="search" color="inherit">
<SearchIcon />
</IconButton>
<IconButton
size="large"
aria-label="display more actions"
edge="end"
color="inherit"
>
<MoreIcon />
</IconButton> */}