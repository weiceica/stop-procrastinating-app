import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function EditTodo({ todo, onUpdateTodo, onCancel }) {
  const [name, setName] = useState(todo.name);
  const [priority, setPriority] = useState(todo.priority);

  const handleUpdate = () => {
    onUpdateTodo({
      ...todo,
      name,
      priority,
    });
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">low</option>
          <option value="moderate">moderate</option>
          <option value="high">high</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleUpdate}>
        Save
      </Button>{' '}
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}

export default EditTodo;
