import { Container } from "@mui/system";
import Product from "../components/Product";

export default () => {

    return (
        <Container maxWidth="md" sx={{ py: 2 }}>
            <Product />
        </Container>
    )
}