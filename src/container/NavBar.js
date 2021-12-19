import React from "react";
import logo from "../assets/logo.png"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {useNavigate } from "react-router-dom";
import '../App.css';
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const clearLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app', JSON.stringify(null));
  }

function Navbar() {
  const classes = useStyles();
  let navigate = useNavigate()
  function onClickHandler(){
    navigate("/")
  }
  return (
    <AppBar position="static" className="navClass">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
         <img src={logo} alt={""} width={50} onClick={()=>{onClickHandler()}}/>
        </Typography>
          <div className={classes.navlinks}>
            <Button onClick={()=>{clearLocalStorage()}}>
                Clear Geners
            </Button>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;