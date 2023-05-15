import {  Grid, Typography } from "@mui/material";

import React from "react";
const ColorBlock = ({data}) => {
    return (
            <Grid item xs={12} s={12} md={12} lg={6} sx={{backgroundColor: data.colorValue, p:1, mb:1, borderRadius:1}}>
                <Typography variant="h5" color={data.colorValue === '#f8f9fc' ? '#858796':''}>{data.colorName}</Typography>
                <Typography variant="secondary" color={data.colorValue === '#f8f9fc' ? '#858796':''}>{data.colorValue}</Typography>
            </Grid>
    );
}

export default ColorBlock;