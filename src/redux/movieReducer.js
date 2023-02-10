import {createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchMovie = createAsyncThunk(
    'user/fetchMovie',
    async (movie) => {
        return await APIQueries.getMovie(movie);
    }
);


const toolkitSlice = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
        clearState: state => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.initialState = action.payload
            })

    }
})



export default toolkitSlice.reducer
export const {clearState} = toolkitSlice.actions