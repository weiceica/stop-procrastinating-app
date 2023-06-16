import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SelectTime from './components/selectTime';
import SelectTask from './components/selectTask';
import Button from 'react-bootstrap/Button';

// import Yeller from './components/Yeller';

function StopProcrastinating() {
  const [time, setTime] = useState(10000);
  const [task, setTask] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleSetTask = (t) => {
    setTask(t);
    console.log(task);
  }

  const handleSetTime = (t) => {
    setTime(t);
    clearInterval(timer);
    console.log("I have set the time");
  };

  const handleStartTimer = (t) => {
    setTimer(setInterval(function(){console.log("Yeller")}, t));
  }



  return (
    <>
    <Navbar fixed="sticky" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Stop Procrastinating</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/task-manager">Task Manager</Nav.Link>
            <Nav.Link href="/stop-procrastinating">Stop Procrastinating</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className="container">
      <h1>Stop Procrastinating</h1>
    </div>
    <SelectTask onSetTask={handleSetTask}/>
    <SelectTime task={task} onSetTime={handleSetTime}/> 
    <Button onClick={() => handleStartTimer(time)}>START</Button>
    {// <Yeller onYeller={handleYeller}/>
    }
    </>
  );
}

export default StopProcrastinating;
