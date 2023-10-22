import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({serviceCard}) => {
    // console.log(serviceCard)
    const {title, img, price,description,id} = serviceCard || {}
    return (
      
        <div className="card w-auto bg-white shadow-xl" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
  <figure><img className='w-full object-cover h-56' src={img} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: <span className='font-bold'>{price}</span></p>
    <p className=' text-justify'>{description.split(". ").slice(0, 2).join(". ") + "."}</p>
    <button className='bg-blue-600 btn text-white'><Link to={`serviceDetails/${id}`}>See More Details</Link></button>
   
  </div>
</div>
    );
};

ServiceCard.propTypes={
    serviceCard: PropTypes.object
}

export default ServiceCard;