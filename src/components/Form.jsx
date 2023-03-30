import { Container } from "@mui/system";
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';

export default () => {
    return (
        <Container
            maxWidth="md"
            align="center"
            sx={{
                py: 2,
                display: { xs: 'flex', md: 'flex' },
                justifyContent: "center",
                flexDirection: 'column',
                '@media screen and (max-width: 576px)': {
                    width: 300,
                },
                "@media screen (min-width: 577px) and (max-width: 767px)": {
                    width: 300,
                },
                '@media screen and (min-width: 767px)': {
                    width: 700,
                },
                '@media screen and (min-width: 991px)': {
                    width: 900,
                }
            }}>
            <div>
                <form action="/send" sx={{
                    '@media screen and (max-width: 576px)': {
                        width: 200,
                    },
                    "@media screen (min-width: 577px) and (max-width: 767px)": {
                        width: 300,
                    },
                    '@media screen and (min-width: 767px)': {
                        width: 500,
                    },
                    '@media screen and (min-width: 991px)': {
                        width: 900,
                    }
                }}>
                    <Typography
                        component="h3"
                        align="center"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: "center",
                            fontSize: 16,
                            fontWeight: 500,
                            pt: 2,
                            pb: 1
                        }}
                    >📧 Correo:
                    </Typography>
                    <TextField
                        align="center"
                        id="outlined-error-helper-text"
                        // id="outlined-basic"
                        label="nombre@ejemplo.com"
                        variant="outlined"
                        required
                        // helperText="Incorrect entry."
                        // error
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: "center",
                            '@media screen and (max-width: 576px)': {
                                width: '30ch'
                            },
                            '@media screen and (min-width: 767px)': {
                                width: '40ch'
                            },
                            '@media screen and (min-width: 991px)': {
                                width: '60ch'
                            }
                        }}
                    />
                    {/* <br></br> */}
                    <Typography
                        component="h3"
                        align="center"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: "center",
                            fontSize: 16,
                            fontWeight: 500,
                            pt: 2,
                            pb: 1
                        }}
                    >💬 Descripción:
                    </Typography>
                    <div>
                        <TextareaAutosize
                            className="textarea-style"
                            align="center"
                            minRows={10}
                            maxRows={60}
                            required
                            // aria-label="empty textarea"
                            // variant="outlined"
                            placeholder="Escribe tu mensaje..."
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                justifyContent: "center",
                            }}
                        />
                    </div>
                    <Button
                        variant="contained"
                        align="center"
                        type="submit"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: "center",
                            maxWidth: '30px',
                            maxHeight: '50px',
                            minWidth: '100px',
                            minHeight: '30px',
                            color: "white",
                            fontFamily: 'righteous',
                            mt: 2
                        }}>Enviar
                    </Button>
                </form>
            </div>
        </Container>
    )
}