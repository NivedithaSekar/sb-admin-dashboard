import React from 'react';
import { Box, useTheme } from "@mui/material";
//import { tokens } from "../theme";

const ProgressBar = ({ progress = 50, size = "50" }) => {
  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  //const angle = progress * 100;
  const progressBarColor = (progress <=20)? theme.palette.error.main: 
                              (progress <=40)? theme.palette.warning.main: 
                                (progress <=60)? theme.palette.primary.light:
                                  (progress <=80)? theme.palette.info.main:
                                    (progress <=100)? theme.palette.success.main:'';
  return (
    <Box
      sx={{
        height: '10px',
        width: '100%',
        backgroundColor: theme.palette.neutral.light,
        borderRadius: '25px',
      }}
    >
        <Box sx={{
            width: `${progress}%`,
            height: '100%',
            borderRadius: '10px',
            backgroundColor: progressBarColor,
            backgroundSize: '360px 100%',
            transition: 'width 200ms',
        }}>

        </Box>
    </Box>
  );
};

export default ProgressBar;

//`linear-gradient(to right, ${colors.blueAccent[300]}, ${colors.blueAccent[500]})`