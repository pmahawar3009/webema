
import React from "react";
import data from '@/data/spiderChartData'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


function SpiderChart({attributeName}) {
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data.spiderChart}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 5]} />
            <Radar name={attributeName + " Average"} dataKey="average" stroke="#1A5276" fill="#85C1E9 " fillOpacity={0.6} />
            <Radar name="Target" dataKey="target" stroke="#2C3E50 " fill="#D1F2EB" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    );
}
export default SpiderChart;