import React, { useState, useEffect } from "react";
import Toggle from "../Components/scripts";
import "../styles/Scorecard.css";
import { Link } from "react-router-dom";

function calculateOverallScore(subjects) {
    let overallScore = 0;
    subjects.forEach(subject => {
      let subjectScore = 0;
      subject.criteria.forEach(criterion => {
        const criterionScore = Number(criterion.userScore || criterion.score);
        const criterionWeightage = Number(criterion.userWeightage || criterion.weightage) / 100;
        subjectScore += criterionScore * criterionWeightage;
      });
      const subjectWeightage = Number(subject.userWeightage || subject.weightage) / 100;
      overallScore += subjectScore * subjectWeightage;
    });
    return overallScore;
  }
function Scorecard() {
  const [scorecardData, setScorecardData] = useState(null);
  useEffect(() => {
    const loadedData = localStorage.getItem('scorecardData');
    if (loadedData) {
      const data = JSON.parse(loadedData);
      data.subjects.forEach(subject => {
        subject.userWeightage = subject.weightage; // Initialize user weightage
        subject.criteria.forEach(criterion => {
          criterion.userScore = criterion.score; // Initialize user score
        });
      });
      setScorecardData(data);
    }
  }, []);
  const handleWeightageChange = (subjectIndex, value) => {
    const newData = { ...scorecardData };
    newData.subjects[subjectIndex].userWeightage = value;
    setScorecardData(newData);
  };
  const handleScoreChange = (subjectIndex, criterionIndex, value) => {
    const newData = { ...scorecardData };
    newData.subjects[subjectIndex].criteria[criterionIndex].userScore = value;
    setScorecardData(newData);
  };
  if (!scorecardData || !scorecardData.subjects) {
    return <div>Loading or no data available...</div>;
  }
  return (
    <div className="scorecard-container scorecard-border">
      <div className="header">
        <h1>{scorecardData.title}</h1>
        <p>{scorecardData.description}</p>
      </div>
  
      {scorecardData.subjects.map((subject, subjectIndex) => (
        <div key={subjectIndex} className="subject">
          <h2>{subject.title}</h2>
          <p>{subject.description}</p>
          <label>Weight:</label>
          <select 
            value={subject.userWeightage}
            onChange={(e) => handleWeightageChange(subjectIndex, e.target.value)}>
            {[...Array(100).keys()].map(i => (
              <option key={i} value={i + 1}>{i + 1}%</option>
            ))}
          </select>
          {subject.criteria.map((criterion, criterionIndex) => (
            <div key={criterionIndex}>
              <p>Criteria: {criterion.title}</p>
              <label>Score:</label>
              <select 
                value={criterion.userScore}
                onChange={(e) => handleScoreChange(subjectIndex, criterionIndex, e.target.value)}>
                {generateScoreOptions(criterion.scoringType).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ))}
  
      <div className="total-score">
        <p><strong>Overall Score: </strong>{calculateOverallScore(scorecardData.subjects)}</p>
      </div>
    </div>
  );
}
// Helper function to generate score options based on scoring type
function generateScoreOptions(scoringType) {
  const range = scoringType.split('-').map(Number);
  const options = [];
  for (let i = range[0]; i <= range[1]; i++) {
    options.push(i);
  }
  return options;
}
export default Scorecard;
