import { Helmet } from "react-helmet";
import Banner from "../component/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../component/ServiceCard";
import ContactUs from "../component/ContactUs";
import EventFacilities from "../component/EventFacilities";

const Home = () => {
    const data = useLoaderData()
    const ban = data[0].banner
    const ser =data[0].services
    

    return (
        <div className="container mx-auto">
           <Helmet>
            <title>Home Page</title>
           </Helmet>
           
            <div className="my-3 md:my-10">
                {
                    ban && <Banner banner = {ban}></Banner>
                    
                }
            
            </div>
            <div className="my-3 md:my-10 p-5">
                <h1 className="text-5xl font-bold text-center mb-20 divider" data-aos="slide-left">Our Service</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    ser && ser.length && ser.map((item)=> <ServiceCard key={item.id} serviceCard = {item}></ServiceCard>)
                }
                </div>
                
            </div>
            <div className="my-3 md:my-10 p-5">
                <div className="divider text-5xl font-bold text-center mb-20" data-aos="slide-right">Contact Us</div>
                {   
                    <ContactUs></ContactUs>
                }
            
            </div>
            <div className="my-3 md:my-10 p-5">
                <div className="divider text-5xl font-bold text-center mb-20" data-aos="slide-left">Event Facilities</div>
                {   
                    <EventFacilities></EventFacilities>
                }
            
            </div>

        </div>
    );
};

export default Home;
