import React from 'react';

const EventFacilities = () => {
  const facilities = [
    {
      title: 'Venue Selection',
      description: 'Choose from a variety of event venues to suit your needs.',
    },
    {
      title: 'Catering Services',
      description: 'Delight your guests with a wide range of catering options.',
    },
    {
      title: 'Event Planning',
      description: 'Expert event planning to ensure a seamless experience.',
    },
    {
      title: 'Audiovisual Services',
      description: 'High-quality audiovisual equipment for presentations and entertainment.',
    },
    {
      title: 'Decoration & Theming',
      description: 'Create a unique atmosphere with our decoration and theming services.',
    },
    {
      title: 'Guest Registration',
      description: 'Efficient guest registration and check-in services for your event.',
    },
  ];

  return (
    <div className="bg-blue-100 py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          
            <div className=" p-4 rounded-lg" data-aos="flip-right">
              <h2 className="text-3xl font-semibold mb-4">Event Management Facilities</h2>
              <ul>
                {facilities.map((facility, index) => (
                  <li key={index} className="mb-3">
                    <span className=" font-bold">{facility.title}:</span> {facility.description}
                  </li>
                ))}
              </ul>
            </div>
         
          <div>
            <div className="relative" data-aos="fade-up-left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/HILkVHiMiqY?si=969nIIeGO3zD3-Gn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFacilities;
