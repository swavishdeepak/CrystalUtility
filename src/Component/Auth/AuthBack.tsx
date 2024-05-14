import { Box, Typography } from '@mui/material'
import React from 'react'
import authImg from "../../assets/authImg.svg"

const AuthBack = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    width: "70%",
                    display: "flex",
                }}
            >
                <Box
                    component="img"
                    src={authImg}
                    sx={{
                        backgroundPosition: "left",
                        backgroundSize: "cover",
                        //justifyContent: "left",
                        objectFit: "cover",
                        height: "100%",
                        left: 0,
                        top: 0,
                        width: "100%",
                        "@media (max-width: 600px)": {
                            width: "100%",
                        },
                    }}
                    alt="background"
                />
            </Box>
           


        </Box>
    )
}

export default AuthBack
