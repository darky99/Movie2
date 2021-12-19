import React from 'react';
import '../../App.css';
import { Grid } from '@mui/material';
import MovieInfo from './MovieInfo';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
                <Grid item xs={3} key={index}>
                    <div className='image-container d-flex justify-content-start m-3'>
					<img src={'https://image.tmdb.org/t/p/original/'+movie.poster_path} alt='movie' width={300} height={350}></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<MovieInfo adult={movie.adult} title={movie.title} date={movie.release_date} rating={movie.vote_average}/>
					</div>
				    </div>
                </Grid>

			))}
		</>
	);
};

export default MovieList;