'use client'

import Link from "next/link"
import { CultureTables, AutomationTables, Collaboration,Metrics ,Sharing,Architecture } from '@/components/Table'
import { useState } from 'react';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const AssessmentDevOpsProcess = () => {

    const [tableId, setTableId] = useState(1); // Initial tableId state

    const nextTable = () => {
        setTableId(tableId + 1);
    };
    const prevTable = () =>{
        setTableId(tableId - 1);
    }
    let classes = `${tableId == 1 ? 'active': ''} ${tableId > 1 ?  'visited' : ''}`
    return (
        <Box>
             <Typography variant="h3" gutterBottom>DevOps Process Assessment page </Typography>
            <div>
            {tableId}
                <span className={classes}>Culture</span> 
                |<span> Automation </span>  | 
                Collaboration | Metrics | Sharing | Architecture </div>
            {/* <h6 className="text-3xl p-6 bg-red-500">Please change the table component to reflect DevOps Process assessment</h6> */}
            {
                tableId == 1 ?  <CultureTables /> : tableId == 2 ? <AutomationTables /> :tableId == 3 ?  <Collaboration />
                :tableId == 4 ?  <Metrics /> :(tableId == 5 ?  <Sharing />: <Architecture />)
            }        
            {/* <div className="flex justify-center items-center p-12"> */}
            {/* <Link href='/assessmentDevOpsProcess/report' className="btn btn-accent w-56">Generate Report</Link> */}
            {/* <button  className="btn btn-accent w-56" onClick={nextTable}> Next </button> */}
            {/* </div> */}
            <div className="flex justify-center items-center p-12">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={prevTable}>
                    Prev
                </button>
                {
                    tableId !=7 && <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={nextTable}>
                    Next
                </button>
                }

                {tableId == 7 && (
        <Button variant="contained" color="primary">
          Submit Record
        </Button>
      )}
               
            </div>
            <div>
            <Link href='/' className='text-2xl'>back to home page</Link>
            </div>
           
        </Box>
    )
}

export default AssessmentDevOpsProcess