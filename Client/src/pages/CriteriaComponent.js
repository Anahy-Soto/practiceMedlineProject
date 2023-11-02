import React from 'react';

function CriteriaComponent({ criteria, index, updateCriteria }) {
  const scoringOptions = ["1-5", "1-10", "Create New Scoring Type"];

  return (
    <div className='criteria-content'>
      <label>Criteria Title:</label>
      <input
        value={criteria.title} 
        onChange={(e) => {
          const newCriteria = {...criteria, title: e.target.value };
           updateCriteria(newCriteria);

        }} 
      />
      <label>Scoring Type:</label>
      <select
        value={criteria.scoringType} 
        onChange={(e) => {
          const newCriteria = { ...criteria, scoringType: e.target.value};
          updateCriteria(newCriteria);

        }}
      >
        {scoringOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <label>Weightage:</label>
      <select 
        value={criteria.weightage} 
        onChange={(e) => {
          const newCriteria = {...criteria, weightage: e.target.value};
          updateCriteria(newCriteria);
        }}
        >
        {[...Array(100).keys()].map(num => (
          <option key={num} value={num + 1}>{num + 1}%</option>
        ))}
      </select>
      <button>Save Criteria</button>
    </div>
  );
}

export default CriteriaComponent;
