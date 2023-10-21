import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Toaster } from "react-hot-toast";



const Layout = () => {
    return (
        <div>
           
            <NavBar></NavBar>
            <div className="min-h-screen p-5">
                <Toaster/>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;