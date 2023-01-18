import React, { useState } from 'react';
import chair from '../images/chair.svg';
import desk from '../images/desk.svg';

const RoomComponent = ({ onClickHandle, room }) => {
    const typeToImg = {
        'chair':  
        <div className={"room-component not-bookable"}>
            <img src={chair} alt="" />
        </div>,
        'desk':
        <div onClick={() => room.state !=='booked' && onClickHandle(room.id)} className={"room-component " + room.state}>
            <img src={desk} alt="" />
        </div>,
        'wall':
        <div className={"room-component wall"}>
        </div>,
        'empty':
        <div className={"room-component not-bookable"}>
        </div>
    }

    return (
        typeToImg[room.type]
    );
}
 
export default RoomComponent;

/*
0 0 0 0
1 1 1 1
*/