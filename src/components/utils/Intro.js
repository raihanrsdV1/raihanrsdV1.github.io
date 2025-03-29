import React, { useEffect, useState } from 'react';

const roles = [
  "ML Enthusiast",
  "Frontend Developer",
  "Backend Developer",
  "System Designer"
];

const Intro = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      let fullText = roles[roleIndex];
      if (!deleting) {
        setCurrentRole(fullText.substring(0, charIndex + 1));
        if (charIndex + 1 === fullText.length) {
          // Wait before deleting
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setCurrentRole(fullText.substring(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, deleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div className="flex flex-col md:flex-row items-center my-10 p-6">
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="your-photo-url.jpg" 
          alt="Mohammad Raihan Rashid" 
          className="w-48 h-48 rounded-full object-cover" 
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Hi, this is Mohammad Raihan Rashid</h1>
        <h2 className="text-2xl text-gray-700">
          <span>{currentRole}</span>
          <span className="border-r-2 border-gray-700 ml-2 animate-pulse"></span>
        </h2>
      </div>
    </div>
  );
};

export default Intro;
