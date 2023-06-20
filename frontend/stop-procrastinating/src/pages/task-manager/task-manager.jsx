import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import QueryTodo from './components/QueryTodo';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './task-manager.css'
import NavigationBar from '../../containers/Navigationbar';



function TaskManager() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [query, setQuery] = useState('all');
    
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

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleArchive = async (todo) => {
    let newTodo = {
      state: 'pending-deletion'
    };
    if(todo.state === 'pending-deletion') newTodo.state = 'active';
    console.log(newTodo);
    const updatedTodos = todos.map((t) => {
      if(t._id === todo._id) {
        return { ...todo, state: newTodo.state};
      }
      return t;
    });
    try {
      const response = await axios.patch(`https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks/${todo._id}`, newTodo);
      setTodos(updatedTodos);
    } catch (err) {
      console.error(`Error updating todo:`, err);
    }
  }

  const handleToggleComplete = async (todo) => {
    const newTodo = {
      completed: !todo.completed
    };
    const updatedTodos = todos.map((t) => {
      if (t._id === todo._id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    try {
      const response = await axios.patch(`https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks/${todo._id}`, newTodo);
      console.log(response.data.event);
      setTodos(updatedTodos);
    } catch (err) {
      console.error(`Error updating todo:`, err);
    }
  };

  const handleEditTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const handleUpdateTodo = async (updatedTodo) => {
    console.log(updatedTodo);
    const updatedTodos = todos.map((t) => {
      if (t._id === updatedTodo._id) {
        return { ...t, name: updatedTodo.name, priority: updatedTodo.priority };
      }
      return t;
    });
    try {
      const response = await axios.patch(`https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks/${updatedTodo._id}`, updatedTodo);
      console.log(response.data.event);
      setTodos(updatedTodos);
      setSelectedTodo(null);
    } catch (err) {
      console.error(`Error updating todo:`, err);
      setSelectedTodo(null);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
        await axios.delete(`https://stop-procrastinating-3wtssye19-weiceica.vercel.app/api/v1/tasks/${todoId}`);
        console.log('Todo deleted successfully');
    
        // Handle success response as needed
        // For example, you can update the todos state by removing the deleted todo
        const updatedTodos = todos.filter((todo) => todo._id !== todoId);
        setTodos(updatedTodos);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
  };

  /// basically, I have to change this 'all' to whatever button I clicked in QueryTOdo.jsx

  const handleQueryMode = (q) => {
    setQuery(q)
  };

  return (
    <div className='page'>
      <NavigationBar/>
        <div className='container'>
        <div className='todo-list'>
          <AddTodo onAddTodo={handleAddTodo} />
          <QueryTodo onQuery={handleQueryMode}/>
          <TodoList
            todos={todos}  
            onToggleComplete={handleToggleComplete}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
            onToggleArchive={handleToggleArchive}
            showArchive={false}
            buttonArchive={true}
            queryMode={query}
            todo={selectedTodo} 
            onUpdateTodo={handleUpdateTodo} 
            onCancel={() => setSelectedTodo(null)}
          />
        </div>
        </div>
    </div>
  );
}

export default TaskManager;
