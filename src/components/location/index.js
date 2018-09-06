import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5379.6883130699025!2d-122.3465703223639!3d47.60971991673944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2c151d6cb%3A0x60441d5f633e9f1c!2sPike+Place+Market%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1536191980085"
        className="location_iframe"
        width="100%"
        height="520px"
        frameBorder="0"
        title="location-map"
        allowFullScreen>
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;