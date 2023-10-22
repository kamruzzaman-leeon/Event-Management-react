

const ContactUs = () => (
    <div className="bg-white p-4 md:p-8 grid grid-cols-1 md:grid-cols-2">
      <img
        src="https://i.ibb.co/ByQJC9x/Event-contact-us.jpg"
        className="max-w-full md:w-3/4 rounded-lg shadow-2xl mb-4 md:mb-0"
        alt="Contact Us" data-aos="fade-up-right"
      />
      <div className="lg:w-2/3 rounded-slg" data-aos="flip-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Get In Touch</h1>
        <p className="py-6">
          <span className="font-bold">Office address:</span> 123 Event Street, Eventville, Eventland, EVT1234, Eventopia
        </p>
        <p>
          <span className="font-bold">Phone num:</span> +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
  
  export default ContactUs;
  