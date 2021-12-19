import React,  { useState } from 'react';
import Slider from './common/Slider';
import axios from 'axios';
// import MovieList from './movieList';
// import TopRated from './TopRated';
import MovieList from './common/MovieList';
import { Grid } from '@mui/material';
import MovieLisdtHeading from './common/MovieListHeading';

const Home = () => {
    const [topRated, SetTopRated] = useState([])
    const [reccom, SetReccom] = useState([])
    
    React.useEffect(() => {
        let baseURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=b6003c3a7b6ba6d0471d9f5ec12daa93&language=en-US&page=1`
    
        axios.get(baseURL).then((response) => {
          let data = response.data['results']
          data.length = 4
          SetTopRated(data);
        });    
      }, []);

      React.useEffect(() => {
    
        let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=b6003c3a7b6ba6d0471d9f5ec12daa93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=1`
    
        axios.get(baseURL).then((response) => {
          let data = response.data['results']
          data.length = 4
          SetReccom(data);
        });
        
      }, []);

  return (

          <>
            <MovieLisdtHeading heading='Upcoming'/>
            <Slider />
            <MovieLisdtHeading heading='Top Rated Movie'/>
            <Grid container spacing={2}>
               
                <MovieList movies={topRated}/>
            </Grid>
            <MovieLisdtHeading heading='Recommended'/>
            <Grid container spacing={2}>
               
                <MovieList movies={reccom}/>
            </Grid>
            
        </>
  );
};

export default Home