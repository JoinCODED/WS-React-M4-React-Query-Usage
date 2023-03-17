import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateRoomModal from "./UpdateRoomModal";

const ChatRoomItem = ({ room, deleteRoom, updateRoom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    deleteRoom(room.id);
  };

  return (
    <div className="group">
      <Link to={`/room/${room.slug}`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar">
            <div className="avatar-img">
              <img src={room.image} alt="#" />
            </div>
          </div>
          <div className="userMeta">
            <p>{room.title}</p>
            <span className="activeTime">{room.description}</span>
          </div>
        </div>
      </Link>

      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="delete" onClick={openModal}>
        Update
      </Button>
      <UpdateRoomModal
        isOpen={isOpen}
        closeModal={closeModal}
        room={room}
        updateRoom={updateRoom}
      />
    </div>
  );
};

export default ChatRoomItem;
