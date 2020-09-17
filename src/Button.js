import React,{useEffect,useState}  from 'react';
import  {useSpring,animated} from 'react-spring'
import './Button.css';

const Button =() => {


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

      const handleUserKeyPress = event => {
      const { key } = event;

      document.getElementById('pop').style.transform = 'translate(0, 0.375em)';
      
        setUserText(`${key}`);

        setLog(`${Log}${key}`);
        console.log({key});
        
       
        
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
  <animated.div style={anim}>
  <button id="pop" className="big-button margin10">{userText}</button>
  <button id="pop" className="big-button" onClick={logclear}>{Log}</button>
</animated.div> 
);
    
  }


export default Button;
