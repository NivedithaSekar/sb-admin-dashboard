import { Box, Button, Grid } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import '../../index.css'
import SummaryCard from "../../Components/SummaryCard";
import mockLinearChartData from '../../Data/LinearChartData';
import mockPieChartData from '../../Data/PieChartData';
import ChartWrapper from "../../Components/Charts/ChartWrapper";

const Dashboard = () => {
    return (<Box className='main-content'>
         <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1>Dashboard</h1>
            <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />}>
              Generate Report
            </Button>
        </Box>
        <SummaryCard/>
        <Grid container sx={{mt:1}} spacing={1}>
            <Grid item xs={12} md={7}>
                <ChartWrapper chartType='LineChart' data={mockLinearChartData} title='Earnings Overview' />
            </Grid>
            <Grid item xs={12} md={5}>
                <ChartWrapper chartType='PieChart' data={mockPieChartData} title='Revenue Sources' />
            </Grid>
        </Grid>
    </Box>);
}

export default Dashboard;