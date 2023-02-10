import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import s from './genrePage.module.css'
import {Link} from "react-router-dom";
import Paginator from "../paginator/paginator";
import {Grid, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import DropDownPoster from "../utils/dropDownPoster";
const GenrePage = ({fetchMoviesByGenre}) => {

    let movies, totalPages
    let moviesByGenre = useSelector(state => state.moviesByGenreReducer)
    const dispatch = useDispatch()
    const {id, currentPage} = useParams()

    const location = useLocation();
    const path = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);


    let dataOfPage = {
        id: id,
        page: currentPage
    }

    useEffect(() => {
        dispatch(fetchMoviesByGenre(dataOfPage))
    }, [dispatch, dataOfPage.id, dataOfPage.page])

    if (moviesByGenre.initialState) {
        totalPages = moviesByGenre.initialState.total_pages
        movies = moviesByGenre.initialState.results.map((item, index) =>
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


                <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={{xs:3}}>
                    {movies}
                </Grid>
                <div>
                    <Paginator totalPages={totalPages} path={path}/>
                </div>


            </div>
        </div>

    );
};

export default GenrePage;