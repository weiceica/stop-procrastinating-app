import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const SelectTime = ({task, onSetTime}) => {
    const secs_1 = 1000;
    const secs_10 = 10000;
    const min_1 = 60000;
    const min_5 = 300000;
    const min_10 = 6000000;

    const [selected, setSelected] = useState();



    const handleSetTime = async (time) =>{
        onSetTime(time);
        setSelected(time);
    };

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant={selected === secs_1 ? 'danger' : 'secondary'} onClick={() => handleSetTime(secs_1, task)}  disabled={task === null}>1 sec</Button>
      <Button variant={selected === secs_10 ? 'danger' : 'secondary'} onClick={() => handleSetTime(secs_10, task)}  disabled={task === null}>10 sec</Button>
      <Button variant={selected === min_1 ? 'danger' : 'secondary'} onClick={() => handleSetTime(min_1, task)}  disabled={task === null}>1 min</Button>
      <Button variant={selected === min_5 ? 'danger' : 'secondary'} onClick={() => handleSetTime(min_5, task)}  disabled={task === null}>5 min</Button>
      <Button variant={selected === min_10 ? 'danger' : 'secondary'} onClick={() => handleSetTime(min_10, task)}  disabled={task === null}>10 min</Button>
    </ButtonGroup>
  )
}

export default SelectTime