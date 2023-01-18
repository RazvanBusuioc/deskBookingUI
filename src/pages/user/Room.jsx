import UserLayout from "../../utils/UserLayout";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import React, { useState, useEffect } from 'react';
import calendar from "../../images/calendar.svg"
import Button from "../../components/Button"
import booking from "../../images/bookings-revert.svg"
import RoomComponent from "../../components/RoomComponent";

const formatDate = (d) => {
    return d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
}

const Room = () => {
    const [isCalendarShown, setIsShown] = useState(false);
    const [date, setDate] = useState(new Date());
    const roomId = useParams().id;
    const [currSelectedId, setCurrSelectedId] = useState(undefined)
    const [roomData, setRoomData] = useState({
        id: 2,
        location: "Bucharest Bd. Iuliu Maniu, nr 230",
        description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
        name: "Amfiteatrul PR10001",
        length: 6,
        width: 3,
        components: [
            {
                id: 1,
                type: 'desk',
                name: 'd1',
                state: 'available'
            },
            {
                id: 2,
                type: 'desk',
                name: 'd1',
                state: 'booked'
            },
            {
                id: 3,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 4,
                type: 'desk',
                name: 'd1',
                state: 'available'
            },
            {
                id: 5,
                type: 'desk',
                name: 'd1',
                state: 'available'
            },
            {
                id: 6,
                type: 'wall',
                name: 'd1',
                state: 'available'
            },
            {
                id: 7,
                type: 'chair',
                name: 'd1',
            },
            {
                id: 8,
                type: 'chair',
                name: 'd1',
            },
            {
                id: 9,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 10,
                type: 'chair',
                name: 'd1',
                state: 'booked'
            },
            {
                id:11,
                type: 'chair',
                name: 'd1',
                state: 'available'
            },
            {
                id: 12,
                type: 'wall',
                name: 'd1',
            },
            {
                id: 13,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 14,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 15,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 16,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 17,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 18,
                type: 'empty',
                name: 'd1',
            },
            {
                id: 19,
                type: 'wall',
                name: 'd1',
            }   
        ]
    });

    const bookSelection = () => {
        window.location.reload();
    }

    useEffect(() => {
        setRoomData({
            id: 2,
            location: "Bucharest Bd. Iuliu Maniu, nr 230",
            description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
            name: "Amfiteatrul PR10001",
            length: 6,
            width: 3,
            components: [
                {
                    id: 1,
                    type: 'desk',
                    name: 'd1',
                    state: 'available'
                },
                {
                    id: 2,
                    type: 'desk',
                    name: 'd1',
                    state: 'booked'
                },
                {
                    id: 3,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 4,
                    type: 'desk',
                    name: 'd1',
                    state: 'available'
                },
                {
                    id: 5,
                    type: 'desk',
                    name: 'd1',
                    state: 'available'
                },
                {
                    id: 6,
                    type: 'wall',
                    name: 'd1',
                    state: 'available'
                },
                {
                    id: 7,
                    type: 'chair',
                    name: 'd1',
                },
                {
                    id: 8,
                    type: 'chair',
                    name: 'd1',
                },
                {
                    id: 9,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 10,
                    type: 'chair',
                    name: 'd1',
                    state: 'booked'
                },
                {
                    id:11,
                    type: 'chair',
                    name: 'd1',
                    state: 'available'
                },
                {
                    id: 12,
                    type: 'wall',
                    name: 'd1',
                },
                {
                    id: 13,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 14,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 15,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 16,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 17,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 18,
                    type: 'empty',
                    name: 'd1',
                },
                {
                    id: 19,
                    type: 'wall',
                    name: 'd1',
                }   
            ]
        });
        setCurrSelectedId(undefined);
    }, [date])

    const onClickHandle = (componentId) => {
        const roomDataCopy = roomData;
        if (currSelectedId) {
            const idx = roomDataCopy.components.findIndex(item => item.id === currSelectedId)
            roomDataCopy.components[idx].state = 'available';
            if (componentId === currSelectedId) {
                setRoomData(roomDataCopy);
                setCurrSelectedId(undefined)
                return;
            }

        }
        const idx = roomDataCopy.components.findIndex(item => item.id === componentId)
        roomDataCopy.components[idx].state = 'current-selection';
        setRoomData(roomDataCopy);
        setCurrSelectedId(roomDataCopy.components[idx].id)
    }

    const getRoomComponents = (data) => {
        let contentW = []
        for (let i = 0; i < data.width; i++) {
            let contentL = []
            for (let j = 0; j < data.length; j++) {
                const currData = data.components[i * data.length + j]
                contentL.push(<RoomComponent onClickHandle={onClickHandle} room={currData} key={currData.id}/>)
            }
            contentW.push(<div className="room-components-width" key={i} > {contentL} </div>)
        }
        return contentW 
    }

    return ( 
        <UserLayout>
            <div className="room-header">
                <div className="room-title">
                    Amfiteatrul PR001
                </div>
                <div className="calendar-wrapper">
                    <div onClick={ () => {
                        setIsShown(!isCalendarShown)
                    }}>
                        <div className="calendar-short">
                        { `${formatDate(date)}`}
                            <img className="calendar-img-wrapper" src={calendar} alt="" />
                        </div>
                    </div>
                    {
                        isCalendarShown &&
                        <div className="calendar-dropdown">
                            <Calendar onChange={setDate} value={date} />
                        </div>
                    }
                </div>
            </div>
            <div className="room-components-container-wrapper">
                <div className="room-components-container">
                    { 
                        getRoomComponents(roomData)
                    }
                </div>
            </div>
            <div className="room-button">
                <Button disabled={!currSelectedId} onClick={() => {bookSelection()}}>
                    <div className="room-book-div">
                        <img className="room-book-img" src={booking} alt="book-logo" />
                        <div className="room-book-text"> Book </div>
                    </div>
                </Button>
            </div>
        </UserLayout>
    );
}
 
export default Room;