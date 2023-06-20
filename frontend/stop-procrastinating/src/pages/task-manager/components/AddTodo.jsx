import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

function AddTodo({ onAddTodo }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const handleAdd = async () => {
    if (name.trim() !== '') {
      const newTodo = {
        name,
        priority,
        completed: false,
      };
      try {
        const response = await axios.post('https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks', newTodo);
        console.log(response.data.event); // Log the response data
        onAddTodo(response.data.event);
      } catch (error) {
        console.error('Error creating todo:', error);
      }
      setName('');
      setPriority('');
    }
  };

  return (
    <div>
      <Accordion defaultActiveKey={null}>
      <Accordion.Item eventKey="0">
      <AccordionHeader> Add Todo </AccordionHeader>
      <AccordionBody>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="low">low</option>
          <option value="moderate">moderate</option>
          <option value="high">high</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
      </AccordionBody>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default AddTodo;
