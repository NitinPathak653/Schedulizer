import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to Schedulizer</h1>
      <p>Your ultimate time management tool</p>

      <div className='feature-list'>
        <div className='feature'>
          <h2>Time Audit</h2>
          <p>
            Conduct a comprehensive time audit to identify your current time
            management challenges and areas of improvement.
          </p>
        </div>

        <div className='feature'>
          <h2>Goal Setting</h2>
          <p>
            Establish clear goals and priorities to align your schedule with
            your objectives.
          </p>
        </div>

        <div className='feature'>
          <h2>Time Blocking</h2>
          <p>
            Divide your day into focused time blocks to allocate dedicated slots
            for each task and boost productivity.
          </p>
        </div>

        <div className='feature'>
          <h2>Smart Reminders</h2>
          <p>Get smart reminders to stay on track and meet your deadlines.</p>
        </div>
      </div>

      <div className='quote-section'>
        <p>
          "Time is what we want most, but what we use worst." - William Penn
        </p>
        <p>
          "Your time is limited, don't waste it living someone else's life." -
          Steve Jobs
        </p>
        <p>
          "The key is in not spending time, but in investing it." - Stephen R.
          Covey
        </p>
      </div>

      <div className='cta-button'>
        <Link to='/dashboard'>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
