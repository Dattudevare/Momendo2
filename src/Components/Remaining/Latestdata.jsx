import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import blog from "../Images/blog.jpg"

function Latestdata() {
    return (
        <Container maxWidth sx={{ mb: "60px" }}>
            <Box component={"row"} sx={{ display: { sx: "block", md: "flex", lg: "block" }, mb: "60px", color: "#fff" }} >
                <Typography variant='h4' textAlign={"center"} fontWeight={"bold"} mt={"25px"} mb={"20px"}>
                    LATEST BLOG
                </Typography>
                <Typography variant='body1' sx={{ px: "300px", display: { xs: "none", sm: "none", md: "block" } }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, odio laboriosam. Perspiciatis qui distinctio repellat a aspernatur mollitia alias non illo ratione, tempora perferendis obcaecati. Quidem error reiciendis culpa vitae?</Typography>

            </Box>
            <Box sx={{ display: { xs: "block", md: "flex" }, marginLeft: "20px", color: "#fff" }}>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                    <Box>
                        <img src={blog} alt="" width={"200px"} height={"230px"} />
                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                        <Date></Date>
                        <Typography variant='h5' marginTop={"15px"}>
                            10 THINGS TO DO BEFORE TRAVEL
                            <Typography className='line2'></Typography>
                            <Typography sx={{ display: { xs: "none", md: "block", lg: "flex" } }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium. Et similique perspiciatis ipsam quas, obcaecati deserunt qui ea assumenda doloribus deleniti mollitia illum iste eaque unde dignissimos alias dolorem!
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPwuHm5ho062-bf8e4giWf5zQ8EY2-NP76A&usqp=CAU" alt="" width={"200px"} height={"230px"} />
                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                        <Date></Date>
                        <Typography variant='h5' marginTop={"15px"} sx={{ color: "white" }}>
                            10 THINGS TO DO BEFORE TRAVEL
                            <Typography className='line2'></Typography>
                            <Typography sx={{ display: { xs: "none", md: "block", lg: "flex" } }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium. Et similique perspiciatis ipsam quas, obcaecati deserunt qui ea assumenda doloribus deleniti mollitia illum iste eaque unde dignissimos alias dolorem!
                            </Typography>
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Container>
    )
}

export default Latestdata