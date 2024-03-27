import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import logo from "../Images/logo.png"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import data from "../Utils/Data.json"
import "../Style/Header.css"

function Header() {

    const [open1, setopen1] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar position='fixed' >

                <Toolbar>
                    <Typography justifyContent={"space-between"}>

                        <Typography variant='h3' display={"flex"}>
                            <IconButton onClick={() => setopen1(!open1)} sx={{ display: { md: "none" } }}>
                                <MenuIcon sx={{ color: "#fff" }}


                                />
                            </IconButton>

                            <img src={logo} alt="logo" className='imagess' style={{ width: "14%", height: "14%", marginTop: "8px" }} />
                            <Typography sx={{ justifyContent: "space-between", marginLeft: "100px", display: { xs: "none", sm: "block", } }} mt={1} >
                                {
                                    data.map((item, index) => {
                                        return (

                                            <Link to={item.link} item={item} key={index}><Button variant='outlined' sx={{ color: "white" }}>{item.name}</Button></Link>
                                        )

                                    })
                                }

                            </Typography>
                            <Typography justifyContent={'space-between'} sx={{ marginLeft: "300px", display: { xs: "none", md: "flex" } }}>
                                <Button
                                    id="demo1"
                                    aria-controls={open ? 'menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ color: "white" }}
                                >
                                    <LanguageIcon />
                                    Language
                                </Button>
                                <Menu
                                    id="menu"
                                    aria-labelledby="demo1"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>English</MenuItem>
                                    <MenuItem onClick={handleClose}>Hindi</MenuItem>
                                    <MenuItem onClick={handleClose}>Mandarin</MenuItem>
                                    <MenuItem onClick={handleClose}>Russian</MenuItem>
                                </Menu>
                                <Button sx={{ color: "white" }}> <AccountCircleIcon /> <Link to="/Loginform" style={{textDecoration:"none",color:"white"}}>Log in</Link> </Button>

                            </Typography>
                    
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open1 ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open1 ? 'true' : undefined}

                            >
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"

                                open={open1}
                                onClose={() => setopen1(!open1)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >

                                <Box sx={{ width: 200, height: "50vh", display: { sx: "block" } }}>
                                    {
                                        data.map((items) => {
                                            return (
                                                <Button sx={{ marginLeft: "40px", textAlign: "center" }}>

                                                    <Link to={items.link} style={{ display: "block", textDecoration: "none", marginLeft: "5px", paddingTop: "20px" }} >{items.name}</Link>
                                                </Button>
                                            )

                                        })
                                    }
                                </Box>

                            </Menu>
                        </Typography>
                    </Typography>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header