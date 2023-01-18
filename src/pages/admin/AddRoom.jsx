import Button from "../../components/Button";
import AdminLayout from "../../utils/AdminLayout";
import addRoom from '../../images/add_room.svg'
import AddRoomComponent from "../../components/AddRoomComponent";
import React, { useState, useEffect } from 'react';

const recomputeComponents = (newSize) => {
    let comp = []
    for (let i = 0; i < newSize.width * newSize.length; i++) {
        comp.push({
            id: i,
            type: 'empty'
        })
    }
    return comp
}

const AddRoom = () => {
    const [components, setComponents] = useState([]);
    const [size, setSize] = useState({width: 0, length: 0})
    const [details, setDetails] = useState({
        description: "",
        name: "",
        location: "",
    })

    const areDetailsFilled = () => {
        console.log(details)
        return details.description.length > 0 &&
               details.name.length > 0 &&
               details.location.length > 0 &&
               size.length > 0 &&
               size.width > 0;
    }

    const handleLengthChange = (e) => {
        const newLen = !e.target.value ? 0 : e.target.value;
        const width = size.width;
        setSize({
            length: newLen,
            width: width,
        });
        setComponents(recomputeComponents({
            length: newLen,
            width: width,
        }));
    }

    const handleWidthChange = (e) => {
        const newWidth = !e.target.value ? 0 : e.target.value;
        const len = size.length;
        setSize({
            width: newWidth,
            length: len,
        });
        setComponents(recomputeComponents({
            length: len,
            width: newWidth,
        }));
    }

    const shift = (type) => {
        const order = ['empty', 'chair', 'desk', 'wall'];
        return order[(order.findIndex(item => item === type) + 1) % order.length];
    }

    const onClickHandle = (id) => {
        // console.log(components)
        const componentsCopy = [...components];
        const idx = componentsCopy.findIndex(item => item.id === id)
        componentsCopy[idx] = {id : id, type: shift(componentsCopy[idx].type)};
        console.log(componentsCopy);
        setComponents(componentsCopy);
    }

    const getRoomComponents = (size, components) => {
        console.log('here')
        let contentW = []
        for (let i = 0; i < size.width; i++) {
            let contentL = []
            for (let j = 0; j < size.length; j++) {
                const component = components[i * size.length + j]
                contentL.push(<AddRoomComponent onClickHandle={onClickHandle} component={component} key={component.id}/>)
            }
            contentW.push(<div className="room-components-width" key={i} > {contentL} </div>)
        }
        return contentW 
    }

    return ( 
        <AdminLayout>
            <form className="add-room-form" action="">
                <div className="add-room-form-line">
                    <div className="add-room-form-detail">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required onChange={(e) => {
                            setDetails({...details, name:e.target.value})
                        }}/>
                    </div>

                    <div className="add-room-form-detail">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" required onChange={(e) => {
                            setDetails({...details, location:e.target.value})
                        }}/>
                    </div>
                </div>

                <div className="add-room-form-line">
                    <div className="add-room-form-detail">
                        <label htmlFor="length">Room Length</label>
                        <input type="number" id="length" onChange={handleLengthChange} required/>
                    </div>

                    <div className="add-room-form-detail">
                        <label htmlFor="width">Room Width</label>
                        <input type="number" id="width" onChange={handleWidthChange} required/>
                    </div>
                </div>

                <div className="add-room-form-line description">
                    <div className="add-room-form-detail description">
                        <label htmlFor="description">Description</label>
                        <input type="" id="description" required onChange={(e) => {
                            setDetails({...details, description:e.target.value})
                        }}/>
                    </div>
                </div>
                <div className="add-room-components-container-wrapper">
                    <div className="add-room-components-container">
                        { 
                            getRoomComponents(size, components)
                        }
                    </div>
                </div>
                <div className="add-room-button">
                    <Button disabled={!areDetailsFilled()} type="submit">
                        <div className="add-room-book-div">
                            <img className="add-room-book-img" src={addRoom} alt="book-logo" />
                            <div className="add-room-book-text"> Add Room </div>
                        </div>
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
 
export default AddRoom;