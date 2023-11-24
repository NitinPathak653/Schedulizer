// About.js

import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className='about-container'>
      <h1>About Schedulizer</h1>

      <div className='about-content'>
        <p>
          Schedulizer is a powerful time management app designed to help you
          take control of your schedule and maximize productivity.
        </p>

        <p>
          Our mission is to provide you with the tools and features you need to
          effectively manage your time, set meaningful goals, and achieve
          success in your personal and professional life.
        </p>

        <p>Key Features:</p>
        <ul>
          <li>Time Audit: Identify and overcome time management challenges.</li>
          <li>Goal Setting: Align your schedule with clear objectives.</li>
          <li>Time Blocking: Boost productivity with focused time blocks.</li>
          <li>Smart Reminders: Stay on track and meet your deadlines.</li>
        </ul>

        <p>
          At Schedulizer, we believe that effective time management is the key
          to unlocking your full potential. Take charge of your time, set
          ambitious goals, and make every moment count!
        </p>
      </div>
    </div>
  );
};

export default About;
