import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DateTime from 'react-datetime'

export default function ModalTodoForm({ show, handleClose, editTodo }) {

  const [checked, setChecked] = useState(false)
  const formRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const jsonData = Object.fromEntries(formData.entries())

    jsonData.is_done = jsonData.is_done ? true : false
    jsonData.target_hour = parseInt(jsonData.target_hour)
    handleClose(jsonData)
    console.log(jsonData);
  }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Todo Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} id="modal-todo-form" onSubmit={handleFormSubmit}>
          <input
            autoComplete="off"
            type="email"
            defaultValue=""
            className="d-none"
          />
          <input
            autoComplete="new-password"
            type="password"
            defaultValue=""
            className="d-none"
          />
          {editTodo ? (
            <input type="hidden" name="id" value={editTodo.id} />
          ) : (
            <></>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="e.g. Create 'Footer Component'"
              defaultValue={editTodo ? editTodo.title : ""}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              placeholder="e.g. Joe"
              defaultValue={editTodo ? editTodo.owner : ""}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Assigned At</Form.Label>
            <DateTime
              inputProps={{ name: "assigned_at" }}
              placeholder="e.g. 13 Apr 2023"
              defaultValue={editTodo ? editTodo.assigned_at : ""}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Target Hour</Form.Label>
            <Form.Control
              type="number"
              name="target_hour"
              defaultValue={editTodo ? editTodo.target_hour : ""}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="is_done"
              label="Is Done?"
              value={1}
              defaultChecked={editTodo ? editTodo.is_done : false}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(null)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            formRef.current.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
