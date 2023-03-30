import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function FAButton() {
    return (
        <Box sx={{ '& > :not(style)': {} }}>
            <Fab
                component={Link}
                to="/instagram"
                color="primary"
                aria-label="like">
                <InstagramIcon
                    sx={{ color: "white" }}
                />
            </Fab>
        </Box>
    );
}