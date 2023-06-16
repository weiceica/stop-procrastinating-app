import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const SelectTime = ({task, onSetTime}) => {
    const min_1 = 10000;
    const min_5 = 300000;
    const min_10 = 6000000;

    const [selected, setSelected] = useState(min_1);

    const [showAlert, setShowAlert] = useState(false);



    const handleSetTime = async (time) =>{
        try {
            onSetTime(time);
            setSelected(time);
          } catch (err) {
            console.error(`Error updating todo:`, err);
            setShowAlert(true);
          }
    };

  return (
    <>
    <ButtonGroup aria-label="Basic example">
      <Button variant={selected === min_1 ? 'primary' : 'secondary'} onClick={() => handleSetTime(min_1, task)}>10 seconds</Button>
      <Button variant={selected === min_5 ? 'primary' : 'secondary'} onClick={() => handleSetTime(min_5, task)}>5 min</Button>
      <Button variant={selected === min_10 ? 'primary' : 'secondary'} onClick={() => handleSetTime(min_10, task)}>10 min</Button>
    </ButtonGroup>
    {showAlert && (
        <Alert variant="danger" onClick={() => setShowAlert(false) } dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
          Select a task and try again.
            </p>
        </Alert>
      )}
      </>
  )
}

export default SelectTime