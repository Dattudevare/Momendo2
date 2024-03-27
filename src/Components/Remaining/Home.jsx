import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import banner from "../Images/banner.png"
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import KingBedIcon from '@mui/icons-material/KingBed';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Fun from './Fun';
import PopularDest from './PopularDest';
import Estimates from './Estimates';
import Latestdata from './Latestdata';

function Home() {
  return (
    <>
      <Container maxWidth sx={{
        backgroundImage: `url(${banner})`,
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", mt: "64px", width: "100%", height: "840px",
      
    
        
      }}

      >
        <Box position={"absolute"} top={"170px"} left={"150px"} sx={{ display: { sx: "none" } }}>
          <Typography variant='h2' fontWeight={"bold"} sx={{ fontSize: { xs: "20px", md: "25px", sm: "25px", lg: "55px" }, direction: { sx: "column", md: "row" }, }}>"
            The Best place to find <br />the Cheapest Airfares "
          </Typography>
          <Typography variant='h4' mt={'15px'} textAlign={"center"} sx={{ fontSize: { xs: "20px", md: "25px", sm: "25px" } }}>
            ~ every single time
          </Typography>
        </Box>

        <Container sx={{ backgroundColor: "#5E307A",
        marginTop:{xs:"-335px"},
         position: "absolute",
         top: "940px",
        marginRight:{xs:"50px"}, 
        marginLeft: { lg: "130px", xl: "130px", md: "-30px" ,sm:"-25px",xs:"-20px"}, 
        width: "100%",height:{xs:"200px",
        marginBotto:{xs:"-40px"}
        }}}>
          <Box >
            <Button sx={{
              marginLeft: "15px",
              backgroundColor: "red", color: "white",
              display: {
                xs: "block",
                md: "inline-block",
                sm: "inline-block"
              }

              , marginTop: { xs: "20px" }
            }} variant='contained'>
              <LocalAirportIcon
              /> Flights</Button>

            <Button sx={{
              marginLeft: "15px",
              backgroundColor: "blue", color: "white"
              , display: {
                xs: "block",
                md: "inline-block",
                sm: "inline-block"
              }
              , marginTop: { xs: "20px" }
            }} variant='contained'>
              <KingBedIcon
              />Hotels</Button>

            <Button sx={{
              marginLeft: "15px",
              backgroundColor: "blue", color: "white"
              , display: {
                xs: "block",
                md: "inline-block",
                sm: "inline-block"
              }
              , marginTop: { xs: "20px" }
            }} variant='contained'>
              <TimeToLeaveIcon
              />Cars</Button>
          </Box>
          <Grid container sx={{ marginTop: "20px" }} >
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ background: "white", marginLeft: "5px", }}>
              <LocationOnIcon sx={{ marginTop: "14px" }} />
              <TextField id="outlined-basic"
                label="Entr Origin city"
                variant="standard"

                sx={{ border: "none", outline: "none" }}

              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ background: "white", marginLeft: "5px", }}>
              <LocationOnIcon sx={{ marginTop: "14px" }} />
              <TextField id="outlined-basic"
                label="Enter your destination"
                variant="standard"

                sx={{ border: "none", outline: "none" }}

              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ background: "white", marginLeft: "5px", width: "100px" }}>
              <LocationOnIcon sx={{ marginTop: "14px" }} />
              <TextField id="outlined-basic" x
                variant="standard"

                sx={{ border: "none", outline: "none" }}

              />
            </Grid>
            <Grid sx={{ display: { xs: "block",md:"none", lg: "block" } }}>
              <Button sx={{
                background: "red", borderRadius: "50%",
                width: "80px", height: "80px",
                position: "absolute", top: "40px",
                // marginLeft: "100px",
                marginLeft:{xs:"200px",lg:"100px",mt:{xs:"60px"}}
              }}
              >Search</Button>
            </Grid>

          </Grid>
          <Grid item sx={{ margin: "20px 10px", display: { xs: "none", md: "flex" } }}>
            <Grid marginLeft={"10px"}>
              <select>
                <option value="">Select city</option>
                <option value="">Mumbai</option>
                <option value="">Delhi</option>
                <option value="">Pune</option>
              </select>
            </Grid>
            <Grid marginLeft={"10px"}>
              <select>
                <option value="">Select city</option>
                <option value="">Mumbai</option>
                <option value="">Delhi</option>
                <option value="">Pune</option>
              </select>
            </Grid>
            <Grid marginLeft={"10px"}>
              <select>
                <option value="">Select city</option>
                <option value="">Mumbai</option>
                <option value="">Delhi</option>
                <option value="">Pune</option>
              </select>
            </Grid>
            <Grid marginLeft={"30px"}>
              <input type='checkbox'></input> Direct Flights only
            </Grid>
            <Grid marginLeft={"10px"}>
              <input type='checkbox'></input> Airport nearby
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Fun />
      <PopularDest />
      <Estimates />
      <Latestdata />
    </>
  )
}

export default Home