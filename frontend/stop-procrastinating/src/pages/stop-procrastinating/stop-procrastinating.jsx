import React, { useState } from 'react';
import SelectTime from './components/selectTime';
import SelectTask from './components/selectTask';
import Button from 'react-bootstrap/Button';
import './stop-procrastinating.css';
import NavigationBar from '../../containers/Navigationbar';
import Yeller from './components/Yeller';
import ProgressBar from 'react-bootstrap/ProgressBar';

function StopProcrastinating() {
  const [time, setTime] = useState(null);
  const [task, setTask] = useState(null);
  const [timer, setTimer] = useState(null);
  const [status, setStatus] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [c_timer, setCTimer] = useState(null);

  const handleSetTask = (t) => {
    setTask(t);
    console.log(task);
  };

  const handleSetTime = (t) => {
    setTime(t);
    clearInterval(timer);
    clearInterval(c_timer);
    setElapsed(0);
    setStatus(false);
    console.log("I have set the time");
  };

  const handleYeller = () => {
    setStatus(true);
  }

  const exitYeller = () => {
    setStatus(false);
    clearInterval(timer);
    clearInterval(c_timer);
    setElapsed(0);
  }

  const handleStartTimer = (t) => {
    console.log(t);
    let curr = 0;
    setCTimer(setInterval(function() {
      curr ++;
      setElapsed(curr);
      }, 1000));
    setTimer(setInterval(handleYeller, t));
  }

  return (
    <>{status === true ? <Yeller task={task} exitYeller={exitYeller}/> : <></>} 
    <div className='sp-body'>
      <NavigationBar/>
      <div className='sp-page'>
        <div className='cont'>
          <h1>Stop Procrastinating</h1>
          <SelectTask onSetTask={handleSetTask}/>
          <SelectTime task={task} onSetTime={handleSetTime}/> 
          <Button onClick={() => handleStartTimer(time)} disabled={task === null || time === null}>START</Button>
          {task === null ? <div>Please select a task.</div> : <></>}
          {time === null ? <div>Please select a time.</div> : <></>}
          <div className="pb">
          <ProgressBar min={0} now={elapsed} max={(time !== null ? time / 1000 : 100)} label={'Current'}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default StopProcrastinating;
