import React, {useEffect} from "react";
import s from './moviesList.module.css'
import Paginator from "../paginator/paginator";
import {useLocation, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {Grid, ImageListItem, ImageListItemBar, Typography} from "@mui/material";

import DropDownPoster from "../utils/dropDownPoster";
import {Link} from "react-router-dom";


let Movie = ({moviesList, fetchMovies, fetchMovie}) => {


    const location = useLocation();
    const path = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);

    let movies, totalPages
    const dispatch = useDispatch()
    const {currentPage} = useParams()


    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [dispatch, currentPage])


    if (moviesList.initialState) {
        totalPages = moviesList.initialState.total_pages

        movies = moviesList.initialState.results.map((item, index) =>
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
                            <DropDownPoster item={item} fetchMovie={fetchMovie}/>
                        }
                    />
                </ImageListItem>
            </a>

            </Grid>
        )
    }
   /* <Link to = {`/films/${item.id}`} style={{ textDecoration: 'none' }}>*/
    return (
        <div>
            <div className={s.movies}>
                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={{xs:3}}>
                    {movies}
                </Grid>
                <div>
                    <Paginator totalPages={totalPages} path={path}/>
                </div>


            </div>
        </div>

    )
}

export default Movie