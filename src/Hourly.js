import React from 'react';
import './Daily.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from './assets/search.svg';
import Sunny from './assets/sunny.svg';
import Pcloudy from './assets/pcloudy.svg';
import Snow from './assets/snow.svg';

//column and text layout
function Hourly() {
    return (
      <Router>
        <Container maxWidth="sm">  
        <Grid container="location_container" className="location" justify="center">
                <Typography variant="h5" >St. John's, CA</Typography> <img src={SearchIcon} alt=""/>
        </Grid>
  
            <Grid container="title_container" className="title" justify="center">
                <Typography variant="h5">Hourly Forecast</Typography>
            </Grid>
          
            <Grid container="main_container" className="main" justify="space-between">
              <Grid item xs={2} sm={2}>
                <Typography className="text">12pm</Typography>
                <Typography className="text">1pm</Typography>
                <Typography className="text">2pm</Typography>
                <Typography className="text">3pm</Typography>
                <Typography className="text">4pm</Typography>
                <Typography className="text">5pm</Typography>
                <Typography className="text">6pm</Typography>
                <Typography className="text">7pm</Typography>
                <Typography className="text">8pm</Typography>
                <Typography className="text">9pm</Typography>
                <Typography className="text">10pm</Typography>
                <Typography className="text">11pm</Typography>  
              </Grid>

              <Grid item xs={1} sm={1}>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Sunny} alt=""/>
                <img src={Pcloudy} alt=""/>
                <img src={Snow} alt=""/>
                <img src={Snow} alt=""/>
                <img src={Snow} alt=""/>
              </Grid>

              <Grid item>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">Sunny</Typography>
                <Typography className="text">P Cloudy</Typography>
                <Typography className="text">Lt Snow</Typography>
                <Typography className="text">Lt Snow</Typography>
                <Typography className="text">Lt Snow</Typography>
              </Grid>

              <Grid item>
                <Typography className="text">8°</Typography>
                <Typography className="text">9°</Typography>
                <Typography className="text">9°</Typography>
                <Typography className="text">10°</Typography>
                <Typography className="text">10°</Typography>
                <Typography className="text">9°</Typography>
                <Typography className="text">9°</Typography>
                <Typography className="text">8°</Typography>
                <Typography className="text">7°</Typography>
                <Typography className="text">7°</Typography>
                <Typography className="text">6°</Typography>
                <Typography className="text">5°</Typography>   
              </Grid>

              <Grid item>
                <Typography className="text2">WSW30</Typography>
                <Typography className="text2">WSW31</Typography>
                <Typography className="text2">SW33</Typography>
                <Typography className="text2">SW35</Typography>
                <Typography className="text2">SW34</Typography>
                <Typography className="text2">SW36</Typography>
                <Typography className="text2">S 28</Typography>
                <Typography className="text2">S 23</Typography>
                <Typography className="text2">SSW19</Typography>
                <Typography className="text2">SW13</Typography>
                <Typography className="text2">SSW10</Typography>
                <Typography className="text2">SW12</Typography>
              </Grid>  
            </Grid>
        </Container>         
      </Router>  
    );
  }
  
  export default Hourly;