import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";



const Layout = () => {
    return (
        <div>
           
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;