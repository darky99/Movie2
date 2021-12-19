import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import axios from 'axios';
import Typography from '@mui/material/Typography';

function Slider(props){
    const [movies,setMovies] = useState([])

    React.useEffect(() => {
        let baseURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=b6003c3a7b6ba6d0471d9f5ec12daa93&language=en-US&page=1`
    
        axios.get(baseURL).then((response) => {
          let data = response.data['results']
          data.length = 5
        //   console.log(data)
          setMovies(data);
        });
      }, []);
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        animation="slide"
        navButtonsAlwaysVisible="true"
        >
            {
                movies.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    // console.log(props)
    let year = new Date(props.item.release_date).getFullYear()
    let date = new Date(props.item.release_date).getDate() +'/'+ new Date(props.item.release_date).getMonth() +'/'+  new Date(props.item.release_date).getFullYear()
    // console.log(year)
    return (
        <Paper>
             <div className='image-container d-flex justify-content-start m-3'>
             <img src={'https://image.tmdb.org/t/p/original/'+props.item.backdrop_path} alt="" className='sliderImg'/>
               
                <div className='overlayx sliderContent'>
                    <Typography variant="h4">{props.item.original_title}({year})</Typography>
                    <Typography variant="p">{date} {props.item.original_language} </Typography>
                    <Typography variant="h6">overview </Typography>
                    <Typography variant="p">{props.item.overview} </Typography>
                    {/* <Button className="CheckButton">
                        Check it out!
                    </Button> */}
				</div>
                
             </div>

        </Paper>
    )
}

export default Slider