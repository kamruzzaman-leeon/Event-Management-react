import React from 'react';

const EventManagementCourse = () => {
  return (
    
      <div className="container mx-auto bg-blue-100 py-10">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Event Management Course</h2>
          <p className="text-gray-600 mb-4">
            Interested in learning event management? Our comprehensive course covers the fundamentals and advanced concepts of event planning and management.
          </p>
          <p className="text-xl font-semibold mb-4">Course Highlights:</p>
          <ul className="list-disc pl-6">
            <li>Event Planning and Design</li>
            <li>Marketing and Promotion</li>
            <li>Budgeting and Financial Management</li>
            <li>Venue Selection and Logistics</li>
            <li>Event Coordination and Execution</li>
            <li>Certification upon completion</li>
          </ul>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
 
  );
};

export default EventManagementCourse;
