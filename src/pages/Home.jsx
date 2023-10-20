import { Helmet } from "react-helmet";
import Banner from "../component/Banner";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Home Page</title>
           </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;
