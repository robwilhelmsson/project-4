
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom"

import '../styles/style.css'
import { NavbarStyles } from './NavbarStyles';


function Navbar() {
    const [navMenu, setNavMenu] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavMenu(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setNavMenu(null);
    };


    return (
        <AppBar position="relative" color='transparent' elevation={0} sx={{ height: 120, justifyContent: 'center' }}>
            <Toolbar>
                <Typography component={Link} to='/' sx={{ ...NavbarStyles.title }}>
                    THORTS
                </Typography>

                {/* Mobile */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black', justifyContent: 'flex-end' }}>
                    <Button onClick={handleOpenNavMenu} sx={{ ...NavbarStyles.btn, width: '30px' }}>
                        <MenuIcon />
                    </Button>
                    <Menu
                        anchorEl={navMenu}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={Boolean(navMenu)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' }, alignItems: 'center', mt: '10px', pr: '20px' }}>
                        <MenuItem sx={{ ...NavbarStyles.menuItem }}>
                            <Link to='/thorts' style={NavbarStyles.links}>ALL THORTS</Link>
                        </MenuItem>
                        <MenuItem sx={{ ...NavbarStyles.menuItem }}>
                            <Link to='' style={NavbarStyles.links}>CREATE</Link>
                        </MenuItem>
                        <MenuItem sx={{ ...NavbarStyles.menuItem }}>
                            <Link to='/signin' style={NavbarStyles.links}>SIGN IN</Link>
                        </MenuItem>
                        <MenuItem sx={{ ...NavbarStyles.menuItem }}>
                            <Link to='/signup' style={NavbarStyles.links}>SIGN UP</Link>
                        </MenuItem>
                    </Menu>
                </Box>
                {/* Large Screen */}
                <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'none' }, justifyContent: 'flex-end', mr: 20 }}>
                    <Typography component={Link} to='thorts' sx={{ ...NavbarStyles.item }}>
                        ALL THORTS
                    </Typography>
                    <Typography style={NavbarStyles.item}>
                        CREATE
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'none' }, justifyContent: 'flex-end' }}>
                    {/* <Typography style={navbarStyles.item} sx={{ mr: 4 }}>
                        BASKET
                    </Typography> */}
                    <Typography component={Link} to='signin' sx={{ ...NavbarStyles.item }}>
                        SIGN IN
                    </Typography>
                </Box>
                <Button component={Link} to='signup' variant='contained' sx={{ ...NavbarStyles.btn, display: { md: 'flex', xs: 'none' } }}>
                    SIGNUP
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar