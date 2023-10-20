import PropTypes from 'prop-types';

const ServiceCard = ({serviceCard}) => {
    // console.log(serviceCard)
    const {title, img, price,description} = serviceCard
    return (
      
        <div data-aos="zoom-in" className="card w-auto bg-base-100 shadow-xl">
  <figure><img className='w-full object-cover h-56' src={img} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: <span className='font-bold'>{price}</span></p>
    <p>{description.slice(0,150)}...</p>
   
  </div>
</div>
    );
};

ServiceCard.propTypes={
    serviceCard: PropTypes.object
}

export default ServiceCard;