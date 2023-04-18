import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import todo from '../../assets/todo.png'
import calculator from '../../assets/calculator.png'
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (

        <div className='container d-flex mt-5 justify-content-center gap-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={todo} style={{ height: "300px", width: "auto" }} />
                <Card.Body>
                    <Link to="/todo" className='my-3 btn btn-lg bg-primary text-white' variant="primary">Todo App</Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={calculator} style={{ height: "300px", width: "auto" }} />
                <Card.Body>
                    <Link to="/counter" className='my-3 btn btn-lg bg-primary text-white' variant="primary">Counter App</Link>
                </Card.Body>
            </Card>
        </div>

    )
}
