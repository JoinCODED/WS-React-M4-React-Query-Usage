import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";

const UpdateRoomModal = ({ room, isOpen, closeModal, updateRoom }) => {
  const [roomForm, setRoomForm] = useState({
    id: room.id,
    title: room.title,
    image: room.image,
    description: room.description,
  });
  const handleChange = (event) => {
    setRoomForm({ ...roomForm, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRoom(room);
    closeModal();
  };
  return (
    <Modal centered show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update a room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control
              value={roomForm.title}
              type="text"
              name="title"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control
              value={roomForm.image}
              type="text"
              name="image"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control
              type="text"
              name="description"
              onChange={handleChange}
              value={roomForm.description}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Update room
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateRoomModal;
