import React from 'react';

const About = () => (
  <div>
    <h2>About Us</h2>
        <p>Flexi Solutions LLC is building the LightningLearn learning platform—a platform that parents can trust to not only enhance their children's intellectual success at school but also assist them in acquiring wholesome values that will guide their lives.</p>

    <div className="flex justify-center items-center">
    <img
        className="h-64 aspect-auto object-cover rounded shadow-lg border-2 border-slate-900"
        src="/flag.jpg" // Update the path based on the actual location in the public folder
        alt="flag"
      />
    </div>
    <p>
      Photo by{' '}
      <a
        href="https://www.pexels.com/photo/part-of-american-flag-9726893/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tim Mossholder
      </a>{' '}
      from Pexels.
    </p>
  </div>
);

export default About;
