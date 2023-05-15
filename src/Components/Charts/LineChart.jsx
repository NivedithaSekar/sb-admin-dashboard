import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import {useTheme } from '@mui/material';
import { tokens } from "../../theme";

const LineChart = ({data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <ResponsiveLine
        data={data}
        theme={
            {
                tooltip: {
                    container: {
                        background: colors.primary[400],
                        color: colors.primary[100],
                        fontSize: 12
                    }
                },
                axis: {
                    ticks: {
                        line:{
                            stroke: colors.primary[100]
                        },
                        text:{
                            fill:colors.primary[100]
                        }
                    }
                }
            }
        }
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', stacked: true, min: 0, max: 10 }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickValues: [
                0,1,2,3,4,5,6,7,8,9,10
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'Task-Day',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: [
                0,1,2,3,4,5,6,7,8,9,10
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: 'Scores',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'spectral' }}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        gridXValues={[ 0,1,2,3,4,5,6,7,8,9,10 ]}
        gridYValues={[ 0,1,2,3,4,5,6,7,8,9,10 ]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 133,
                translateY: 10,
                itemsSpacing: 3,
                itemDirection: 'left-to-right',
                itemWidth: 86,
                itemHeight: 18,
                itemOpacity: 0.75,
                symbolSize: 15,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
}

export default LineChart;