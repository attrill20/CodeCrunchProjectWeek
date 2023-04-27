import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../App/App.css";
const mockUserProgress = {
  quizzes: [
    { id: 1, name: "Quiz 1", score: 80, topic: "React" },
    { id: 2, name: "Quiz 2", score: 90, topic: "Components" },
    { id: 3, name: "Quiz 3", score: 75, topic: "Props" },
  ],
  completedTopics: ["React", "Components", "Props", "Hooks"],
};
function ProgressPage() {
  const progress = 75;
  return (
    <div className="ProgressPage">
      <h1>My Progress</h1>
      <ProgressBar now={progress} label={`${progress}%`} />
      <h4>Quiz Scores:</h4>
      <ul>
        {mockUserProgress.quizzes.map((quiz) => (
          <li key={quiz.id}>
            {`Quiz ${quiz.id} - ${quiz.score}% - Topic: ${quiz.topic}`}
            <br />
            Topic: {quiz.topic}
            <br />
            {mockUserProgress.completedTopics.includes(quiz.topic) ? (
              <span>Completed</span>
            ) : (
              <span>Incomplete</span>
            )}
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
}
export default ProgressPage;
