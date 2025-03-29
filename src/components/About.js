import React from 'react';
import Navbar from './utils/Navbar';
import Intro from './utils/Intro';

const About = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      {/* Additional content like team info, ML projects, hackathon details, etc. */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Team Info & More</h3>
        <p>Details about your ML team, hackathon projects, CTF experiences, and more go here.</p>
      </div>
    </div>
  );
};

export default About;
