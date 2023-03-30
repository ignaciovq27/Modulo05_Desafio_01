import { Container } from "@mui/system";
import { Typography } from '@mui/material';
import Form from "../components/Form";

// import { FormHelperText } from '@mui/material';


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
                    Cuéntanos, ¿En que te podemos ayudar?
                </Typography>
                <Form />
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
                >･°✧ ヽ(〃＾▽＾〃)ﾉ ✧°･
                </Typography>
            </div>
        </Container>
    )
}