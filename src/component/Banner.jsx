import PropTypes from 'prop-types';

const Banner = ({banner}) => {
    const {title,description, img} =banner
    console.log(title)
    return (
      <div className="hero  h-[50vh]" style={{ backgroundImage: `url(${img})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className='text-4xl font-bold mb-5'>{title}</h2>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
    
    );
};

Banner.propTypes={
  banner: PropTypes.object,
}

export default Banner;