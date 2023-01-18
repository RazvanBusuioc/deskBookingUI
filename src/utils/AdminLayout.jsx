import AdminMenu from "./AdminMenu";
import Header from "./Header";

const AdminLayout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className = "content-menu">
                <AdminMenu />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default AdminLayout;