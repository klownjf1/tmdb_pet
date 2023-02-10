import {createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMovieCast = createAsyncThunk(
    'user/fetchMovieCast',
    async (movieId) => {
        return await APIQueries.getMovieCast(movieId)

    }
)

const toolkitSlice = createSlice({
    name: 'movieCast',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieCast.fulfilled, (state,action) => {
                state.initialState = action.payload
            })
    }
})



export default toolkitSlice.reducer
export const {} = toolkitSlice.actions




