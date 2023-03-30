import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CakeIcon from '@mui/icons-material/Cake';

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
            El lugar de los pasteles felices✧°･
            {'© '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <div className="footer-style">
            <Box
                component="footer"
                sx={{
                    py: 1,
                    px: 2,
                    mt: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                }
                }
            >
                <Container
                    maxWidth="md"
                    align="center"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: "center",
                    }}>
                    <CakeIcon fontSize="sm"
                        sx={{ mr: 1, color: 'white', my: 0 }} />
                    <Typography
                        variant="h5"
                        component="h6"
                        align="center"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontSize: 14,
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            fontFamily: 'righteous',
                        }}
                    >
                        HAPPY-CAKE
                    </Typography>
                </Container>
                <Copyright />
            </Box>
        </div>
    );
}