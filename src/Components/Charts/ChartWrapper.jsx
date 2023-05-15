import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LineChart from "../../Components/Charts/LineChart";
import PieChart from "../../Components/Charts/PieChart";
import IconButton from '@mui/material/IconButton';
import {useTheme } from '@mui/material';
import { tokens } from "../../theme";


const ChartWrapper = ({chartType, data, title}) => {
    const component = chartType === 'LineChart' ? <LineChart data={data}/>: chartType === 'PieChart' ? <PieChart data={data}/>:''
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Card sx={{backgroundColor:colors.primary[400]}}>
            <CardHeader 
                action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                }
                title = {<Typography variant="h4">{title}</Typography>}    
            />
            <CardContent sx={{height:'22rem', p:0}}>
                {component}
            </CardContent>
        </Card>
    );
}

export default ChartWrapper;