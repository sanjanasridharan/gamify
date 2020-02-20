import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {CheckLogin} from '../context/CheckLogin'
import "../index.css";
import SimpleModal from './SimpleModal'
//import Rotation from 'react-rotation'
const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
    '& > * + *': {
      marginTop: theme.spacing(50),
     
    },
  },
}));

export default function ProgessBar({props}) {
    let contextType=CheckLogin
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
   let currentLevel=props
   const user = useContext(CheckLogin)


    const progress=() => {
      setCompleted(100);
       
      const changeLevel=user.changeLevel
      console.log(user)
    changeLevel(currentLevel)
    setTimeout(()=>{
      console.log("....")},20000);
    
      

      }

    
    


  return (
  <div>
      <div style={{padding:0}}> 
    <button onClick={progress}>clickme!</button>
    </div>
      <div className={classes.root}>
    
     < div id="trans">
     <LinearProgress variant="determinate"  value={completed} color="secondary" />
     
     </div>
     </div>
     
     </div>
  );
}