import AdminLayout from "../../utils/AdminLayout";
import desk from "../../images/desk.png"

const AdminHome = () => {
    return ( 
        <AdminLayout>
            <div className="home-page">
                <img className="home-img" src={desk} alt="" />
            </div>
        </AdminLayout>
    );
}
 
export default AdminHome;