import { Helmet } from "react-helmet";


const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <h1 className="text-5xl font-medium my-5">Event Master</h1>
            <p className="text-justify">At Event Master, we are dedicated to delivering unparalleled corporate event management services. We specialize in a wide range of corporate events, from conferences and seminars to award ceremonies, providing our clients with tailored solutions to meet their unique needs. Our commitment to excellence, attention to detail, and passion for creating memorable experiences set us apart as the leading event management company in the industry.</p>
        </div>
    );
};

export default AboutUs;