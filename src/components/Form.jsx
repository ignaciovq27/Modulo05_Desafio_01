import { Container } from "@mui/system";
import { TextField, Typography } from '@mui/material';
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
                flexDirection: 'column'
            }}>
            <div>
                <form action="/send">
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
                            width: '60ch'
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
                    >📧 Descripción:
                    </Typography>
                    <div>
                        <TextareaAutosize
                            align="center"
                            minRows={10}
                            maxRows={20}
                            required
                            // aria-label="empty textarea"
                            // variant="outlined"
                            placeholder="Escribe tu mensaje..."
                            style={{ width: 550 }}
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                justifyContent: "center",
                                width: '60ch',
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
                        }}>Enviar </Button>
                </form>
            </div>
        </Container>
    )
}