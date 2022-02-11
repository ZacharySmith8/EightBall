import React, {useState} from 'react';
import './EightBall.css'
function EightBall(props){
   //sets answers to prop answers. you can modify answers in index file. 
   let answers = props.answers;
   
   

   //States
   const [message,setMessage] = useState("Think About A Question")
   const [color,setColor] = useState("black")

   //Function For OnClick 
   const onClick = () => {
    let answer = answers[Math.floor(Math.random()* answers.length)];
    let {msg,color} = answer;
    setMessage(msg);
    setColor(color)
    } 
   
 
    return (
        <div onClick={onClick} 
        className="EightBall"
        style={{backgroundColor: color}}
        >
            <p className="answer">{message}</p>
        </div>
    )
}


export default EightBall