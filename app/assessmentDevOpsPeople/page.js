'use client'

import Link from "next/link"
import { CultureTables, AutomationTables, Collaboration, CustomTable } from '@/components/Table'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setChartData } from "@/lib/features/devOpsPeople/devOpsPeopleSlice";
import data from '@/data/DevOps_People_Data.json'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AssessmentDevOpsProcess = () => {
    const steps = { 1: 'culture', 2: 'automation', 3: 'Collaboration', 4: 'Metrics', 5: 'Sharing', 6: 'Architecture' };
    const arrayOfExcludedHeaders = ["level1", "level2", "level3", "level4", "level5", "result"]
    const devOpsProcessValue = useAppSelector((state) => state.devOpsProcess);
    const dispatch = useAppDispatch();
    const [tableId, setTableId] = useState(1); // Initial tableId state

    const verifyResponses = (step) => {
        console.log('STEP :: ', step);
        const values = devOpsProcessValue[steps[step]];
        const isValid = Object.keys(values).every(val => values[val]);
        console.log('isValid :: ', isValid);
        return isValid;
    }

    const calculateAverage = (step) => {
        console.log('Average Step :: ', step);
        const values = devOpsProcessValue[steps[step]];
        const sum = Object.keys(values).reduce((acc, key) => acc + parseInt(values[key]), 0);
        const averageValue = sum / Object.keys(values).length;
        console.log('AVG :: ', averageValue);
        return averageValue;
    }

    const nextTable = () => {
        const isValid = verifyResponses(tableId);
        if (!isValid) {
            return;
        }
        const avg = calculateAverage(tableId)
        dispatch(setChartData({
            "subject": steps[tableId],
            "average": avg,
            "target": 5
        }
        ));

        setTableId(tableId + 1);
        // console.log('devOpsProcessValue :: ', devOpsProcessValue);
    };

    function ratingResults() {
        return (
            <Typography>Dropdown </Typography>
        )
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>DevOps People Assessment page</Typography>
            {/* {
                tableId == 1 ? <CultureTables /> : (tableId == 2 ? <AutomationTables /> : <Collaboration />)
            }
            <div className="flex justify-center items-center p-12">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={nextTable}>
                    Next
                </button>
            </div>
            <div>
                <Link href='/' className='text-2xl'>back to home page</Link>
            </div> */}
            <CustomTable data={data.Culture} arrayOfExcludedHeaders={arrayOfExcludedHeaders} customHeader='Rating Results' customBody={ratingResults()} />
        </Box>
    )
}

export default AssessmentDevOpsProcess