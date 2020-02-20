import React,{ useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './ProgressBar'
import { makeStyles } from '@material-ui/core/styles';
import {CheckLogin} from '../context/CheckLogin'
import SimpleModal from './SimpleModal';


function Movi({movie,icount}){
  let contextType=CheckLogin
  const user = useContext(CheckLogin)
  const useStyles = makeStyles(theme => ({
    paper: {
      opacity:0.2
    },
  }));
  const useStyles1 = makeStyles(theme => ({
    paper: {
      opacity:1
    },
  }));
  const classes = useStyles();
  const classes1 = useStyles1();
    let m="https://www.synamedia.com/wp-content/uploads/2019/04/synamedia-parallax-fallback-1600x900.jpg"
    var check
    let isNotcomplete
    let x=4
    console.log(x)
    const currentLevel=user.currentLevel
    const splashDisplay=user.splashDisplay
    var useSplash
    console.log(currentLevel)
    console.log(splashDisplay)
    if(splashDisplay===1 && currentLevel===movie.level)
    {
    
      useSplash=<SimpleModal  props={movie.level-1}/>
      
    }
    else{
      useSplash=""
    }
    
    if( movie.level===1 || movie.level<=currentLevel)
    {
      isNotcomplete=false
      console.log("inside")
    }
    else
    {
      isNotcomplete=true
    }
    
  if(icount<=movie.level)
  {
    check=<ProgressBar  props={movie.level}/>
    icount=icount+1

  }
  else{
    check=""
  }
  return (
    
    <div>
  
    <div style={{marginBottom:'100px'}} className={isNotcomplete ? classes.paper : classes1.paper}>
      <Card style={{maxWidth: '500px', marginBottom: '10px'}}>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}}image={m}/>
        <CardContent>
          <Typography variant="headline" component="h2">{ movie.movieName }</Typography>
          <Typography component="h2" color="textSecondary">LEVEL:{ movie.level }</Typography>
          <br />
        </CardContent>
      </Card>
    </div>
    <div>
      {check}
    </div>
    <div>
      {useSplash}
    </div>
</div>
  )
}
function MovieList({props}) {
  
let allData=props
//console.log(props)
  return (
    <div className="app">
      
      <div>
       
          {allData.map((movie,icount) => ( 
          <Movi
           movie={movie} icount={icount}
           />))}
       </div>

    </div>
  )
}

export default MovieList
