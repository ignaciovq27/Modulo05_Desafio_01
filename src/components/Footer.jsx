// import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

function Copyright() {
    return (
        <Typography
            variant="h5"
            component="h5"
            align="center"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontSize: 10,
            }}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 1,
                px: 2,
                mt: 2,
                bgcolor: 'primary.main',
                color: 'white',
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h5"
                    component="h6"
                    align="center"
                    sx={{
                        fontSize: 14,
                    }}
                >
                    My sticky footer can be found here. 🎂 🧁 🍥
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}