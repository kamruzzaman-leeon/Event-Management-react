

const ContactUs = () => (
    <div className="bg-blue-100 p-4 md:p-8 lg:flex lg:items-center">
      <img
        src="https://i.ibb.co/ByQJC9x/Event-contact-us.jpg"
        className="max-w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl mb-4 md:mb-0"
        alt="Contact Us" data-aos="fade-up-right"
      />
      <div className="lg:w-2/3 lg:pl-8" data-aos="flip-left">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
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
  