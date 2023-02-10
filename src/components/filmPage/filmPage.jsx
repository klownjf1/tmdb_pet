import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import s from './filmPage.module.css'
import VoteAverage from "../utils/voteAverage";
import {fetchMovieCast} from "../../redux/movieCastReducer";
import {Link} from "react-router-dom";



const FilmPage = ({movie, fetchMovie}) => {
    let {id} = useParams()
    let dispatch = useDispatch()
    let movieItem = movie.initialState
    const movieCast = useSelector(state => state.movieCastReducer)



    useEffect( () => {
        dispatch(fetchMovie(id))
        dispatch(fetchMovieCast(id))
    }, [dispatch, id])


    return (
        <div className={s.movie}>
            { movieItem &&

                <div className = {s.film_page__container}>
                    <h1 className={s.film_page__title}>{movieItem.title}</h1>
                    <div className={s.film_page__image}> <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieItem.poster_path}`} alt=""/></div>

                    <div className = {s.content}>
                        <div className={s.film_page__overview}>{movieItem.overview}</div>
                        <div className={s.film_page__status}><b>Status: </b> {movieItem.status}</div>
                        <div className={s.film_page__realize_date}><b>Realize date: </b> {movieItem.release_date}</div>
                        <div className={s.film_page__runtime}><b>Runtime:</b> {movieItem.runtime}</div>
                        <div className={s.film_page__vote}><b>Vote average:</b> {movieItem.vote_average} ({movieItem.vote_count})</div>
                        <VoteAverage value = {movieItem.vote_average} />
                        <div className={s.film_page__adult}><b>Adult: </b>{movieItem.adult? 'Yes': 'No'}</div>
                        <div className={s.film_page__ravenue}><b>Revenue:</b> {movieItem.revenue}$</div>
                        <div className={s.film_page__tagline}><b>Tagline: </b>{movieItem.tagline}</div>
                        <div className={s.film_page__ganres}><b>Genres: </b>
                            {movieItem.genres.map((item, index) => {
                                return index === movieItem.genres.length - 1
                                    ? <Link to = {`/genre/${item.id}/page/1`} key = {index}>{item.name}</Link>
                                    : <Link to = {`/genre/${item.id}/page/1`} key = {index}>{item.name + ', '}</Link>

                            })}
                        </div>

                    </div>
                </div>
            }
        </div>



    );
};

export default FilmPage;