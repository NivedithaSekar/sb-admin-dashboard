import React from "react";
import { Box, Card, CardContent, Slider, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../theme";
import IconSVGWrapper from "./IconSVGWrapper";
import ProgressCircle from "./ProgressCircle";
import ProgressBar from "./ProgressBar";


// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import ForumIcon from '@mui/icons-material/Forum';

{/* <Slider disabled defaultValue={+(item.value.slice(0,2))} min={0} max={100} /> */}



 const list = [
     {component:"Earnings (Monthly)", value: '$40,000', icon:'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z', colorAssigned: '#42a5f5'}, 
     {component:"Earnings (Annually)", icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",value: '$215000', colorAssigned:'#4caf50'},
     {component:"Tasks", icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",value: '50%', colorAssigned:'#ff9800'},
     {component:"Pending Requests", icon: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z",value: '18', colorAssigned:'#03a9f4'},
 ]

// const list = [
//     {component:"Earnings (Monthly)", value: '$40,000', icon:<CalendarMonthIcon />, colorAssigned:'palette.primary.light'}, 
//     {component:"Earnings (Annually)", icon: <AttachMoneyIcon />,value: '$215000', colorAssigned:'palette.success.main'},
//     {component:"Tasks", icon: <AssignmentIcon />,value: '50%', colorAssigned:'palette.warning.light'},
//     {component:"Pending Requests", icon: <ForumIcon />,value: '18', colorAssigned:'palette.info.light'},
//   ];

const SummaryCard = () => { 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Grid container spacing={2} className='sub-content'>
        {list.map((item) => {
            return(
                <Grid item xs={12} md={6} className='sub-content-items'>
                <Card sx={{ borderLeft: `0.25rem solid ${item.colorAssigned}`, backgroundColor: colors.primary[400], pr:2.5 }} className="sub-content">
                    <CardContent>
                        <Typography variant="h4">
                            {item.component}
                        </Typography>
                        <Typography variant="h3">
                            {item.value}
                        </Typography>
                    </CardContent>
                    {item.component === "Tasks" ? <ProgressBar />:''}
                    <IconSVGWrapper pathIcon={item.icon} iconSize={'3.5rem'}/>
                </Card>
                </Grid>
                );
            }
        )}
    </Grid>);
}

export default SummaryCard;