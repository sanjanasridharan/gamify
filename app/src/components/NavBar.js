import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
   marginLeft:2
   
  },
  title1:{
    marginLeft:1380
  },
  title2:{
    marginLeft:4
  }
}));
export const NavBar = () => {
  const classes = useStyles();
  var a=10
  var user="chetan"
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
           {user}
          </Typography>
          
          <EmojiEventsIcon  className={classes.title1}/>
  <Typography variant="h5" className={classes.title2}>{a}</Typography>
        
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

