import { Container } from "@mui/system";
import { Typography } from '@mui/material';

export default () => {
    return (
        <Container maxWidth="md" sx={{py: 2}}>
            <Typography
                variant="h3"
                component="h2"
                color="dark"
                align="center"
            >
                Contact
            </Typography>
        </Container>
    )
}