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
  
    return (
      <div className='creation-container'>
        <Toggle/>
        <h1>Scorecard Creation</h1>
        <div className='content-container'>
          <label>Title:</label>
          <input className='input-1' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
          <label>Scorecard Description:</label>
          <input className='input-1 input-2' value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className='sub-title'>
        {subjects.map((subject, idx) => (
          <SubjectComponent key={idx} subject={subject} />
        ))}
        </div>
        <button onClick={addSubject} className='btn-create-subject'>Create Subject</button>
      </div>
    );
  }

export default Creation;
