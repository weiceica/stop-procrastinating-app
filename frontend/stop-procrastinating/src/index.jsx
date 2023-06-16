import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page.jsx';
import TaskManager from './pages/task-manager/task-manager.jsx';
import TaskManagerArchive from './pages/task-manager/task-manager-archive.jsx';
import StopProcrastinating from './pages/stop-procrastinating/stop-procrastinating.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/task-manager" name="active-tasks" element={<TaskManager />} />
            <Route path="/task-manager/archived" name="archived-tasks" element={<TaskManagerArchive />} />
            <Route path="/stop-procrastinating" element={<StopProcrastinating />} />
          </Routes>
        </BrowserRouter>
      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);