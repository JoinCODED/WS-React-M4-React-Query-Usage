import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      setRooms([...rooms, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async (id) => {
    try {
      const response = await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      let tempRooms = rooms.filter((room) => room.id !== id);
      setRooms(tempRooms);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRoom = async (updatedRoom) => {
    try {
      const response = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${updatedRoom.id}`,
        updatedRoom
      );
      let tempRooms = rooms.map((room) =>
        room.id === updatedRoom.id ? response.data : room
      );
      setRooms(tempRooms);
    } catch (error) {
      console.log(error);
    }
  };

  const createMsg = async (roomId, msg) => {
    try {
      const response = await axios.post(
        `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
        msg
      );
      let tempRooms = rooms.map((room) =>
        room.id === roomId
          ? { ...room, messages: [...room.messages, response.data] }
          : room
      );
      console.log(tempRooms);
      setRooms(tempRooms);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} createMsg={createMsg} />}
            />
            <Route
              path="/"
              element={
                <ChatRoomsList
                  rooms={rooms}
                  createRoom={createRoom}
                  deleteRoom={deleteRoom}
                  updateRoom={updateRoom}
                />
              }
            />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
