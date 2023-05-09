import React from 'react';
import data from '../Data/LinearChartData';
import { ResponsiveLine } from '@nivo/line'

const LineChart = () => {
    return(
        <ResponsiveLine curve="monotoneX" data={data} xScale={{
            type: 'linear',
            min: 0,
            max: 'auto'
          }} axisLeft={{
            legend: 'linear scale',
            legendOffset: 12
          }} axisBottom={{
            legend: 'linear scale',
            legendOffset: -12
          }} />
    );
}

export default LineChart;