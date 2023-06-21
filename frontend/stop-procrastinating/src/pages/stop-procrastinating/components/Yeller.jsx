import React from 'react';
import './yeller.css';
import { Button } from 'react-bootstrap';

const Yeller = ({task, exitYeller}) => {
    var text = "Time to do your task: " + task.name;
    var utterance = new SpeechSynthesisUtterance(text);
    const handleYeller = () => {
        exitYeller();
        speechSynthesis.cancel()
        console.log('success');
    };

    speechSynthesis.speak(utterance);

  return (
    <div className='yeller-page'>
    <div className='cnt'>
        <h1>{task.name}</h1>
        <div className='yeller'>Time is up!</div> 
    </div>
    <Button onClick={handleYeller}>
        Turn off Alarm
    </Button>
    </div>
  )
}

export default Yeller