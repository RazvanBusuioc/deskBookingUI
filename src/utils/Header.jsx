import logo from '../images/logo.svg';
import account from '../images/account.svg'
import { Link } from "react-router-dom";
import React, {useState, useEffect, useRef} from "react";

const Header = () => {
    const [isDropdownMenuShown, setIsShown] = useState(false);

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    function useOutsideAlerter(ref) {
        useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
            setIsShown(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


    return ( 
        <div className="header">
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="desk-booking-logo" />
                </div>
            </Link>
            <div ref={wrapperRef} className="account" onClick={() => {setIsShown(!isDropdownMenuShown)}}>
                <img src={account} alt="account-logo" />
                {
                    isDropdownMenuShown && 
                    <div className="account-dropdown">
                        <Link
                            className='no-decoration'
                            to="/profile"
                            onClick={() => {
                            // logout({ returnTo: window.location.origin });
                            }}>
                            <div className="account-dropdown-item">
                                Profile
                            </div>
                        </Link>
                        {/* <hr /> */}
                        <Link
                            className='no-decoration'
                            to="/"
                            onClick={() => {
                            // logout({ returnTo: window.location.origin });
                            }}>
                            <div className="account-dropdown-item">
                                Signout
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Header;