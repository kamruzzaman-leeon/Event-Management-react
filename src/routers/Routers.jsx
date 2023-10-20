
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
// import ErrorPage from '../component/ErrorPage';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ServiceDetails from '../pages/ServiceDetails';

const Routers = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/corporate.json')
            },
            {
                path:"/serviceDetails/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:()=>fetch('/corporate.json'),
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