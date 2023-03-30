import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <Container maxWidth="md" sx={{ py: 2 }}>
            <h1 className="mb-4">ERROR 404: <br></br>La ruta que intentas consultar no existe U.u</h1>
            <Link to="/" className="text-black ms-3 text-decoration-underline">
                Volver a inicio
            </Link>
        </Container>
    )
}