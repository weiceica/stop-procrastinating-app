import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
  return (
    <>
    <div className='navbar-container'>
      <Navbar fixed="sticky" sbg="transparent">
          <Container className="d-flex px-1">
            <Navbar.Brand href="/">Stop Procrastinating</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/task-manager">Task Manager</Nav.Link>
              <Nav.Link href="/stop-procrastinating">Stop Procrastinating</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <hr className="navbar-hr mx-5" />
    </div>
    </>
  )
}

export default NavigationBar