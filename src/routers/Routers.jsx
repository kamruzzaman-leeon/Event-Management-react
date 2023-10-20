
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../component/Layout';
import Home from '../component/Home';
import Services from '../component/Services';
import Service from '../component/Service';
import AboutUs from '../component/AboutUs';
// import ErrorPage from '../component/ErrorPage';
import NotFound from '../component/NotFound';
import Login from '../component/login';
import Register from '../component/Register';

const Routers = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/home",
                element:<Home></Home>,
            },
            {
                path:"/services",
                element:<Services></Services>,
            },
            {
                path:"/service",
                element:<Service></Service>,
            },
            {
                path:"/about-us",
                element:<AboutUs></AboutUs>,
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/register",
                element:<Register></Register>,
            },
            {
                path:"*",
                element:<NotFound></NotFound>,
            }
            
        ]
        
    },

])


export default Routers;