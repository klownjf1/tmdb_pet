import React from 'react';
import {Box, Rating} from "@mui/material";

const VoteAverage = ({value}) => {

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="customized-10"
                value={value}
                readOnly
                precision={0.1}
                max = {10}
            />
        </Box>
    );
};

export default VoteAverage;