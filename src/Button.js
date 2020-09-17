import React,{useEffect,useState} from 'react';
import  {useSpring,animated} from 'react-spring'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Button.css';
import {list} from './info';

const Button =() => {


  const [Info,setInfo] = useState([]);    
  const [userText, setUserText] = useState("None");
  const [Log,setLog] = useState("");
 

 

  
  const anim = useSpring({
    from:{
      
      transform: `translateY(0px)`

    },
    to:{

      transform: `translateY(3px)`
    }

  });

  useEffect(() => {
    setInfo(list.filter((content)=>
    {return content.name.toLowerCase().indexOf(Log.toLowerCase())!==-1}));
      
      const handleUserKeyPress = event => {
      const { key } = event;
      if(key === "Backspace"||key==="Delete"){
        if(Log.length>=0){
          var newLog = Log.slice(0,-1);
          setLog(newLog);
          console.log({Log});
        }
      }
      else if(key === "Control" || key === "Shift"||key==="Enter"||key==="Escape"){

        console.log(key);
      }

      else{
      
        console.log(Log.length);
      document.getElementById('pop').style.transform = 'translate(0, 0.375em)';
        
       setUserText(`${key}`);
       setLog(`${Log}${key}`);
        console.log({Log});
      }
       
        
    };

    const handleUserKeyup = event =>{

      document.getElementById('pop').style.color = 'white';
      document.getElementById('pop').style.transform = 'translate(0, 0)';

    }

    window.addEventListener("keydown", handleUserKeyPress);
    window.addEventListener("keyup", handleUserKeyup);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
      window.addEventListener("keyup", handleUserKeyup);
    };
  }, [Log]); 

function logclear(){
  console.log(Log)
  setLog("");
}


return(

<div>

<animated.div style={anim}>
  <button id="pop" className="big-button margin10">{userText}</button>
  <button id="pop" className="big-button" onClick={logclear}>{Log}</button>




</animated.div> 

<div className="mt30">
      <Grid container spacing={3}>
      {Info.map((data) => {
        return <Grid item xs={6} key={data.key}>
          <Paper className="pad5">{data.name}</Paper>
          </Grid>})}


      </Grid>
    </div>
</div>

);
    
  }


export default Button;
