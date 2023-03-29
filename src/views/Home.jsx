import { Container } from "@mui/system";
import { Typography } from '@mui/material';

export default function Home() {

    return (
        <Container maxWidth="md" sx={{ py: 2 }}>
            <Typography
                variant="h3"
                component="h2"
                color="dark"
                align="center"
            >
                Home
            </Typography>
        </Container>

    )
}