import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Gallery from "../components/Gallery";

export default () => {

    return (
        <Container
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
                    ¡Nuestros pastelitos!
                </Typography>
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 500,
                        pt: 1
                    }}
                >･°✧ Para alegrar tus días especiales  (◍•ᴗ•◍)❤✧°･
                </Typography>
                <Gallery />
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 500,
                        pt: 1
                    }}
                >･°✧ Son deliciosos  」(￣▽￣」)✧°･
                </Typography>
            </div>
        </Container>
    )
}