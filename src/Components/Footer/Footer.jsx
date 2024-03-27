import { Box, Container, Grid, IconButton, ListItem, ListItemText, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TwitterIcon from '@mui/icons-material/Twitter';
import momo from "../Images/momo.png"
import React from 'react'

function Footer() {
  return (
    <>
      <Container sx={{ display: "flex", background: "black" }} maxWidth position={"relative"}>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} xl={3} lg={3} mb={4} >
            <Grid  >
              <Typography variant='h5' color={"goldenrod"} mt={5} mb={4} ml={"20px"}>
                Top Countries
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United Kingdom</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Thailand</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Malesia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}>Germoney</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Italy </span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Denmark</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Australia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LanguageIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>


            </Grid>

          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3} lg={3} mb={4} >
            <Grid  >
              <Typography variant='h5' color={"goldenrod"} mt={5} mb={4} ml={"60px"}>
                Top Cities
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> New York</b>
                  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> London</b>
                  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Bankok</b>
                  <span style={{ color: "darkgray" }}> Thailand</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Denmark</b>
                  <span style={{ color: "darkgray" }}> Copenhagen</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> London</b>
                  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />

                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Orlando</b>
                  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Paris</b>
                  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Dubai</b>
                  <span style={{ color: "darkgray" }}> United Arab Emiraties</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Singapoor</b>
                  <span style={{ color: "darkgray" }}> Singapoor</span></b>
              </Typography>

              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>
                <LocationOnIcon />
                <b style={{ marginTop: "3px", color: "darkgray" }}>
                  &nbsp; Flights to  <b style={{ color: "white" }}> Istabul </b>
                  <span style={{ color: "darkgray" }}> Turkey</span></b>
              </Typography>


            </Grid>

          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3} lg={3} mb={4} >
            <Grid  >
              <Typography variant='h5' color={"goldenrod"} mt={5} mb={4} textAlign={"center"} ml={"160px"}>
                Internationl Sites
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP._0fajugRjZ3E05SRnJ1f5QHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flags" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United States</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.U-h9wYdOSH047roWjY_1TgAAAA?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United Kingdom</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.87dHfGCqoXunUKG0wo92HQHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.n794btSVyiCnZ1w9XyrRXwHaGL?w=222&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Thailand</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.Pd92EDfmFLXPmPDiwUAMYAHaHa?w=189&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Malesia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.Uq7E27BGw7PEd1lfaFGcAQHaEo?w=310&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}>Germoney</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.bJtp91pS5TKvoWc09mMtZwHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Italy </span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.cZf3mNSD_CrpvyGQFAhu7AHaE5?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Denmark</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.XG-GkbWheyYNCbARTFAOogHaD0?w=304&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Australia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <img src="https://th.bing.com/th/id/OIP.87dHfGCqoXunUKG0wo92HQHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="flag" width={"33px"} />
                <b style={{ marginTop: "3px", marginLeft: "10px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>


            </Grid>

          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3} mt={10} lg={3} mb={4} >
            <Grid  >

              <Typography variant='body2' color={"white"} display={"flex"} pb={5} >
                {/* <LanguageIcon /> */}
                {/* <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United aaa</span></b> */}
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> United Kingdom</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Thailand</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Malesia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}>Germoney</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Italy </span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Denmark</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> Australia</span></b>
              </Typography>
              <Typography variant='body2' color={"white"} display={"flex"} paddingTop={"6px"}>

                <LocalAirportIcon />
                <b style={{ marginTop: "3px" }}>&nbsp; Flights to  <span style={{ color: "darkgray" }}> France</span></b>
              </Typography>


            </Grid>

          </Grid>
        </Grid>



      </Container>
      <Container maxWidth sx={{ background: "black", color: "white", padding: "20px 5px 30px 30px" }}>
        <Grid container>
          <Grid item paddingLeft={"20px"} marginLeft={"20px"}>
            <Grid>
              <img src={momo} alt=" momo logo" width={"70px"} style={{ position: "absolute", marginTop: "-10px", display: { xs: "none", lg: "block" } }} />
            </Grid>

            <ListItem  sx={{ paddingLeft: "20px", marginLeft: "90px",display:{xs:"block" ,md:"flex"}}}>
              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "}  }}>About Us </ListItemText>

              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "} }}>Jobs</ListItemText>

              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "} }}>Press</ListItemText>

              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "} }}>Artificial</ListItemText>

              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "} }}>Terms</ListItemText>

              <ListItemText sx={{ marginLeft: "10px" ,marginTop:{xs:"15px "}}}>Privacy Policy</ListItemText>

              <ListItemText sx={{ marginLeft: "10px" ,marginTop:{xs:"15px "}}}>Cookies</ListItemText>

              <ListItemText sx={{ marginLeft: "10px" ,marginTop:{xs:"15px "}}}>Artificial</ListItemText>

              <ListItemText sx={{ marginLeft: "10px" ,marginTop:{xs:"15px "}}}>Apps </ListItemText>

              <ListItemText sx={{ marginLeft: "10px",marginTop:{xs:"15px  "} }}>Help</ListItemText>

            </ListItem>
          </Grid>
          <Grid sx={{ position: "absolute", marginLeft: "1000px", display: { xs: "none", lg: "block" } }} >
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}

export default Footer;