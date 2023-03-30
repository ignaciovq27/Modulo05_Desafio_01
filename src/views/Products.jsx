import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Product from "../components/Product";

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
            </div>
        </Container>
    )
}