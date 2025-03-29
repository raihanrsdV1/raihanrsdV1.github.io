import React from 'react';
import { Link } from 'react-router-dom'; // If you decide to use react-router

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><Link to="/">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/research">Research</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
