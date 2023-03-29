import { Box } from '@mui/material';
import { Typography } from '@mui/material';


export default function About() {

    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                color="dark"
                align="center"
                sx={{ pb: 2, }}

            >
                About
            </Typography>
            <Box sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                width: 800,
                height: 300,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                m: "auto",
            }}>
                About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti consectetur in eveniet quasi quae repellat dolore quas recusandae blanditiis dolor tempora ut autem hic, quam veniam cumque dolorum iure culpa, natus nisi. Veritatis error dolorem consequuntur perferendis. Iusto corporis natus itaque placeat doloribus modi distinctio nostrum repudiandae soluta a aliquid, deserunt culpa tenetur debitis ab voluptatum omnis qui consequuntur. Natus culpa quos molestias accusantium ab rem corrupti esse? Dignissimos nobis pariatur repellendus, distinctio, eaque voluptates aliquam doloremque dolores ipsum soluta voluptate odit corporis? Praesentium odio numquam expedita aut repudiandae iure. Repellat beatae natus dolor totam ea nulla! Sint, cumque dignissimos!
            </Box>
        </>

    )
}