import { Container } from "@mui/system";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function NotFound() {

    return (
        <Container
            maxWidth="md"
            align="center"
            sx={{
                py: 5,
                display: { xs: 'flex', md: 'flex' },
                justifyContent: "center",
                flexDirection: 'column'
            }}>
            <div>
                <Typography
                    variant="h4"
                    component="span"
                    color="dark"
                    align="center"
                    sx={{

                        fontSize: 28,
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        fontFamily: 'righteous',
                    }}
                >✧ ERROR 404 ✧
                </Typography>
                <Typography
                    variant="h4"
                    component="h2"
                    color="dark"
                    align="center"
                    sx={{
                        '@media screen and (max-width: 375px)': {
                            width: 300,
                            fontSize: 30
                        },
                        "@media screen and (min-width: 376px) and (max-width: 767px)": {
                            width: 350,
                        },
                        '@media screen and (min-width: 767px)': {
                            width: 500
                        },
                        '@media screen and (min-width: 991px)': {
                            width: 900,
                        }
                    }}
                >
                    La ruta que intentas consultar no existe (๑◕︵◕๑)
                </Typography>
                <Button
                    variant="contained"
                    align="center"
                    component={Link}
                    to="/"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: "center",
                        maxWidth: '30px',
                        maxHeight: '50px',
                        minWidth: '150px',
                        minHeight: '30px',
                        color: "white",
                        fontFamily: 'righteous',
                        mt: 2,
                    }}>Volver a inicio
                </Button>
            </div>
        </Container>
    )
}