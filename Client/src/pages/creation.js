import React, { useState } from "react";
import Toggle from "../Components/scripts";
import SubjectComponent from "./SubjectComponent";
import {useNavigate} from 'react-router-dom';
function Creation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [scoringOptions, setScoringOptions] = useState (['1-5', '1-10', ]);
  const navigate = useNavigate();
  const addSubject = () => {
    setSubjects([
      ...subjects,
      { title: "", description: "",  criteria: [] },
    ]);
  };
  const updateSubject = (index, newSubject) => {
    const newSubjects = [...subjects];
    newSubjects[index] = newSubject;
    setSubjects(newSubjects);
  };
  const updateCriteria = (subjectIndex, criteriaIndex, newCriteria) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex].criteria[criteriaIndex] = newCriteria;
    setSubjects(newSubjects);
  };
  const saveScorecard = () => {
    const scorecardData = {
      title,
      description,
      subjects,
      scoringOptions,
    };
    localStorage.setItem('scorecardData', JSON.stringify(scorecardData));
    navigate("/pages/scorecard");
  };
  return (
    <div className="creation-container">
      <Toggle />
      <h1>Scorecard Creation</h1>
      <div className="content-container">
        <label>Title:</label>
        <input className="score-t" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <label className="score-d">Scorecard Description:</label>
        <input
          className="input-1 input-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        {subjects.map((subject, idx) => (
          <SubjectComponent
            key={idx}
            index={idx}
            subject={subject}
            updateSubject={updateSubject}
            updateCriteria={updateCriteria}
            scoringOptions={scoringOptions}
            setScoringOptions={setScoringOptions}
          />
        ))}
      </div>
      <button onClick={addSubject} className="btn-create-subject btns-creation">
        Create Subject
      </button>
      <button onClick={saveScorecard} className="btn-save-scorecard btns-creation" >
        Save Scorecard
      </button>
    </div>
  );
}
export default Creation;
