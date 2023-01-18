import React from "react";
import Button from "./Button";
import booking from "../images/bookings-revert.svg"
import { useNavigate, useLocation } from "react-router-dom";


const RoomCard = ({ data }) => {

    const navigate = useNavigate();
    const params = useLocation();
    const openRoom = (room) => {
        navigate(params.pathname+'/'+room.id)
    }

    return (
        <div className="room-card">
            <div className="room-name">
                {data.name}
            </div>
            <div className="room-location">
                {data.location}
            </div>
            <div className="room-description">
                {data.description}
            </div>
            <div className="book-button">
                <Button onClick={() => openRoom(data)}>
                    <div className="book-div">
                        <img className="book-img" src={booking} alt="book-logo" />
                        <div className="book-text"> Book </div>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default RoomCard;
