import {createSlice} from "@reduxjs/toolkit";
import {APIQueries} from "../api/API";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMoviesByGenre = createAsyncThunk(
    'user/fetchMoviesByGenre',
    async (dataOfPage) => {
        return await APIQueries.getMoviesByGenre(dataOfPage)

    }
)

const toolkitSlice = createSlice({
    name: 'moviesByGenre',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesByGenre.fulfilled, (state,action) => {
                state.initialState = action.payload
            })
    }
})



export default toolkitSlice.reducer
export const {} = toolkitSlice.actions




