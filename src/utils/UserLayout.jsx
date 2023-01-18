import Header from "./Header";
import Menu from "./Menu";

const UserLayout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className = "content-menu">
                <Menu />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default UserLayout;