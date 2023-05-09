import React from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressBar = ({ progress = "0.55", size = "50" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 100;
  return (
    <Box
      sx={{
        height: '10px',
        width: '55%',
        backgroundColor: '#eaecf4',
        borderRadius: '25px',
      }}
    >
        <Box sx={{
            width: `${angle}%`,
            height: '100%',
            borderRadius: '10px',
            backgroundImage: `linear-gradient(to right, ${colors.blueAccent[300]}, ${colors.blueAccent[500]})`,
            backgroundSize: '360px 100%',
            transition: 'width 200ms',
        }}>

        </Box>
    </Box>
  );
};

export default ProgressBar;