import './App.css';
import {useDispatch} from "react-redux";
import MoviesList from "./components/moviesList/moviesList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";
import {fetchGenres} from "./redux/genresReducer";
import {fetchMovie} from "./redux/movieReducer";
import {fetchMovies} from "./redux/moviesReducer";
import {fetchMoviesByGenre} from "./redux/moviesByGenreReducer";
import {fetchSearchMovies} from "./redux/moviesSearchReducer";


function App() {

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch])



    return (
        <div className="App">
            <MoviesList fetchMovie = {fetchMovie} fetchMovies = {fetchMovies} fetchMoviesByGenre = {fetchMoviesByGenre} fetchSearchMovies = {fetchSearchMovies}/>
        </div>
    );
}

export default App;
