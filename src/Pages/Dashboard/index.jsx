import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import '../../index.css'
import SummaryCard from "../../Components/SummaryCard";
import mockLinearChartData from '../../Data/LinearChartData';
import mockPieChartData from '../../Data/PieChartData';
import ChartWrapper from "../../Components/Charts/ChartWrapper";
import projectData from '../../Data/ProjectData'
import CardWrapper from "../../Components/CardWrapper";
import ItemProgressState from '../../Components/ItemProgressState'
import colorData from "../../Data/ColorData";
import ColorBlock from "../../Components/ColorBlock";
import undrawPostingImage from '../../Data/undraw_posting_photo.svg'

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
        <Grid container sx={{mt:1}} spacing={1}>
            <Grid item xs={12} md={6}>
                <CardWrapper header='Projects'>
                    {projectData.map((project) => <ItemProgressState item={project}/>)}
                </CardWrapper>
                <CardWrapper>
                    <Grid container spacing={1}>
                    {colorData.map((colorItem) => <ColorBlock data={colorItem}/>)}
                    </Grid>
                </CardWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
                <CardWrapper header='Illustrations' image={undrawPostingImage}>
                    <Typography component="p" gutterBottom={true}>
                    Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                    </Typography>
                    <Typography sx={{color:'orange'}} component="a" href="https://undraw.co/" target='_blank'>
                        Browse Illustrations on unDraw →
                    </Typography>
                </CardWrapper>
                <CardWrapper header='Development Approach'>
                    <Typography component="p" gutterBottom={true}>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
                    Custom CSS classes are used to create custom components and custom utility classes.
                    </Typography>
                    <Typography component="p">
                    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                    </Typography>
                </CardWrapper>
            </Grid>
        </Grid>
    </Box>);
}

export default Dashboard;