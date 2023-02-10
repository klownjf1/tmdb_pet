import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import s from '../moviesList/moviesList.module.css'
import Paginator from "../paginator/paginator";
import user from '../../user.png'
import {Grid, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import DropDownPoster from "../utils/dropDownPoster";
const SearchMovieList = ({fetchSearchMovies, moviesSearchList}) => {
    let totalPages, movies

    const {searchTerm, currentPage} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()

    const path = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);


    const dataOfPage =  {
        searchTerm: searchTerm,
        currentPage: currentPage
    }
    useEffect(() => {
        dispatch(fetchSearchMovies(dataOfPage))
    }, [dispatch, dataOfPage.searchTerm, dataOfPage.currentPage])


    if (moviesSearchList.initialState) {



        totalPages = moviesSearchList.initialState.total_pages
        movies = moviesSearchList.initialState.results.map((item, index) =>
            <Grid align="center" xs={3} key={index} item={true}>
                <a href = {`/films/${item.id}`} className={s.movie__titleLink}>
                    <ImageListItem>

                        <img
                            src={item.poster_path !== null
                                ? `https://image.tmdb.org/t/p/w300_and_h450_face${item.poster_path}`
                                : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} alt=""/>}
                        alt = {item.original_title}
                        loading="lazy"
                        />

                        <Typography>
                            {item.title}
                        </Typography>


                        <ImageListItemBar
                            position='top'
                            sx={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            actionIcon={
                                <DropDownPoster item={item}/>
                            }
                        />
                    </ImageListItem>
                </a>

            </Grid>
        )
    }

    return (
        <div>
            <div className={s.movies}>
                <div>
                    <h2>{totalPages > 0 ? `Found according to your request "${searchTerm}" :`: 'Nothing found'}</h2>
                </div>
                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={{xs:3}}>
                    {movies}
                </Grid>
                <div>
                    <Paginator totalPages={totalPages} path={path}/>
                </div>
            </div>
        </div>
    )
};

export default SearchMovieList;