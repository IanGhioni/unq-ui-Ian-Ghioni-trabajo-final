import { Box, Container } from "@mui/material"

function Barco({style}) {
    return(
        <Container>
            <Box className={style} draggable={true}></Box>
        </Container>
    )
}

export default Barco