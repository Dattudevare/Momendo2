import { Box, Button, Container, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../Style/Estimates.css"
import templ44 from "../Images/temple111.png"




function Estimates() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [Open44, setOpen2] = useState(null);


    const open1 = Boolean(Open44)
    const handleClick1 = (event) => {
        setOpen2(event.currentTarget);
    };
    const handleClose1 = () => {
        setOpen2(null);
    };
    return (
        <>
            <Container maxWidth sx={{
                backgroundColor: "#5f34d8",
                width: "100%",
                height: "450px"

            }} >

                <Box sx={{ position: "absolute", marginTop: "50px", marginLeft: "100px" }}>
                    <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} mt={7}> GET QUICK A ESTIMATES !</Typography>
                    <Typography variant='body1' sx={{ xs: "none", md: "block" }}>GET A PROFESTIONAL HELP !</Typography>
                    <h1 className='horizontal-line'></h1>
                </Box>
                <Box sx={{
                    display: { lg: "flex", md: "flex", xl: "flex", xs: "block" }
                    , marginLeft: { xs: "60px", sm: "230px", md: "10px" },
                    marginTop: { xs: "140px", lg: "300px" },
                    position: "absolute", padding: "10px"

                }}>
                    <div>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: "black", background: "white", border: "2px solid black", padding: "16px 23px", display: { xs: "block", md: "flex" } }}
                        >
                            select Purpose
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}

                        >
                            <MenuItem onClick={handleClose}>Tourist</MenuItem>
                            <MenuItem onClick={handleClose}>Sport</MenuItem>
                            <MenuItem onClick={handleClose}>Eductions</MenuItem>
                            <MenuItem onClick={handleClose}>Business</MenuItem>
                        </Menu>
                        <Button
                            id="button"
                            aria-controls={open1 ? 'menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? 'true' : undefined}
                            onClick={handleClick1}
                            sx={{
                                color: "black", background: "white",
                                border: "2px solid black",
                                padding: "16px 23px",
                                display: { xs: "block", sm: "none" }, md: "flex", lg: "inline-block"
                            }}
                        >
                            select members
                        </Button>
                        <Menu
                            id="menu"
                            aria-labelledby="button"
                            anchorEl={Open44}
                            open={open1}
                            onClose={handleClose1}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}

                        >
                            <MenuItem onClick={handleClose1}>1-8</MenuItem>
                            <MenuItem onClick={handleClose1}>8-16</MenuItem>
                            <MenuItem onClick={handleClose1}>Groups</MenuItem>
                            <MenuItem onClick={handleClose1}>Family</MenuItem>
                        </Menu>
                    </div>

                    <Box>
                        <TextField type='date' placeholder='select journy date' sx={{ background: "white", display: { xs: "block", md: "inline-block" }, border: "2px solid black", }}></TextField>

                    </Box>
                    <Box>
                        <TextField type='email' placeholder='Enter your Email ..' sx={{ background: "white", display: { xs: "block", md: "inline-block" }, border: "2px solid black" }}></TextField>

                    </Box>
                    <Box>
                        <Button size='large' variant='outlined' sx={{ backgroundColor: "yellow", py: "15px", display: { xs: "block", md: "inline-block" }, marginLeft: "5px" }}>CALLCULATE NOW</Button>

                    </Box>
                </Box>
                <Box sx={{
                    marginTop: "10px", marginLeft: "1000px", display: {
                        xs: "none",
                        md: "flex",
                        lg: "block"
                    }
                }}>
                    <img src={templ44} alt="" width={"100%"} height={"438px"} />


                </Box>
            </Container>


        </>)
}

export default Estimates;