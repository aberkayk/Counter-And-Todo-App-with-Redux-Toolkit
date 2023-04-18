import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
  const params = useParams()
  console.log(params);

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="sm">
        <Container>
          <Link className='navbar-brand' to="/">Counter & Todo App</Link>
          <div >
            <Nav variant="pills" className="me-auto d-flex">
              <Link className='text-decoration-none nav-link' to="/">Home</Link>
              <Link className='text-decoration-none nav-link' to="counter">Counter App</Link>
              <Link className='text-decoration-none nav-link' to="todo">Todo App</Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
