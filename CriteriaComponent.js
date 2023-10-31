import React from 'react';

function CriteriaComponent({ criteria }) {
  const scoringOptions = ["1-5", "1-10", "Create New Scoring Type"];

  return (
    <div className='criteria-content'>
      <label>Criteria Title:</label>
      <input value={criteria.title} onChange={(e) => criteria.title = e.target.value} />
      <label>Scoring Type:</label>
      <select value={criteria.scoringType} onChange={(e) => criteria.scoringType = e.target.value}>
        {scoringOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <label>Weightage:</label>
      <select value={criteria.weightage} onChange={(e) => criteria.weightage = e.target.value}>
        {[...Array(100).keys()].map(num => (
          <option key={num} value={num + 1}>{num + 1}%</option>
        ))}
      </select>
      <button>Save Criteria</button>
    </div>
  );
}

export default CriteriaComponent;
