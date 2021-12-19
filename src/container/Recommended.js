import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './assets/logo.png';
import '../App.css';
import axios from 'axios';
// import Home from './container/home'
// import TopRated from './container/topRated';
import MovieList from './common/MovieList';
import { Grid } from '@mui/material';
import Pagination from './common/Pagination';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LoadingPage from './common/Loading'
import MovieLisdtHeading from './common/MovieListHeading'


function TopRated(){
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
 
  React.useEffect(() => {
    setLoading(true)
    let temp = currentPage.toString()
    let baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=b6003c3a7b6ba6d0471d9f5ec12daa93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=`+temp

    axios.get(baseURL).then((response) => {
      let data = response.data
      // console.log(response.data)
      setMovies(data['results']);
      setTotal(data['total_results'])
      setCurrentPage(data['page'])
    });
    setTimeout(()=>{
      setLoading(false)
    },500)
    
  }, [currentPage]);


  function onNextClick(){
     setCurrentPage(currentPage+1)
  }


  function onPrevClick(){
    setCurrentPage(currentPage-1)
  }


  function buttonComp(){
    return (
      <>
      <Grid container spacing={0}>
      <Pagination page={currentPage} total={total}/>
      <Grid item xs={1} className="iconGrid">
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>onPrevClick()} disabled={currentPage == 1}>
          <NavigateBeforeIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1} className="iconGrid">
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>onNextClick()}>
        <NavigateNextIcon />
        </IconButton>
      </Grid>
      </Grid>
      </>
    )
  }
  if(loading == true){
    return <LoadingPage/>
  }else{
    return (
      <>
        <Grid container spacing={2} className="headeComp">
          <Grid item xs={9}>
            <MovieLisdtHeading heading='Recommended'/>
          </Grid>
          <Grid item xs={3}> 
            {buttonComp()}
          </Grid>
  
        </Grid>
        <Grid container spacing={2}>
             <MovieList movies={movies} />
        </Grid>
      </>
  
    )
  }

}

export default TopRated