import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function TodoItem({ todo, onToggleComplete, onEditTodo, onDeleteTodo, onToggleArchive, buttonArchive }) {
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

  return (
    <ListGroup.Item className={todo.completed ? 'completed' : ''}>
      <div className="d-flex justify-content-between align-items-center">
        <span>{todo.name}</span>
        <div>
          <Button variant="secondary" size="sm" onClick={handleEditTodo}>
            Edit
          </Button>
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
        </div>
      </div>
      <div>
        Priority: {todo.priority}
        <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
      </div>
    </ListGroup.Item>
  );
}

export default TodoItem;
