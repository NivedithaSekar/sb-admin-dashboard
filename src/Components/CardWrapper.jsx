import { CardHeader, Card, CardContent, useTheme, CardMedia } from "@mui/material";
import { tokens } from "../theme";

import React from "react";
const CardWrapper = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const headerTitle = props.header? props.header:'';
    const cardImage = props.image? props.image:'';
    return (
        <Card sx={{ backgroundColor: colors.primary[400], mb:1}}>
            <CardHeader title={headerTitle} sx={{fontSize: '18px'}}>
            </CardHeader>
            {cardImage? <CardMedia
                component="img"
                height="140"
                image={cardImage}
                alt={headerTitle}
                sx={{objectFit:'contain'}}
            />:''}
            <CardContent sx={{pt:0}}>
                {props.children}
            </CardContent>
        </Card>
    );
}

export default CardWrapper;

// // {
//     type === "Project-ProgressState" ? content.map((project) => <ItemProgressState item={project}/>) : 
//     type === "" ? 
// }