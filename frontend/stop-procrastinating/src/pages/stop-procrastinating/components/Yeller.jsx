import React from 'react';
import './yeller.css';
import flaminyong from './pictures/flaminyong.jpg';
import sound from './sounds/Mick Gordon  The Only Thing They Fear Is You  DOOM Eternal OST High Quality.mp3'
import flames from './pictures/flame.gif';
import { Button } from 'react-bootstrap';
import dean from './pictures/dean.webp'

const Yeller = (task, exitYeller) => {
    var audio = new Audio(sound);
    audio.play();
    const handleYeller = () => {
        exitYeller;
    };
  return (
    <div className='yeller-page'>
    <div className='cnt'>
        <h1>{task.name}</h1>
        <div className='yeller'>STOP PROCRASTINATING</div> 
    </div>
    <img style={{height:'250px'}} src={dean} alt='flaminyong'/>
    <div className='text'>ur a uncool if u do</div>
    <Button onClick={handleYeller}>
        click to be a procrastinate
    </Button>
    </div>
  )
}

export default Yeller