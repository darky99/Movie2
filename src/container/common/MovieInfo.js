import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





const MovieInfo = (props) => {
    // console.log(props)
    function adult(){
        return (
            <h3>18+</h3>
        )
    }
    function rating(){
        // let value = pars(props.rating)*100
        // console.log(value)
        return (
            <div className='ratingBox'>
                  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate"value={props.rating*10} />
            <Box
                sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="#fff">
                {`${props.rating}`}
                </Typography>
      </Box>
    </Box>
            </div>
          
        )
    }
    function title(){
        return (
            <>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="h6">{new Date(props.date).getDate()}/{new Date(props.date).getMonth()}/{new Date(props.date).getFullYear()}</Typography>
            </>
        )
    }
    return(
        <>
        <Grid container spacing={2}>
            <Grid item xs={4}>{rating()}</Grid>
            <Grid item xs={4}>{props.adult != true ? adult() : ""} </Grid>
        </Grid> 
         {title()}
        </>
    );
};

export default MovieInfo;