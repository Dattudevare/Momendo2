import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import img from "../Images/tmple.jpg"
import RoundaboutLeftIcon from '@mui/icons-material/RoundaboutLeft';
import SailingIcon from '@mui/icons-material/Sailing';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import CloudIcon from '@mui/icons-material/Cloud';
import HikingIcon from '@mui/icons-material/Hiking';
import ForestIcon from '@mui/icons-material/Forest';
import Plane from './Plane';

function Fun() {
    return (
        <>
            <Container maxWidth sx={{
                background: `url(${img})`,
                width: "100%",
                // height: "500px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                position: "relative",
                // backgroundAttachment: "fixed",
                height:{xs:"2100px",sm:"1600px",md:"1050px",lg:"500px"},
            

                

            }}>
                    <Typography variant='h4' sx={{marginLeft:"550px",display:{xs:"none",lg:"block"},
                     alignItems:"center",fontWeight:"bold", color:"white"}}>
                        SOME FUN WE COVERED
                    </Typography>

                <Grid container sx={{ display: 'flex', paddingLeft: "20px", marginTop:"35px" ,marginLeft:{lg:"15px"}}}>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={2} xl={2}
                        height={"270px"}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}

                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <PedalBikeIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                570 - M
                            </Typography>
                            <Typography variant='body1'>CYCLING TRACK</Typography>
                        </Grid>
                    </Grid>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={1.9} xl={2}
                        height={"270px"}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px", marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <RoundaboutLeftIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                470 - M
                            </Typography>
                            <Typography variant='body1'>DISTANCE COVERED</Typography>
                        </Grid>
                    </Grid>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={1.9} xl={2}
                        height={"270px"}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px", marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <HikingIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                4770 - M
                            </Typography>
                            <Typography variant='body1'>ALITUTUDE HIKED</Typography>
                        </Grid>
                    </Grid>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={1.9} xl={2}
                        height={"270px"}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px", marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <SailingIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                5710 - M
                            </Typography>
                            <Typography variant='body1'>SAILING DISTANCE</Typography>
                        </Grid>
                    </Grid>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={1.9} xl={2}
                        height={"270px"}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px", marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <CloudIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                570 - M
                            </Typography>
                            <Typography variant='body1'>SPEND ADVANTURE</Typography>
                        </Grid>
                    </Grid>
                    <Grid width={"150px"}
                        xs={12} sm={6} md={4} lg={1.9} xl={2}
                        textAlign={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        height={"270px"}
                        sx={{
                            background: "black", opacity: "0.7",
                            color: "#fff",
                            textAlign: "center",
                            marginTop: "70px", marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                        <Grid>
                            <ForestIcon sx={{ fontSize: "140px" }} />
                            <Typography variant='h6'>
                                490 - M
                            </Typography>
                            <Typography variant='body1'>JUNGEL DISTANCE</Typography>
                        </Grid>
                    </Grid>

                </Grid>


            </Container>

<Plane/>
        </>
    )
}

export default Fun;