import axios from "axios"



const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})


export const APIQueries = {
    getMoviesList: (page) => {
            return instance.get(`movie/popular?api_key=c2e181430dbc7fec5e2f7e4bb926921f&language=en-US&page=${page}`)
            .then(response => response.data)
    },

    getGenres: () => {
        return instance.get(`genre/movie/list?api_key=c2e181430dbc7fec5e2f7e4bb926921f&language=en-US`)
            .then(response => response.data.genres)
    },

    getMovie: (movie_id) => {
        return instance.get(`movie/${movie_id}?api_key=c2e181430dbc7fec5e2f7e4bb926921f&language=en-US`)
            .then(response => response.data)
    },

    getMoviesByGenre: (dataOfPage) => {
        return instance.get(`discover/movie?api_key=c2e181430dbc7fec5e2f7e4bb926921f&with_genres=${dataOfPage.id}&page=${dataOfPage.page}`)
            .then(response => response.data)
    },

    getMoviesSearch: (dataOfPage) => {
        return instance.get(`search/movie?api_key=c2e181430dbc7fec5e2f7e4bb926921f&query=${dataOfPage.searchTerm}&page=${dataOfPage.currentPage}`)
            .then(response => response.data)
    },

    getMovieCast: (movieId) => {
        return instance.get(`movie/${movieId}/credits?api_key=c2e181430dbc7fec5e2f7e4bb926921f`)
            .then(response => response.data)
    },

}


