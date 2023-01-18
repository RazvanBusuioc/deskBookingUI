import chair from '../images/chair.svg';
import desk from '../images/desk.svg';

const AddRoomComponent = ({ onClickHandle, component }) => {
    const typeToImg = (comp) => {
        const typeToImg = {
            'chair':  
                <div onClick={() => onClickHandle(comp.id)} className="room-component ">
                    <img src={chair} alt="" />
                </div>,
            'desk':
                <div onClick={() => onClickHandle(comp.id)} className="room-component">
                    <img src={desk} alt="" />
                </div>,
            'wall':
                <div onClick={() => onClickHandle(comp.id)} className="room-component wall">
                </div>,
            'empty':
                <div onClick={() => onClickHandle(comp.id)} className="room-component">
                </div>
        }
        return typeToImg[comp.type]
    }

    return (
        typeToImg(component)
    );
}
 
export default AddRoomComponent;