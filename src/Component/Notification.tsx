import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import BasicPopUp from './ReusableComponent/BasicPopUp';
import CloseIcon from '@mui/icons-material/Close';
import CustomButtom from './ReusableComponent/CustomButtom';

interface NotificationProps {
  open: boolean;
  handleClose: () => void;
}

const Notification: FC<NotificationProps> = ({ open, handleClose }) => {
  return (
    <BasicPopUp open={open} handleClose={handleClose}>
      <Box sx={{ width: "400px", height: "100%" }}>
        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ color: "#202020", fontSize: "24px" }}>Notification</Typography>
          <CloseIcon onClick={handleClose} sx={{
            color: "#000000", cursor: "pointer", transition: "transform 0.2s ease-in-out",
            '&:hover': {
              transform: 'scale(1.2)'

            }
          }} />
        </Box>
        <Box sx={{justifyContent: "flex-end" , display: "flex"}}>
          <CustomButtom
            label='Read And Understood'
            hoverColor='#069FFF'
            style={{
              backgroundColor: "#069FFF"
            }}

          />
        </Box>
      </Box>
    </BasicPopUp>
  );
};

export default Notification;
