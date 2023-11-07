import React, {useState} from 'react';
import { Link } from "react-router-dom";

function CriteriaComponent({ criteria, index, updateCriteria, scoringOptions,setScoringOptions }) {
  const [isCreatingNewScoringType, setIsCreatingNewScoringType] = useState(false);
  return (
    <div className='criteria-content'>
      <label>Criteria Title:</label>
      <input className='criteria-input'
        value={criteria.title} 
        onChange={(e) => {
          const newCriteria = {...criteria, title: e.target.value };
           updateCriteria(newCriteria);
        }} 
      />
      <label>Scoring Range:</label>
      <select className='range'
        value={criteria.scoringType} 
        onChange={(e) => {
          if (e.target.value ==="Create New Scoring Range") {
            setIsCreatingNewScoringType(true);
          } else {
            setIsCreatingNewScoringType(false);
            const newCriteria = { ...criteria, scoringType: e.target.value};
            updateCriteria(newCriteria);
          }
        }}
      >
        <option key="create-new" value="Create New Scoring Range">Create New Scoring Range</option>
        {scoringOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {isCreatingNewScoringType && (
 <input
 type="text" 
 placeholder="Enter new scoring range, e.g., 1-10"
 onKeyPress={(e) => {
   if (e.key === 'Enter') {
     const range = e.target.value.split('-').map(Number);
     const isValidRange = range.length === 2 && range[0] < range[1] && range[1] <= 100 && range[0] >= 1;
     if (isValidRange) {
       const newType = `${range[0]}-${range[1]}`;
       setScoringOptions((prevOptions) => {
         const updatedOptions = prevOptions.includes(newType)
           ? prevOptions
           : [...prevOptions, newType].sort((a, b) => a.split('-')[0] - b.split('-')[0]); // Sort after adding new range
         return updatedOptions;
       });
       const newCriteria = { ...criteria, scoringType: newType };
       updateCriteria(newCriteria);
       e.target.value = ''; // Clear the input after saving
       setIsCreatingNewScoringType(false); // Hide the input field
     } else {
       alert('Please enter a valid range (e.g., 1-10) that does not exceed 100.');
     }
   }
 }}
    onBlur={(e) => {
      const range = e.target.value.split('-').map(Number);
  const isValidRange =
    range.length === 2 &&
    range[0] < range[1] &&
    range[1] <= 100 &&
    range[0] >= 1;
  if (isValidRange) {
    const newType = `${range[0]}-${range[1]}`;
    setScoringOptions((prevOptions) => {
      const updatedOptions = prevOptions.includes(newType)
        ? prevOptions
        : [...prevOptions, newType];
      return updatedOptions;
    });
    const newCriteria = { ...criteria, scoringType: newType };
    updateCriteria(newCriteria);
  } else {
    alert('Please enter a valid range (e.g., 1-10) that does not exceed 100.');
  }
  setIsCreatingNewScoringType(false);
}}
  />
)}  
    <Link to={'/pages/scorecard'}>
      <button className='sv-criteria'>Save Criteria</button>
    </Link>
    </div>
  );
}      
export default CriteriaComponent;
