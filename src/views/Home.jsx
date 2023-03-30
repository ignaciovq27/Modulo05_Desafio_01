//components
import { Container } from "@mui/system";
import { Typography } from '@mui/material';

export default function Home() {

    return (
        <Container maxWidth="md" sx={{ py: 2 }}>
            <div>
                <Typography
                    variant="h4"
                    component="h2"
                    color="dark"
                    align="center"
                >
                    Bienvenido a&nbsp;<span><Typography
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
                    >HAPPY-CAKE
                    </Typography></span>
                </Typography>
            </div>

            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 500,
                    py: 1
                }}
            >(ﾉ◕ヮ◕)ﾉ*:･°✧ El lugar de los pasteles felices✧°･
            </Typography>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    justifyContent: "center",
                    fontSize: 40, py: 1,
                }}
            >🎂 🧁 🍥
            </Typography>

        </Container>
    )
}