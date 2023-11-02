import React from 'react';
import CriteriaComponent from './CriteriaComponent';

function SubjectComponent({ subject, updateSubject, updateCriteria,index }) {

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
      <label>Weightage:</label>
      <select value={subject.weightage} onChange={(e) => {
    const newSubject = { ...subject, weightage: e.target.value };
    updateSubject(index, newSubject);
}}>
        {[...Array(100).keys()].map(num => (
          <option key={num} value={num + 1}>{num + 1}%</option>
        ))}
      </select>
      <button onClick={addCriteria}>Save Subject and Add Criteria</button>
      {subject.criteria.map((criteria, idx) => (
        <CriteriaComponent 
          key={idx}
          index={idx} 
          criteria={criteria}
          updateCriteria={(newCriteria) => updateCriteria(index, idx, newCriteria)}
           />
      ))}
    </div>
  );
}

export default SubjectComponent;