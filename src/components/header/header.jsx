import React, {useState} from "react";
import s from './header.module.css'
import {Link, useNavigate} from "react-router-dom";
import HeaderMenu from "./headerMenu";
import {Grid} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Header = ({genres}) => {

    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value !== '') {
            navigate(decodeURIComponent(`search/${value}/page/1`).replace(/ /g,'+'))
        }
    }

    return(
        <div className = {s.header}>
            <header className={s.header_container}>
                <Grid container>

                    <Grid item xs = {3}>
                        <Link to = '/'>
                            <img
                                src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                                className={s.header__logo}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs = {5}>

                        <HeaderMenu genres = {genres}/>
                    </Grid>

                    <Grid item xs = {4}>
                        <form onSubmit={handleSubmit} className={s.search_form}>
                            <div className={s.search_form__container}>
                                <input value = {value} onChange = {(e) => {setValue(e.target.value)}} className = {s.search_form__input} placeholder={'Search...'}/>
                                <i className={s.search_form__icon}>
                                   <SearchIcon fontSize="medium" onClick = {value !== null && handleSubmit}/>
                                </i>
                            </div>
                        </form>
                    </Grid>
                </Grid>


            </header>

        </div>
    )
}

export default Header