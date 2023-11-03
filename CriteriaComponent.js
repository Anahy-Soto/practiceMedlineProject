import React, {useState} from 'react';

function CriteriaComponent({ criteria, index, updateCriteria, scoringOptions,setScoringOptions }) {
  const [isCreatingNewScoringType, setIsCreatingNewScoringType] = useState(false);
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
          if (e.target.value ==="Create New Scoring Type") {
            setIsCreatingNewScoringType(true);
          } else {
            setIsCreatingNewScoringType(false);
            const newCriteria = { ...criteria, scoringType: e.target.value};
            updateCriteria(newCriteria);
          }
        }}
      >
        <option key="create-new" value="Create New Scoring Type">Create New Scoring Type</option>
        {scoringOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {isCreatingNewScoringType && (
 <input
 type="text" // Change this to text to allow for a range input like "1-10"
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
