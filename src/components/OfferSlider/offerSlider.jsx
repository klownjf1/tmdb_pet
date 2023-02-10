import React, {useEffect, useState} from 'react';
import s from './offerSlider.module.css'
import Slider from "react-slick";


const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    autoplay:true,



};

const OfferSlider = ({moviesList}) => {

    /*let movies = (movies) => {
        return movies.map(file =>
            <div key={file.id} className={s.movie__container} style={0}>
                <img src={file.img} alt='' className={s.img}/>
                <div className={s.description}>{file.title} {file.genre}</div>
            </div>)
    }*/

    return (
        <div className={s.container}>
{/*            <Slider {...settings}>
                {movies(moviesList.films)}
                {movies(moviesList.serials)}
                {movies(moviesList.cartoons)}
            </Slider>*/}
        </div>
    )
};

export default OfferSlider;