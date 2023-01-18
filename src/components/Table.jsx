import Button from "./Button";
import cancel from '../images/cancel.svg'


const Table = ({data}) => {

    const cancelBooking = (booking) => {
        console.log(`Canceling booking with id ${booking.id}`)
    }

    return ( 
        <table className="bookings-table">
            <thead className="bookings-header">
                <th className="bookings-header-entry date">Date</th>
                <th className="bookings-header-entry room">Room</th>
                <th className="bookings-header-entry desk">Desk</th>
                <th className="bookings-header-entry cancel"></th>
            </thead>
            {data.map((booking, key) => {
                return (
                    <tr className={`bookings-table-row ${booking.state}-booking`} key={booking.id}>
                        <td className="bookings-table-entry">{booking.date}</td>
                        <td className="bookings-table-entry">{booking.room}</td>
                        <td className="bookings-table-entry">{booking.desk}</td>
                        <td className="bookings-table-entry cancel">
                        <Button className='' disabled={booking.state !== 'active'} onClick={() => cancelBooking(booking)}>
                            <div className="cancel-div">
                                <img  className="cancel-img" src={cancel} alt="cancel-logo" />
                                <div className="cancel-text"> Cancel </div>
                            </div>
                        </Button>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}
 
export default Table;