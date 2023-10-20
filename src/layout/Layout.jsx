import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";


const Layout = () => {
    return (
        <div>
           <Helmet>
            <title>Event Master</title>
           </Helmet>
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;