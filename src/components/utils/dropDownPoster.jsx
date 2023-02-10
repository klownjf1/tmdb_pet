import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import {makeStyles} from "@mui/styles";
import VoteAverage from "./voteAverage";

const useStyles = makeStyles({
    popOverRoot: {
        pointerEvents: "none"
    }
});

export default function DropDownPoster({item}) {
    const styles = useStyles();

    let currentlyHovering = false;

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget)
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }
    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }
    return (
        <div>

            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}
                sx={{ color: 'lightgrey' }}
            >
                <InfoIcon style={{ color: 'lightgrey' }}/>
            </Button>


            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                    style:{
                        width: '300px',
                        pointerEvents: "auto"
                    },
                    'aria-labelledby': 'basic-button',
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                }}
                PopoverClasses={{
                    root: styles.popOverRoot
                }}
            >
                <div><b>Tittle: </b>{item.title}</div>
                <div><b>Rate: </b>{item.vote_average} ({item.vote_count})</div>
                <VoteAverage value = {item.vote_average}/>
                <b>Adult: </b> {item.adult ? 'Yes': 'No'}
                <div><b>Description: </b></div>
                <div>{item.overview}</div>
            </Menu>
        </div>
    );
}