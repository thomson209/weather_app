import React from 'react';
import './Daily.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from './assets/search.svg';
import Sunny from './assets/sunny.svg';
import Rain from './assets/rain.svg';
import Pcloudy from './assets/pcloudy.svg';
import Snow from './assets/snow.svg';

//column and text layout
function Daily() {
  return (
    <Router>
      <Container maxWidth="sm">  
      <Grid container="location_container" className="location" justify="center">
              <Typography variant="h5" >St. John's, CA</Typography> <img src={SearchIcon} alt=""/>
      </Grid>

          <Grid container="title_container" className="title" justify="center">
              <Typography variant="h5">Daily Forecast</Typography>
          </Grid>
        
          <Grid container="main_container" className="main" justify="space-between">
            <Grid item xs={2} sm={2}>
              <Typography className="text">Sunday</Typography>
              <Typography className="text">Monday</Typography>
              <Typography className="text">Tuesday</Typography>
              <Typography className="text">Wednesday</Typography>
              <Typography className="text">Thursday</Typography>
              <Typography className="text">Friday</Typography>
              <Typography className="text">Saturday</Typography>  
            </Grid>

            <Grid item xs={1} sm={1}>
              <img src={Sunny} alt=""/>
              <img src={Rain} alt=""/>
              <img src={Rain} alt=""/>
              <img src={Rain} alt=""/>
              <img src={Pcloudy} alt=""/>
              <img src={Snow} alt=""/>
              <img src={Snow} alt=""/>
            </Grid>

            <Grid item>
              <Typography className="text">10°</Typography>
              <Typography className="text">3°</Typography>
              <Typography className="text">7°</Typography>
              <Typography className="text">10°</Typography>
              <Typography className="text">10°</Typography>
              <Typography className="text">-10°</Typography>
              <Typography className="text">-1°</Typography> 
            </Grid>

            <Grid item>
              <Typography className="text1">5°</Typography>
              <Typography className="text1">0°</Typography>
              <Typography className="text1">-1°</Typography>
              <Typography className="text1">5°</Typography>
              <Typography className="text1">5°</Typography>
              <Typography className="text1">-15°</Typography>
              <Typography className="text1">-5°</Typography>
            </Grid>  
          </Grid> 
      </Container>         
    </Router>  
  );
}

export default Daily;