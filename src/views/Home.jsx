import { Container } from "@mui/system";
import { Typography } from '@mui/material';
import MyCard from "../components/MyCard";
import FAButton from "../components/FAButton";


export default function Home() {

    return (<Container
        maxWidth="md"
        align="center"
        sx={{
            py: 2,
            display: { xs: 'flex', md: 'flex' },
            justifyContent: "center",
            flexDirection: 'column'
        }}>
        <div>
            <Typography
                variant="h4"
                component="h2"
                color="dark"
                align="center"
            >
                Bienvenido a&nbsp;<span>
                    <Typography
                        variant="h4"
                        component="span"
                        color="dark"
                        align="center"
                        sx={{
                            display: { xs: 'flex', sm: "inline", md: 'inline' },
                            justifyContent: "center",
                            flexDirection: 'column',
                            fontSize: 28,
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            fontFamily: 'righteous',
                        }}
                    >HAPPY-CAKE✧°･
                    </Typography>
                </span>
            </Typography>

            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                    display: { xs: 'flex', md: 'inline' },
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 500,
                    py: 1,
                    '@media screen and (max-width: 375px)': {
                        width: 200
                    },
                    '@media screen and (min-width: 767px)': {
                        width: 700
                    }
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
            <MyCard />
            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                    display: { xs: 'flex', md: 'flex' },
                    justifyContent: "center",
                    fontSize: 16,
                    py: 2,
                    fontWeight: 500,
                }}
            >Visita nuestras últimas publicaciones y etiquetanos en tus redes (◠‿◠✿).
            </Typography>
            <FAButton />
        </div>
    </Container>
    )
}