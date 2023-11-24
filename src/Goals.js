import React from "react";
import { Link } from "react-router-dom";
import "./Goals.css";

const Goals = () => {
  const goalData = [
    {
      id: 1,
      title: "Improve Sleep Cycle",
      description: "Get better sleep with a consistent sleep cycle.",
    },
  ];

  return (
    <div className='goals-container'>
      <h1>Scheduling Goals</h1>

      <ul>
        {goalData.map((goal) => (
          <li key={goal.id}>
            <Link to={`/goals/${goal.id}`}>
              <h2>{goal.title}</h2>
            </Link>
            <p>{goal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
