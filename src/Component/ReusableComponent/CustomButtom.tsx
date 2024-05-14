import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface CustomButtomProps extends ButtonProps {
    label: string,
    style?: React.CSSProperties;
    hoverColor?: string;
    onClick?: () => void

}

const CustomButtom: React.FC<CustomButtomProps> = ({ label, hoverColor, onClick, style, ...props }) => {
    return (
        <Button
            sx={{
                backgroundColor: "#fff",
                color: "#fff",
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "12px",
                transition: "transform 0.2s, box-shadow 0.2s",
                "@media(max-width: 600px)": {
                    fontSize: "10px",
                    height: "1.5rem",
                    borderRadius: "10px",
                },
                '&:hover': {
                     trsnform: 'scale(1.2)',
                     boxShadow: "0px 8px 8px rgba(0, 0.25, 0.25, 0.25)",
                     backgroundColor: hoverColor
                },
               
                ...style,
            }}
            {...props}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}

export default CustomButtom
