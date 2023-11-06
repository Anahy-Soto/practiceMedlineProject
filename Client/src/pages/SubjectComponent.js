import React from 'react';
import CriteriaComponent from './CriteriaComponent';
function SubjectComponent({ subject, updateSubject, updateCriteria,index, scoringOptions, setScoringOptions }) {
  const addCriteria = () => {
    const newSubject = {...subject};
    newSubject.criteria.push({ title: "", scoringType: "1-5", weightage: "1" });
    updateSubject(index, newSubject);
};
  return (
    <div className='sub-title'>
      <label>Subject Title:</label>
      <input value={subject.title} onChange={(e) => {
        const newSubject = { ...subject, title:  e.target.value };
        updateSubject(index, newSubject);
      }} />
      <label>Description:</label>
      <input value={subject.description} onChange={(e) => {
                const newSubject = { ...subject, description: e.target.value };
                updateSubject(index, newSubject);
              }} />
              
      <button onClick={addCriteria}>Save Subject and Add Criteria</button>
      {subject.criteria.map((criteria, idx) => (
        <CriteriaComponent 
          key={idx}
          index={idx} 
          criteria={criteria}
          updateCriteria={(newCriteria) => updateCriteria(index, idx, newCriteria)}
          scoringOptions={scoringOptions}
          setScoringOptions={setScoringOptions}
           />
      ))}
    </div>
  );
}
export default SubjectComponent;
