import React from "react";
import Button from "./Button";
import del from "../images/cancel.svg";
import update from "../images/update.svg";
import { useNavigate, useLocation } from "react-router-dom";


const AdminRoomCard = ({ data }) => {

    const navigate = useNavigate();
    const params = useLocation();

    const updateRoom = (room) => {
        window.location.reload();
    }
    const deleteRoom = (room) => {
        window.location.reload();
    }
    const openRoom = (room) => {
        navigate(params.pathname+'/'+room.id)
    }


    return (
        <div className="room-card admin" onClick={() => openRoom(data)}>
            <div className="room-name">
                {data.name}
            </div>
            <div className="room-location">
                {data.location}
            </div>
            <div className="room-description">
                {data.description}
            </div>
            <div className="room-buttons">
                <div className="update-button">
                    <Button onClick={() => updateRoom(data)}>
                        <div className="book-div">
                            <img className="book-img" src={update} alt="book-logo" />
                            <div className="book-text"> Update </div>
                        </div>
                    </Button>
                </div>
                <div className="delete-button">
                    <Button onClick={() => deleteRoom(data)}>
                        <div className="book-div">
                            <img className="book-img" src={del} alt="book-logo" />
                            <div className="book-text"> Delete </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminRoomCard;
