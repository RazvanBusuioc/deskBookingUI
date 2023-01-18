import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import home from '../images/home.svg'
import add from '../images/add.svg'
import rooms from '../images/rooms.svg'

export function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const location = useLocation();
    const match =
      useMatch({ path: resolved.pathname, end: true }) ??
      ( to==='/adm' ? location.pathname === to : location.pathname.includes(to));
  
    return (
      <div className={"nav-div" + (match ? " active" : "")}>
        <Link
          to={to}
          {...props}
          className={"nav-link"}
        >
          {children}
        </Link>
      </div>
    );
}

const AdminMenu = () => {
    return ( 
        // <div className="menu">
        <nav className="menu">
            <CustomLink to={"/adm"}>
                <div>
                    <img  className="menu-img" src={home} alt="home-logo" />
                </div>
                <div>
                    Home
                </div>
            </CustomLink>
            <CustomLink to={"/adm/rooms"}>
                <div>
                    <img  className="menu-img" src={add} alt="home-logo" />
                </div>
                <div>
                    Rooms
                </div>
            </CustomLink>
            <CustomLink to={"/adm/add-room"}>
                <div>
                    <img  className="your-bookings-img" src={rooms} alt="your-bookings-logo" />
                </div>
                <div>
                    Add Room
                </div>
            </CustomLink>
        </nav>
    );
}
 
export default AdminMenu;