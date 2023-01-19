import UserLayout from "../../utils/UserLayout";
import desk from "../../images/desk.png"

const Home = () => {
    return ( 
        <UserLayout>
            <div className="home-page">
                <img className="home-img" src={desk} alt="" />
            </div>
        </UserLayout>
    );
}
 
export default Home;