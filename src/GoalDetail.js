import React from "react";
import { useParams } from "react-router-dom";
import "./GoalDetail.css";

const GoalDetail = () => {
  const { goalId } = useParams();

  const goalDetails = {
    1: {
      title: "Improve Sleep Cycle",
      tips: [
        "Set a consistent bedtime and wake-up time.",
        "Create a relaxing bedtime routine.",
        "Limit screen time before bedtime.",
      ],
      roadmap: "Create a weekly sleep schedule and gradually adjust bedtime.",
    },
    // Add details for other goals as needed
  };

  const selectedGoal = goalDetails[goalId];

  if (!selectedGoal) {
    return <div>Goal not found</div>;
  }

  return (
    <div className='goal-detail-container'>
      <h1>{selectedGoal.title}</h1>

      <div className='tips-section'>
        <h2>Tips:</h2>
        <ul>
          {selectedGoal.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className='roadmap-section'>
        <h2>Roadmap:</h2>
        <p>{selectedGoal.roadmap}</p>
      </div>
    </div>
  );
};

export default GoalDetail;
