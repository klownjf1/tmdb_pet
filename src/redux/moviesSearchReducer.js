import {createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchSearchMovies = createAsyncThunk(
    'user/fetchSearchMovies',
    async (dataOfPage) => {
        return await APIQueries.getMoviesSearch(dataOfPage);
    }
);



const toolkitSlice = createSlice({
    name: 'searchMovies',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchMovies.fulfilled, (state, action) => {
                state.initialState = action.payload
            })
    }
})



export default toolkitSlice.reducer
export const {} = toolkitSlice.actions





