import Home from "../pages/user/Home";
import Rooms from "../pages/user/Rooms";
import Room from "../pages/user/Room";
import Bookings from "../pages/user/Bookings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "../pages/admin/AdminHome";
import AdminRooms from "../pages/admin/AdminRooms";
import AddRoom from "../pages/admin/AddRoom";
import AdminRoom from "../pages/admin/AdminRoom";

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/book-desk" element={<Rooms />} />
                <Route exact path="/book-desk/:id" element={<Room />} />
                <Route exact path="/bookings" element={<Bookings />} />
                <Route exact path="/adm" element={<AdminHome />} />
                <Route exact path="/adm/rooms" element={<AdminRooms />} />
                <Route exact path="/adm/rooms/:id" element={<AdminRoom />} />
                <Route exact path="/adm/add-room" element={<AddRoom />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Router;