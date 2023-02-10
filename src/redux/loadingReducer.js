import {APIQueries} from "../api/API";
import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            return action.payload
        }
    },


})


export default toolkitSlice.reducer
export const {setLoading} = toolkitSlice.actions