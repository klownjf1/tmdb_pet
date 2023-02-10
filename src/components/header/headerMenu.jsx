import React, {useEffect, useState} from 'react';
import Menu from "@mui/material/Menu";
import {alpha, createTheme, Grid, Icon, MenuItem, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {makeStyles, ThemeProvider} from "@mui/styles";
import s from './header.module.css'



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
            width: '960px',
            margin: '0 auto'
        },
    },
}));

const HeaderMenu = ({genres}) => {

    let genresList

    const [anchorEl, setAnchorEl] = useState(null);
    const [icon, setIcon] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIcon(true)
    };
    const handleClose = (e) => {
        setAnchorEl(null);
        setIcon(false)
    };


        if (genres.initialState) {
        genresList = genres.initialState.map((item, index) => (
            <Grid align="center" xs={3} key={index} item={true} >
                <Link to = {`genre/${item.id}/page/1`} style = {{textDecoration: "none", color: 'black'}} >
                    <MenuItem key = {index} onClick={handleClose} className={s.menuItem} >
                        <div>{item.name}</div>
                    </MenuItem>
                </Link>
            </Grid>
        ))
    }


    return (
        <div>
            <Typography
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style = {{color: 'white', cursor: 'pointer', textAlign: 'center'}}
                cursor = 'pointer'
                component={'span'}
                fontSize = '17px'

            >

                <div style = {{display: 'flex', textAlign: 'center'}}>

                    <div>Genres</div>
                    <div>{icon? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</div>
                </div>

            </Typography>

                <StyledMenu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        {genresList}
                    </Grid>
                </StyledMenu>
        </div>
    );
};

export default HeaderMenu;