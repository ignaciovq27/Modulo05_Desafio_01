import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function MyCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Red Velvet Macarons"
                    subheader="Torta de aniversario, 2023"
                />
                <CardMedia
                    component="img"
                    height="130"
                    image="/imgs/cake_07.png"
                    alt="cake_07"
                />
                <CardContent >
                    <Typography variant="body2" color="text.secondary">
                        Bizcocho de chocolate, relleno con crema chantilly y pedacitos pequeños de frutilla. Bañado con una ganache de chocolate y decorada con frutillas cortadas a la mitad, acompañado con almendras achocolatadas...
                    </Typography>
                </CardContent>
                <CardActions
                    align="center"
                    sx={{
                        py: 2,
                        display: { xs: 'flex', md: 'flex' },
                        justifyContent: "center",
                    }}
                >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}