'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '@/data/DevOps_People_Data.json'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';
import { setTableValue } from "@/lib/features/devOpsPeople/devOpsPeopleSlice";
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export function CustomTable({ data, arrayOfExcludedHeaders, customHeader, customBody }) {
    const devOpsCultureValue = useAppSelector((state) => state.devOpsPeople.culture);
    const dispatch = useAppDispatch();
    const headers = tableHeaders(data, arrayOfExcludedHeaders)
    const body = tableBody(data, arrayOfExcludedHeaders)

    function tableHeaders(data, arrayOfExcludedHeaders) {
        const allHeaders = Object.keys(data[0])
        return allHeaders.filter(header => !arrayOfExcludedHeaders.includes(header))
    }

    function tableBody(data, arrayOfExcludedHeaders) {
        const body = data.reduce((acc, obj) => {
            const newObj = Object.keys(obj).reduce((newObjAcc, key) => {
                if (!arrayOfExcludedHeaders.includes(key)) {
                    newObjAcc[key] = obj[key];
                }
                return newObjAcc;
            }, {});

            acc.push(newObj);
            return acc;
        }, [])
        return body
    }

    const handleChange = (event) => {
        const currentCultureValue = { ...devOpsCultureValue };
        currentCultureValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'culture', data: currentCultureValue }))
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ width: '100%', ml: 1 }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers?.map((header, i) => <StyledTableCell key={i} align="left" sx={{ borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>{header.charAt(0).toUpperCase() + header.slice(1)}</StyledTableCell>)}
                                <StyledTableCell sx={{ borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>{customHeader}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {body.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.map((header, i) => (
                                        <StyledTableCell key={i} scope="row" sx={{ borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                                            {row[header]}
                                        </StyledTableCell>
                                    ))}
                                    <StyledTableCell sx={{ minWidth: '200px', borderLeft: '1px solid rgba(224, 224, 224, 1)' }} align="left">
                                        {customBody}
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export function CultureTables() {
    const devOpsCultureValue = useAppSelector((state) => state.devOpsPeople.culture);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsCultureValue).length) {
        const initialCultureValue = data.Culture.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'culture', data: initialCultureValue }))
    }

    var headers = Object.keys(data.Culture[0]);

    const handleChange = (event) => {
        const currentCultureValue = { ...devOpsCultureValue };
        currentCultureValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'culture', data: currentCultureValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })}
                                <StyledTableCell>Rating Results</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Culture.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell key={header} sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.key}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsCultureValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
export function AutomationTables() {
    const devOpsAutomationValue = useAppSelector((state) => state.devOpsProcess.automation);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsAutomationValue).length) {
        const initialAutomationValue = data.Culture.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'automation', data: initialAutomationValue }))
    }

    var headers = Object.keys(data.Automation[0]);
    const handleChange = (event) => {
        const currentAutomationValue = { ...devOpsAutomationValue };
        currentAutomationValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'automation', data: currentAutomationValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })
                                }
                                <StyledTableCell>Options</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Automation.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.name}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsAutomationValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup></StyledTableCell>

                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
export function Collaboration() {
    const devOpsCollaborationValue = useAppSelector((state) => state.devOpsProcess.collaboration);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsCollaborationValue).length) {
        const initialCollaborationValue = data.Collaboration.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'collaboration', data: initialCollaborationValue }))
    }

    var headers = Object.keys(data.Collaboration[0]);

    const handleChange = (event) => {
        const currentCollaborationValue = { ...devOpsCollaborationValue };
        currentCollaborationValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'collaboration', data: currentCollaborationValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'target' && header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })
                                }
                                <StyledTableCell>Options</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Collaboration.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'target' && header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.name}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsCollaborationValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup></StyledTableCell>

                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
export function Metrics() {
    const devOpsMetricsValue = useAppSelector((state) => state.devOpsProcess.metrics);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsMetricsValue).length) {
        const initialMetricsValue = data.Culture.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'Metrics', data: initialMetricsValue }))
    }

    var headers = Object.keys(data.Metrics[0]);

    const handleChange = (event) => {
        const currentMetricsValue = { ...devOpsMetricsValue };
        currentMetricsValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'Metrics', data: currentMetricsValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'target' && header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })
                                }
                                <StyledTableCell>Options</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Metrics.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.key}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsMetricsValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup></StyledTableCell>

                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
export function Sharing() {
    const devOpsSharingValue = useAppSelector((state) => state.devOpsProcess.sharing);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsSharingValue).length) {
        const initialSharingValue = data.Culture.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'Sharing', data: initialSharingValue }))
    }

    var headers = Object.keys(data.Sharing[0]);
    const handleChange = (event) => {
        const currentSharingValue = { ...devOpsSharingValue };
        currentSharingValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'Sharing', data: currentSharingValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'target' && header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })
                                }
                                <StyledTableCell>Options</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Sharing.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.name}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsSharingValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup></StyledTableCell>

                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
export function Architecture() {
    const devOpsArchitectureValue = useAppSelector((state) => state.devOpsProcess.architecture);
    const dispatch = useAppDispatch();

    if (!Object.keys(devOpsArchitectureValue).length) {
        const initialArchitectureValue = data.Culture.reduce((acc, item) => ({ ...acc, [item.key]: '' }), {});
        dispatch(setTableValue({ table: 'Architecture', data: initialArchitectureValue }))
    }

    var headers = Object.keys(data.Architecture[0]);
    const handleChange = (event) => {
        const currentArchitectureValue = { ...devOpsArchitectureValue };
        currentArchitectureValue[event.target.name] = (event.target).value;
        dispatch(setTableValue({ table: 'Architecture', data: currentArchitectureValue }))
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ width: '90%' }} stickyHeader aria-label="Culture Tables">
                        <TableHead>
                            <TableRow>
                                {headers.filter(header => header !== 'target' && header !== 'result').map((header, i) => {
                                    return <StyledTableCell key={i} align="left">{header}</StyledTableCell>
                                })
                                }
                                <StyledTableCell>Options</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.Architecture.map((row) => (
                                <StyledTableRow key={row.key}>
                                    {headers.filter(header => header !== 'result').map(header => {
                                        // eslint-disable-next-line react/jsx-key
                                        return <StyledTableCell sx={header !== 'key' ? { minWidth: '300px' } : {}} align="left">{row[header]}</StyledTableCell>
                                    })
                                    }
                                    <StyledTableRow key={row.name}  >
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">
                                            <RadioGroup value={devOpsArchitectureValue[row.key]} onChange={handleChange}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={row.key} >
                                                <FormControlLabel value="1" control={<Radio />} label="Level 1" />
                                                <FormControlLabel value="2" control={<Radio />} label="Level 2" />
                                                <FormControlLabel value="3" control={<Radio />} label="Level 3" />
                                                <FormControlLabel value="4" control={<Radio />} label="Level 4" />
                                                <FormControlLabel value="5" control={<Radio />} label="Level 5" />
                                            </RadioGroup></StyledTableCell>

                                    </StyledTableRow>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
