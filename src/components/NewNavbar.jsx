import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CakeIcon from '@mui/icons-material/Cake';
import { Link, NavLink } from 'react-router-dom';

export default function NewNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CakeIcon fontSize="large"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            color: 'white',
                            my: 0
                        }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'righteous',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >HAPPY-CAKE✧°･
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        color: 'white',
                    }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    align="center"
                                    sx={{
                                        py: 0,
                                        color: "black",
                                        textDecoration: "none",
                                        fontFamily: 'righteous',
                                        fontWeight: 100,
                                    }}
                                    component={Link}
                                    to="/">🏠 HOME
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    align="center"
                                    sx={{
                                        py: 0,
                                        color: "black",
                                        textDecoration: "none",
                                        fontFamily: 'righteous',
                                        fontWeight: 100,
                                    }}
                                    component={Link}
                                    to="/products"> 🍰 PRODUCTOS
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    align="center"
                                    sx={{
                                        py: 0,
                                        color: "black",
                                        textDecoration: "none",
                                        fontFamily: 'righteous',
                                        fontWeight: 100,
                                    }}
                                    component={Link}
                                    to="/contact">📝 CONTACTO
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <CakeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'righteous',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >HAPPY-CAKE✧°･
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'white',
                                display: 'block',
                                fontFamily: 'righteous',
                                fontWeight: 100,
                            }}
                            component={NavLink}
                            to="/"
                        >
                            🏠 HOME
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'white',
                                display: 'block',
                                fontFamily: 'righteous',
                                fontWeight: 100,
                            }}
                            component={NavLink}
                            to="/products"
                        >
                            🍰 PRODUCTOS
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 1,
                                color: 'white',
                                display: 'block',
                                fontFamily: 'righteous',
                                fontWeight: 100,
                            }}
                            component={NavLink}
                            to="/contact"
                        >
                            📝 CONTACTO
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}