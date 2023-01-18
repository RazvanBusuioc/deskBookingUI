import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import home from '../images/home.svg'
import bookings from '../images/bookings.svg'
import book from '../images/book.svg'

export function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const location = useLocation();
    const match =
      useMatch({ path: resolved.pathname, end: true }) ??
      ( to==='/' ? location.pathname === to : location.pathname.includes(to));
  
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

const Menu = () => {
    return ( 
        // <div className="menu">
        <nav className="menu">
            <CustomLink to={"/"}>
                <div>
                    <img  className="menu-img" src={home} alt="home-logo" />
                </div>
                <div>
                    Home
                </div>
            </CustomLink>
            <CustomLink to={"/book-desk"}>
                <div>
                    <img  className="menu-img" src={book} alt="home-logo" />
                </div>
                <div>
                    Book a Desk
                </div>
            </CustomLink>
            <CustomLink to={"/bookings"}>
                <div>
                    <img  className="your-bookings-img" src={bookings} alt="your-bookings-logo" />
                </div>
                <div>
                    Your Bookings
                </div>
            </CustomLink>
        </nav>
            // <div>Home</div>
            // <div>Book a desk</div>
            // <div>Your Bookings</div>
        // </div>
    );
}
 
export default Menu;