import React from 'react';
import { Helmet } from 'react-helmet';

const Career = () => {
    
    const jobOpportunities = [
        {
            title: 'Event Coordinator',
            location: 'New York, NY',
            description: 'Coordinate and manage all aspects of events from planning to execution.',
        },
        {
            title: 'Event Marketing Manager',
            location: 'Los Angeles, CA',
            description: 'Create and execute marketing strategies for promoting event services.',
        },
        {
            title: 'Event Photographer',
            location: 'Chicago, IL',
            description: 'Capture moments and memories at various events and gatherings.',
        },
    ];

    return (

        <div className="container mx-auto bg-blue-100 p-10">
            <Helmet>
                <title>Career</title>
            </Helmet>
            <h2 className="text-5xl font-bold mb-4">Event-Related Career Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobOpportunities.map((job, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-600">{job.location}</p>
                        <p>{job.description}</p>
                        <button className='btn btn-primary'>Apply</button>
                    </div>
                ))}

            </div>
        </div>

    );
};


export default Career;