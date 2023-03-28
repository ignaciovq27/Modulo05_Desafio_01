import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            <h1 className="mb-4">ERROR 404: <br></br>La ruta que intentas consultar no existe U.u</h1>
            <Link to="/" className="text-black ms-3 text-decoration-underline">
                Volver a inicio
            </Link>
        </>
    )
}