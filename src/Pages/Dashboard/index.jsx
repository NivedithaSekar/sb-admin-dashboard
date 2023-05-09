import { Box, Button } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import '../../index.css'
import SummaryCard from "../../Components/SummaryCard";
import LineChart from "../../Components/LineChart";

const Dashboard = () => {
    return (<Box className='main-content'>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1>Dashboard</h1>
            <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />}>
              Generate Report
            </Button>
        </Box>
        <SummaryCard/>
        <LineChart/>
    </Box>);
}

export default Dashboard;