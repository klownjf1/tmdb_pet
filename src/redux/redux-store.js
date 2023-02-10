
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";
import moviesByGenreReducer from "./moviesByGenreReducer";
import moviesSearchReducer from './moviesSearchReducer'
import loadingReducer from './loadingReducer'
import movieCastReducer from './movieCastReducer'

const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    movieReducer,
    moviesByGenreReducer,
    moviesSearchReducer,
    loadingReducer,
    movieCastReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
