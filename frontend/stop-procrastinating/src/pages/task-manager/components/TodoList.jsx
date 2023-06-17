import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// this is a terrible way of doing queries but whatever for now
function selectQuery(queryMode, todos) {
  let viewTodos = [];
  console.log(queryMode);
  if(queryMode === 'all'){
    for (const todo of todos){
      if(todo.state === 'active') viewTodos.push(todo);
    }
  }
  else if(queryMode === 'low'){
    for (const todo of todos){
      if(todo.state === 'active' && todo.priority === 'low') viewTodos.push(todo);
    }
  }
  else if(queryMode === 'moderate'){
    for (const todo of todos){
      if(todo.state === 'active' && todo.priority === 'moderate') viewTodos.push(todo);
    }
  }
  else if(queryMode === 'high'){
    for (const todo of todos){
      if(todo.state === 'active' && todo.priority === 'high') viewTodos.push(todo);
    }
  }
  else if(queryMode === 'completed'){
    for (const todo of todos){
      if(todo.state === 'active' && todo.completed === true) viewTodos.push(todo);
    }
  }
  else if(queryMode === 'incomplete'){
    for (const todo of todos){
      if(todo.state === 'active' && todo.completed === false) viewTodos.push(todo);
    }
  }
  else {
    console.error("you have selected a query that is currently unable to be completed");
  }
  return viewTodos;
}

function TodoList({ todos, onToggleComplete, onEditTodo, onDeleteTodo, onToggleArchive, showArchive, buttonArchive, queryMode, onUpdateTodo, onCancel }) {
  const [viewTodos, setViewTodos] = useState(todos);

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...viewTodos];
    // Remove dragged item
    const [reorderedTodos] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedTodos);
    // Update State
    setViewTodos(updatedList);
  };

  useEffect(() => {
    if (showArchive === false) {
      setViewTodos(selectQuery(queryMode, todos));
    } else {
      const pendingDeletionTodos = todos.filter(todo => todo.state === 'pending-deletion');
      setViewTodos(pendingDeletionTodos);
    }
  }, [todos, queryMode, showArchive]);

  return (
    <DragDropContext onDragEnd={handleDrop}>
    <Droppable droppableId="list-container">
    {(provided) => (
      <div
      className="list-container"
      {...provided.droppableProps}
      ref={provided.innerRef}
      >
    <ListGroup>
      {viewTodos.map((todo, index) => (
        <Draggable key={todo._id} draggableId={todo._id} index={index}>
           {(provided) => (
            <div className="item-container"
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}>
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleArchive={onToggleArchive}
          buttonArchive={buttonArchive}
          onUpdateTodo={onUpdateTodo}
          onCancel={onCancel}
        />
        </div>
    )}
        </Draggable>
      ))}
    </ListGroup>
    {provided.placeholder}
    </div>
    )}
    </Droppable>
  </DragDropContext>
  );
}

export default TodoList;
