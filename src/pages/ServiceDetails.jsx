import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const service = data[0].services
    const [details, setDetails] = useState({});

    // console.log(service)

    useEffect(() => {
        if (data.length && id) {
            const item = service.find(element => element.id == id)
            setDetails(item)
        }
    }, [id])


    return (
        <div className="container mx-auto">
            <div className="card  object-cover bg-base-100 p-2 md:p-0 shadow-xl" data-aos="flip-top"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <figure><img className='w-full object-cover h-2/5' src={details.img} alt={details.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-5xl font-semibold">{details.title}</h2>
                    <p className="text-justify "><span className='font-bold'>Description:</span> {details.description}</p>
                    <p> <span className='font-bold'>Price:</span> {details.price}</p>
                    <p><span className='font-bold'>Duration:</span> {details.duration}</p>
                    <p><span className='font-bold'>clients Served:</span> {details.clients_served}</p>
                    <p><span className='font-bold'>Location: </span>{details.location}</p>
                    <p><span className='font-bold'>Capacity: </span>{details.capacity}</p>
                   
                   

                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;