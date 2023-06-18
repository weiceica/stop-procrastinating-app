import React from 'react';
import NavigationBar from '../../containers/Navigationbar';
import './landing-page.css';

const LandingPage = ({ section1Text, section2Text, link1, link2 }) => {

  const handleTaskManagerClick = () => {
    // Logic to navigate to the Task Manager page
    window.location.href = '/task-manager'; // Replace with the actual URL of the Task Manager page
  };

  const handleStopProcrastinatingClick = () => {
    // Logic to navigate to the Stop Procrastinating page
    window.location.href = '/stop-procrastinating'; // Replace with the actual URL of the Stop Procrastinating page
  };

  return (
    <div className="landing-page">
      <NavigationBar />
      <div className='body'>
      <div className="title-section">
        <h1 className="main-title">Stop Procrastinating</h1>
        <h2 className="sub-title">Your solution to productivity</h2>
      </div>

      <section className="section1">
        <h3 className="section-title">Task Manager</h3>
        <p className="section-description">
          Our Task Manager is your ultimate productivity companion. Stay on top of your to-do list, manage projects,
          and prioritize tasks with ease. Organize your workflow and streamline your productivity like never before.
        </p>
        <h3 className="section-title">Benefits of Using Our Task Manager:</h3>
        <ul className="benefits-list">
          <li>Efficiently manage and track your tasks</li>
          <li>Stay organized and focused on your goals</li>
          <li>Set deadlines and reminders for important tasks</li>
          <li>Collaborate with team members and delegate tasks</li>
          <li>Visualize your progress and achievements</li>
          <li>Boost productivity and reduce procrastination</li>
        </ul>
        <button className='task-m-button' onClick={handleTaskManagerClick}> Begin Organizing </button>
      </section>

      <section className="section2">
        <h3 className="section-title">Stop Procrastinaing</h3>
        <p className="section-description">
        Break free from procrastination and unlock your productivity potential. Stop Procrastinating is the app you need to stay organized, meet deadlines, and achieve your goals. Click the button below to get started and take control of your tasks today! </p>
        <button className='task-m-button' onClick={handleStopProcrastinatingClick}> Stop Procrastinating </button>
      </section>
      </div>
    </div>
  );
};

export default LandingPage;
