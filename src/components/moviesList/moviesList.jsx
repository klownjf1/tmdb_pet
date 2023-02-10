import React, {useEffect} from "react";
import Movie from './movie'
import {Navigate, Route, Routes} from "react-router";
import FilmPage from "../filmPage/filmPage";
import s from "./moviesList.module.css";
import {useDispatch, useSelector} from "react-redux";
import GenrePage from "../genrePage/genrePage";
import Header from "../header/header";
import SearchMovieList from "../movieSearch/searchMovieList";
import Footer from "../Footer/Footer";



let MoviesList = ({fetchMovie , fetchMovies, fetchMoviesByGenre, fetchSearchMovies}) =>{

    let moviesList = useSelector(state => state.moviesReducer)
    let movie = useSelector(state => state.movieReducer)
    let genresList = useSelector(state => state.genresReducer)
    let moviesSearchList = useSelector(state => state.moviesSearchReducer)

    return(
        <div>

            <Header genres={genresList}/>
            <div className={s.container}>
                <Routes basename = '/tmdb_pet'>
                    <Route path = '/page/:currentPage' element={<Movie fetchMovies = {fetchMovies} moviesList={moviesList} fetchMovie = {fetchMovie}/>} />
                    <Route path = '/films/:id' element = {<FilmPage movie = {movie} fetchMovie = {fetchMovie} />}  />
                    <Route path = '/genre/:id/page/:currentPage' element= {<GenrePage fetchMoviesByGenre = {fetchMoviesByGenre}/>} />
                    <Route path = '/search/:searchTerm/page/:currentPage' element={<SearchMovieList fetchSearchMovies = {fetchSearchMovies} moviesSearchList = {moviesSearchList}/>} />
                    <Route
                        path="/"
                        element={<Navigate to="/page/1"/>}
                    />
                </Routes>
            </div>
            {/*<Footer></Footer>*/}
        </div>
    )
}

export default MoviesList