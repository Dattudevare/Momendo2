import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import image1 from "../Images/plane3.jpg"

function Plane() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "400px",
                position: "relative"

            }}>
                <Container sx={{ position: "absolute" }} >
                    <Box sx={{ position: "absolute", marginTop: "300px" }}>
                        <Box display={"flex"}>
                            <Typography variant='h5' color={"black"} fontWeight={"bold"} mt={"-40px"}>
                                SUBSCRIBE FOR OUR TRAVEL NEWSLATER
                                <Typography variant='body1' fontWeight={"bold"} sx={{ display: { xs: "none", lg: "flex" } }} >
                                    joun our community of over 30000 global leaders who recieve <br />
                                    email fields with news promotions and other good stuff from G adventures
                                </Typography>
                            </Typography>
                            <Typography sx={{ marginLeft: { xs: "10px", sm: "50px", lg: "195px" }, marginTop: "-40px", marginRight: { xs: "100px" } }}>
                                <TextField type='email' placeholder='Enter your email' sx={{ backgroundColor: "white" }} />
                                <Button variant='contained' size='large' sx={{ background: "white", color: "black", marginLeft: "20px", marginTop: "5px" }}>Search</Button>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default Plane