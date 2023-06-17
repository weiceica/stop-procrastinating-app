import React, { useState } from 'react';
import { Button, ListGroup, Accordion, Form } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionButton from 'react-bootstrap/AccordionButton';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onEditTodo, onDeleteTodo, onToggleArchive, buttonArchive, selectedTodo, onUpdateTodo, onCancel }) {
  const [name, setName] = useState(todo.name);
  const [priority, setPriority] = useState(todo.priority);
  
  const handleToggleComplete = () => {
    onToggleComplete(todo);
  };

  const handleToggleArchive = () => {
    onToggleArchive(todo);
  };

  const handleEditTodo = () => {
    onEditTodo(todo);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo._id);
  };

  const handleUpdate = () => {
    onUpdateTodo({
      ...todo,
      name,
      priority,
    });
  };

  return (
    <ListGroup.Item className={todo.completed ? 'completed' : ''}>
      <Accordion>
      <div className="d-flex justify-content-between align-items-center">
        <span>{todo.name}</span>
        <div>
          <Button variant="danger" size="sm" onClick={handleDeleteTodo}>
            Delete
          </Button>
          {buttonArchive === true && (
            <Button variant="warning" size="sm" onClick={handleToggleArchive}>
              Archive
            </Button>
          )}
          {buttonArchive === false && (
            <Button variant="warning" size="sm" onClick={handleToggleArchive}>
              Unarchive
            </Button>
          )}
          <AccordionButton bsPrefix='edit-button'>
              Edit
          </AccordionButton>
        </div>
      </div>
      <div>
        Priority: {todo.priority}
        <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
      </div>
      <AccordionBody>
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
      </AccordionBody>
      </Accordion>
    </ListGroup.Item>
  );
}

export default TodoItem;
