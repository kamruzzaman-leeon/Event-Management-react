import { Helmet } from "react-helmet";
import Banner from "../component/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData()
    const ban = data[0].banner
    console.log(ban)
    return (
        <div>
           <Helmet>
            <title>Home Page</title>
           </Helmet>
           
            <Banner banner = {ban}></Banner>
        </div>
    );
};

export default Home;
