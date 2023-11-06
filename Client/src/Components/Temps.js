import React from 'react'
import { Link } from "react-router-dom";


function Temps() {
  return (
    <div className='temps'>
        <div id="dash" class="create-section">
      <ul class="lists-create">
        <li class="templates create-item">
          <Link className="labels blank-page-label link1" to={'/Create'}>
            <div class="blank-page-item"></div>
            <span class="labels blank-page-label">Blank</span>
          </Link>
        </li>
        <li class="templates create-item">
          <div class="blank-page-item"></div>
          <span class="labels blank-page-label">template1</span>
        </li>
        <li class="templates create-item">
          <div class="blank-page-item"></div>
          <span class="labels blank-page-label">template2</span>
        </li>
        <li class="templates create-item">
          <div class="blank-page-item"></div>
          <span class="labels blank-page-label">template3</span>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Temps
