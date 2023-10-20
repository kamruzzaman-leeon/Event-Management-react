import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({serviceCard}) => {
    // console.log(serviceCard)
    const {title, img, price,description,ID} = serviceCard || {}
    return (
      
        <div className="card w-auto bg-base-100 shadow-xl" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
  <figure><img className='w-full object-cover h-56' src={img} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: <span className='font-bold'>{price}</span></p>
    <p>{description.slice(0,150)}<Link to={`ServiceDetails/${ID}`}></Link>...See More</p>
   
  </div>
</div>
    );
};

ServiceCard.propTypes={
    serviceCard: PropTypes.object
}

export default ServiceCard;