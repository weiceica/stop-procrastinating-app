import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function QueryTodo({ onQuery }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const navigateToArchivedPage = () => {
    navigate('/task-manager/archived')
  };
  const navigateToActivePage = () => {
    navigate('/task-manager')
  };

  const handleQuery = (q) => {
    console.log(q);
    onQuery(q);
  };

  return (
    <div>
      {location.pathname === '/task-manager' && (
        <Button variant="success" onClick={() => handleQuery('all')}>
          View All Active Tasks
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="light" onClick={() => handleQuery('low')}>
          Low Priority
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="secondary" onClick={() => handleQuery('moderate')}>
          Moderate Priority
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="dark" onClick={() => handleQuery('high')}>
          High Priority
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="success" onClick={() => handleQuery('completed')}>
          View Completed
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="danger" onClick={() => handleQuery('incomplete')}>
          View Incomplete
        </Button>
      )}
      {location.pathname === '/task-manager' && (
        <Button variant="info" onClick={navigateToArchivedPage}>
          View Archived
        </Button>
      )}
      {location.pathname === '/task-manager/archived' &&(
        <Button variant="info" onClick={navigateToActivePage}>
          View Active Tasks
        </Button>
      )}
    </div>
  );
}

export default QueryTodo;