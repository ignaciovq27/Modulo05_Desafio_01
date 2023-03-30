import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Gallery() {

    return (
        <Box
            align="center"
            sx={{
                m: 0,
                p: 0,
                width: 1000,
                height: 550,
                overflowY: 'clip',
                overflowX: 'clip',
                py: 1,
                display: { xs: 'flex', md: 'flex' },
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column',
                '@media screen and (max-width: 375px)': {
                    width: 270
                },
                '@media screen and (max-width: 767px)': {
                    width: 330
                },
                '@media screen and (min-width: 767px)': {
                    width: 700,
                    height: 650,
                },
                '@media screen and (min-width: 991px)': {
                    width: 900,
                    height: 650,
                },
                '@media screen and (min-width: 1200px)': {
                    width: 1140,
                    height: 650,
                }
            }}>
            <ImageList
                sx={{
                    width: 900,
                    height: 550,
                    '@media screen and (max-width: 767px)': {
                        width: 270,
                    },
                    '@media screen and (min-width: 767px)': {
                        width: 710,
                    },
                    '@media screen and (min-width: 991px)': {
                        width: 900,
                        height: 650,
                    },
                    '@media screen and (min-width: 1200px)': {
                        width: 1140,
                        height: 650,
                    }
                }}
                variant="quilted"
                cols={4}
                gap={8}
                rowHeight={121}
            >
                {cakesData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 3} rows={item.rows || 3}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar position="bottom" title={item.author} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const cakesData = [

    {
        img: "/src/assets/imgs/cake_01.png",
        title: 'cake_01',
        author: 'Frutos Rojos Manjar',
        rows: 2,
        cols: 1,
    },
    {
        img: "/src/assets/imgs/cake_02.png",
        title: 'cake_02',
        author: 'Moka Almendras Bombón',
        rows: 2,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_03.png",
        title: 'cake_03',
        author: 'Chocolate Belga',
        rows: 2,
        cols: 1,
    },
    {
        img: "/src/assets/imgs/cake_04.png",
        title: 'cake_04',
        author: 'Tres Leches de pascua',
        rows: 3,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_05.png",
        title: 'cake_05',
        author: 'Volcán Chocoplate',
        rows: 4,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_06.png",
        title: 'cake_06',
        author: 'Tres Leches Frambueza',
        rows: 2,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_07.png",
        title: 'cake_07',
        author: 'Red Velvet Macarons',
        rows: 2,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_08.png",
        title: 'cake_08',
        author: 'Tiramisú Special',
        rows: 3,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_09.png",
        title: 'cake_09',
        author: 'Frambueza Chocolate Blanco',
        rows: 2,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_10.png",
        title: 'cake_10',
        author: 'Frutilla Soft Chocolate',
        rows: 2,
        cols: 1,
    },
    {
        img: "/src/assets/imgs/cake_11.png",
        title: 'cake_11',
        author: 'Chocolate Crema Helado',
        rows: 2,
        cols: 2,
    },
    {
        img: "/src/assets/imgs/cake_12.png",
        title: 'cake_12',
        author: 'Naranja chocolate',
        rows: 2,
        cols: 1,
    },
];