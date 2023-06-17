import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SelectTime from './components/selectTime';
import SelectTask from './components/selectTask';
import Button from 'react-bootstrap/Button';
import './stop-procrastinating.css';
import NavigationBar from '../../containers/Navigationbar';
// import Yeller from './components/Yeller';

function StopProcrastinating() {
  const [time, setTime] = useState(10000);
  const [task, setTask] = useState(null);
  

  const handleSetTask = (t) => {
    setTask(t);
    console.log(task);
  }

  const handleSetTime = (t) => {
    setTime(t);
    console.log("I have set the time");
  };

  const handleStartTimer = (t) => {
    console.log(t);
    setInterval(console.log("start"), t);
  }



  return (
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
  );
}

export default StopProcrastinating;
