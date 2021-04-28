import React from 'react';
import './Nav.css';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import App from './App';
import Hourly from './Hourly';
import Daily from './Daily';
import TeamLogo from './assets/team_logo.svg';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

//drawer styling
const useStyles = makeStyles(() => ({
    drawerPaper: { 
        width: 'inherit',
        background: '#353535',
        paddingTop: '0px' 
    },
    link: { 
        textDecoration: 'none', 
        color: 'white'
    }
}))

//drawer operator
function Nav(){
  const classes = useStyles();  

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = ()=>{
      setDrawerOpen(true);
  }

  const closeDrawer = ()=>{
      setDrawerOpen(false);
  }
  
  //drawer and header layout
  return (  
    <Router>
    <Container maxWidth="sm">
        <main>
            <div className="main-head">
            <IconButton onClick={openDrawer}><MenuIcon className="menu"></MenuIcon></IconButton>
            <img className="team" src={TeamLogo} alt="logo"/>
            </div>
            <div style={{ display: 'flex' }}>   
                <Drawer style={{ width: '320px' }} 
                        open={drawerOpen} onClose={closeDrawer}
                        classes={{ paper: classes.drawerPaper}}>
                        
                    <img className="team" src={TeamLogo} alt="logo"/>

                <Container>
                    <List onClick={closeDrawer}>
                        <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon style={{ color: "white", fontSize: 36 }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Current Conditions"}/>
                        </ListItem>
                        </Link><br/>
                
                        <Link to="/hourly" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <QueryBuilderIcon style={{ color: "white", fontSize: 36 }}/>
                            </ListItemIcon>
                            <ListItemText primary={"Hourly Forecast"}/>
                        </ListItem>
                        </Link><br/>

                        <Link to="/daily" className={classes.link}>
                        <ListItem button>    
                            <ListItemIcon>
                                <CalendarTodayIcon style={{ color: "white", fontSize: 36 }}/>
                            </ListItemIcon>
                                <ListItemText primary={"Daily Forecast"}/>
                            </ListItem>
                            </Link>
                    </List>
                </Container>
                </Drawer>
        </div>
    </main>
    </Container> 

        <Switch>
            <Route path="/" exact component={App}></Route>
            <Route path="/hourly" exact component={Hourly}></Route>
            <Route path="/daily" exact component={Daily}></Route>
        </Switch> 
    </Router>
  )
}

export default Nav;
