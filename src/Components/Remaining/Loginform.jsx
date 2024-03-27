import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../Style/Loginform.css"

function Loginform() {
    const [action, setActon] = useState("Login")
    return (
        <>




            <div className="container classs1">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs" >
                    {action === "Login" ? <div></div> : <div className="input">

                        <div><i className="fa-solid fa-user class1"></i></div>
                        <input type="text" placeholder='name' />
                    </div>}

                    <div className="input">



                        <div>
                            <i className="fa-solid fa-envelope class1"></i>
                        </div>                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className="input" >


                        <div>
                            <i className="fa-solid fa-lock class1"></i>

                        </div>                        <input type="password" placeholder='password' />
                    </div>
                    {action == "Sign Up" ? <div></div> : <div className="fotgot-password">Lost Password? <span>click here</span></div>
                    }
                    <div>
                    </div>
                    <div className="subit-container">
                        <div className={action == "Login" ? "submit gray" : "submit"} onClick={() => { setActon("Sign Up") }}>Sign Up</div>
                        <div className={action == "Sign Up" ? "submit gray" : "submit"} onClick={() => { setActon("Login") }}>Log in</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginform