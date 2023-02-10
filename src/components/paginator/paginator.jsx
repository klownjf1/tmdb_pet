import React from 'react';
import {useNavigate} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import s from './paginator.module.css'
const Paginator = ({totalPages, path}) => {

    const navigate = useNavigate()

    const handleChange = (event, value) => {
        navigate(`${path}${value}`)
    }

    return (
        <div className={s.paginator}>
            <Stack>
                <Pagination count={totalPages} variant="outlined" shape="rounded" onChange = {handleChange}/>
            </Stack>
        </div>
    );
};




export default Paginator;