import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

const SelectTask = ({onSetTask}) => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(null);

    const handleSetTask = (t) =>{
        setTask(t.name);
        onSetTask(t);
    };

    useEffect(() => {
      fetchTodos();
    }, []);
  
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks');
        console.log(response.data);
        const todos = response.data.event;
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {task === null ? 'Select task' : task}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {todos.map((todo) => (
        todo.state === 'active' ? ( 
          <Dropdown.Item 
            key={todo._id} 
            onClick={() => handleSetTask(todo)}
          >
            {todo.name}
          </Dropdown.Item>) : <></>
      ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectTask