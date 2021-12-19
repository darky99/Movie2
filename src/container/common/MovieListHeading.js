import React from 'react';
import '../../App.css';
import { Button } from '@mui/material';
import {useNavigate } from "react-router-dom";
const MovieLisdtHeading = (props) => {
    let navigate = useNavigate()
    function onClickHandler(){
        // console.log(props.heading)
        if(props.heading == 'Top Rated Movie'){
            navigate("/topRated")
        }
        else if(props.heading == 'Recommended'){
            navigate("/rec")
        }else{
            navigate("/")
        }
    }
    return(
        <div className='col headeComp'>
            <Button onClick={()=>{onClickHandler()}}>
                <h3 className='m-1'>{props.heading}</h3>
            </Button>
            
   
        </div>
    )
}

export default MovieLisdtHeading;