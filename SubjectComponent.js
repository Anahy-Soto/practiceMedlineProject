import React, { useState } from 'react';
import CriteriaComponent from './CriteriaComponent';

function SubjectComponent({ subject }) {
  const [criterias, setCriterias] = useState([]);

  const addCriteria = () => {
    setCriterias([...criterias, { title: "", scoringType: "1-5", weightage: "1" }]);
  };

  return (
    <div>
      <label>Subject Title:</label>
      <input value={subject.title} onChange={(e) => subject.title = e.target.value} />
      <label>Description:</label>
      <input value={subject.description} onChange={(e) => subject.description = e.target.value} />
      <label>Weightage:</label>
      <select value={subject.weightage} onChange={(e) => subject.weightage = e.target.value}>
        {[...Array(100).keys()].map(num => (
          <option key={num} value={num + 1}>{num + 1}%</option>
        ))}
      </select>
      <button onClick={addCriteria}>Save Subject and Add Criteria</button>
      {criterias.map((criteria, idx) => (
        <CriteriaComponent key={idx} criteria={criteria} />
      ))}
    </div>
  );
}

export default SubjectComponent;