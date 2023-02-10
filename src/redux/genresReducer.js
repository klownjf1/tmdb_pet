import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";



export const fetchGenres = createAsyncThunk(
    'user/fetchGenres',
        async() => {
            return await APIQueries.getGenres()
        }
)

const toolkitSlice = createSlice({
    name: 'genresList',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.initialState = action.payload
        })
    }

})


export default toolkitSlice.reducer
export const {} = toolkitSlice.actions