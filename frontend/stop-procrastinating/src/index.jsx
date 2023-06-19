import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page.jsx';
import TaskManager from './pages/task-manager/task-manager.jsx';
import TaskManagerArchive from './pages/task-manager/task-manager-archive.jsx';
import StopProcrastinating from './pages/stop-procrastinating/stop-procrastinating.jsx';
import {AuthProvider, RequireAuth} from 'react-auth-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login.jsx';

export default function App() {
    return (
      <>
        <AuthProvider 
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
        >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<RequireAuth loginPath='/login'> <LandingPage /> </RequireAuth>} />
            <Route path="/task-manager" name="active-tasks" element={<RequireAuth loginPath='/login'> <TaskManager /> </RequireAuth>} />
            <Route path="/task-manager/archived" name="archived-tasks" element={<RequireAuth loginPath='/login'> <TaskManagerArchive /> </RequireAuth>} />
            <Route path="/stop-procrastinating" element={<RequireAuth loginPath='/login'> <StopProcrastinating /> </RequireAuth>} />
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </>
      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);