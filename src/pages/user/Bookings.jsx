import UserLayout from "../../utils/UserLayout";
import Table from "../../components/Table";

const data = [
    {
        id: '1',
        date: "12/09/2022",
        room: "Room A",
        desk: "Desk 4C",
        state: "active"
    },
    {
        id: '2',
        date: "12/09/2022",
        room: "Room B",
        desk: "Desk 4C",
        state: "canceled"
    },
    {
        id: '3',
        date: "12/09/2022",
        room: "Room C",
        desk: "Desk 4C",
        state: "past"
    }
]

const Bookings = () => {
    return ( 
        <UserLayout>
            <Table data={data}/>
        </UserLayout>
    );
}
 
export default Bookings;