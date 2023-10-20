import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <p>this is home</p>
        </div>
    );
};

export default Home;