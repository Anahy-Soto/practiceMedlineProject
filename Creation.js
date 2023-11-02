import React, { useState } from 'react';
import Toggle from './Components/scripts';
import SubjectComponent from './SubjectComponent';

function Creation() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [subjects, setSubjects] = useState([]);
  
    const addSubject = () => {
      setSubjects([...subjects, { title: "", description: "", weightage: "1", criteria: [] }]);
    };
    const updateSubject = (index, newSubject) => {
        const newSubjects = [...subjects];
        newSubjects[index] = newSubject;
        setSubjects(newSubjects);
    };
    const updateCriteria = (subjectIndex, criteriaIndex, newCriteria) => {
            const newSubjects = [...subjects];
            newSubjects[subjectIndex].criteria[criteriaIndex]=newCriteria;
            setSubjects(newSubjects);
        }

    return (
      <div>
        <div style={{ paddingTop: "75px" }}></div>
        <Toggle/>
        <h1>Scorecard Creation</h1>
        <div style={{ marginBottom: "20px" }}>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>Scorecard Description:</label>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        {subjects.map((subject, idx) => (
          <SubjectComponent key={idx} index={idx} subject={subject} updateSubject={updateSubject} updateCriteria={updateCriteria}/>
        ))}
        <button onClick={addSubject}>Create Subject</button>
      </div>
    );
  }

export default Creation;