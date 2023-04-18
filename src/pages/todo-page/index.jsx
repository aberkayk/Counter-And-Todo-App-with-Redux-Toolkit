import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import ModalTodoForm from './components/modal-todo-form';
import { addEditTodo, removeTodo } from '../../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX, } from '@fortawesome/free-solid-svg-icons';


export default function TodoPage() {
  const { todoState } = useSelector(state => state)
  const [show, setShow] = useState(false)
  const [editTodo, setEditTodo] = useState(null)

  const dispatch = useDispatch()

  const handleClose = (data) => {
    if (data !== null) {
      dispatch(addEditTodo(data))
    }
    setShow(false)
    setEditTodo(null)
  }

  return (
    <>
      <ModalTodoForm show={show} handleClose={handleClose} editTodo={editTodo} />
      <main>
        <Button onClick={() => setShow(true)} className='my-4' variant='success'>Add Todo</Button>
        <Table striped bordered hover>
          <thead>
            <tr className='align-middle'>
              <th>ID</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Assigned At</th>
              <th>Hour</th>
              <th>Done</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              todoState.todos.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.owner}</td>
                    <td>{item.assigned_at}</td>
                    <td>{item.target_hour}</td>
                    <td>
                      {
                        item.is_done ? (<FontAwesomeIcon color='green' icon={faCheck} />) : (<FontAwesomeIcon color='red' icon={faX} />)
                      }
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          setShow(true);
                          setEditTodo(item)
                        }}
                        className="btn btn-sm"
                        variant="success"
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn btn-sm"
                        variant="danger"
                        onClick={() => {
                          dispatch(removeTodo(item.id))
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </main>
    </>
  )
}
