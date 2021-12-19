import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {useNavigate } from "react-router-dom";


function Landing(){
    let navigate = useNavigate()
    const [data, setData] = useState([])
    const [checkedStateId, setCheckedStateId] = useState([]);
    let baseURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b6003c3a7b6ba6d0471d9f5ec12daa93&language=en-US'
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        let data = response.data['genres']
        setData(data);
      });
      const generId =JSON.parse(
        localStorage.getItem('react-movie-app')
      );
      if(generId != null){
        setCheckedStateId(generId)
        navigate("/home")
      }
    }, []);

//Function to Store data to localStorage
    function saveToLocalStorage(items){
      localStorage.setItem('react-movie-app', JSON.stringify(items));
    }
   
    function onclickHandler(name,id){
        let temp = checkedStateId
        temp.push(id)
        setCheckedStateId(temp);
        // console.log(temp,checkedStateId)
        saveToLocalStorage(checkedStateId)
    }
    function getgeners(){
      
       return  data.map((x)=>{
        // console.log(checkedStateId.includes(x.id),checkedStateId)
            return ( 
                <FormControlLabel
                    label={x.name}
                    key = {x.id}
                    control={
                    <Checkbox
                        name = {x.name}
                        onClick={()=>onclickHandler(x.name,x.id)}
                    />
                    }
              />
            )
          })
    }
    
    
    return (
      <div className='landingContainer'>
       <Typography variant="h5" color="#fff" align="center" className="landingHeader">
         Select the Gener that your intrested in
       </Typography>


      { getgeners()}

      <div className='buttContiner'>
        <Button className='contButt' onClick={()=>{
           navigate("/home")
         }}>Continue</Button>
       </div>

      </div>
     

    );

}

export default Landing