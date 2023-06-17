import React, { useState } from 'react';
import SelectTime from './components/selectTime';
import SelectTask from './components/selectTask';
import Button from 'react-bootstrap/Button';
import './stop-procrastinating.css';
import NavigationBar from '../../containers/Navigationbar';
import Yeller from './components/Yeller';

function StopProcrastinating() {
  const [time, setTime] = useState(10000);
  const [task, setTask] = useState(null);
  const [timer, setTimer] = useState(null);
  const [status, setStatus] = useState(false);
  

  const handleSetTask = (t) => {
    setTask(t);
    console.log(task);
  }

  const handleSetTime = (t) => {
    setTime(t);
    clearInterval(timer);
    setStatus(false);
    console.log("I have set the time");
  };

  const handleYeller = () => {
    setStatus(true);
    
  }

  const exitYeller = () => {
    setStatus(false);
  }

  const handleStartTimer = (t) => {
    console.log(t);
    setTimer(setInterval(handleYeller, t));
  }

  return (
    <>{status === true ? <Yeller task={task} exitYeller={exitYeller}/> : 
    <div className='sp-body'>
      <NavigationBar/>
      <div className='sp-page'>
        <div className='cont'>
          <h1>Stop Procrastinating</h1>
          <SelectTask onSetTask={handleSetTask}/>
          <SelectTime task={task} onSetTime={handleSetTime}/> 
          <Button onClick={() => handleStartTimer(time)}>START</Button>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default StopProcrastinating;
