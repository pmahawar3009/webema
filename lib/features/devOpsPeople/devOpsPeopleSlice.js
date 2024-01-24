import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    culture: {},
    automation: {},
    Collaboration: {},
    Metrics: {},
    Sharing: {},
    Architecture: {},
    spiderChart: []

    // {
    //   "subject": "Culture",
    //   "average": 1.25,
    //   "target": 5
    // }
}

export const devopsPeopleSlice = createSlice({
    name: 'devopsPeople',
    initialState,
    reducers: {
        setTableValue: (state, action) => {
            state[action.payload.table] = action.payload.data;
        },
        setCulture: (state, action) => {
            state[action.payload.table] = action.payload.data;
        },
        setAutomation: (state, action) => {
            state[action.payload.table] = action.payload.data;
        },
        setMetrics: (state, action) => {
            state[action.payload.table] = action.payload.data;
        },
        setChartData: (state, action) => {
            state.spiderChart.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTableValue, setChartData, setMetricsSubject } = devopsPeopleSlice.actions

export default devopsPeopleSlice.reducer