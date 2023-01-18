import UserLayout from "../../utils/UserLayout";
import RoomCard from "../../components/RoomCard";
import AdminLayout from "../../utils/AdminLayout";
import AdminRoomCard from "../../components/AdminRoomCard";

const rooms = [
    {
        id: 1,
        location: "Bucharest Bd. Iuliu Maniu, nr 230",
        description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
        name: "Amfiteatrul PR10001"
    },
    {
        id: 2,
        location: "Bucharest Bd. Iuliu Maniu, nr 230",
        description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
        name: "Amfiteatrul PR10001"
    },
    {
        id: 3,
        location: "Bucharest Bd. Iuliu Maniu, nr 230",
        description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
        name: "Amfiteatrul PR10001"
    },
    {
        id: 4,
        location: "Bucharest Bd. Iuliu Maniu, nr 230",
        description: "Amfiteatrul PR001 se afla la  parterul cladirii PRECIS, cladire ce se afla in campusul Universitatii Politehnica Bucuresti",
        name: "Amfiteatrul PR10001"
    }
]

const AdminRooms = () => {
    return ( 
        <AdminLayout>
            <div className="rooms">
                {rooms.map((room, key) => {
                    return (
                        <AdminRoomCard data={room} key={room.id}/>
                    )
                })}
            </div>
        </AdminLayout>
    );
}
 
export default AdminRooms;