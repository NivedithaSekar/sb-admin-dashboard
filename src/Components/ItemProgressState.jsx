import React from "react";
import ProgressBar from "./ProgressBar";
import { Typography, Box } from "@mui/material";


const ItemProgressState = ({item}) => {
    return (
        <Box sx={{pt:1}}>
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">{`${item.progressPercentage}%`}</Typography>
        </Box>
        <ProgressBar progress={item.progressPercentage}/>
        </Box>
    )
}

export default ItemProgressState;