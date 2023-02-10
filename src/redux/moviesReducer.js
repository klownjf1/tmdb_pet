import {createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchMovies = createAsyncThunk(
    'user/fetchMovies',
    async (page) => {
        return await APIQueries.getMoviesList(page);
    }
);



const toolkitSlice = createSlice({
    name: 'moviesList',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.initialState = action.payload
            })
    }
})


export default toolkitSlice.reducer
export const {} = toolkitSlice.actions





