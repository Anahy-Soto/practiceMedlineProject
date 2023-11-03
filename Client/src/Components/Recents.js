import React from 'react';
import { Link } from "react-router-dom";

function Recents() {
  const scorecard = [
    {
      userid: 1,
      scorecardid: 1,
      scorecardtitle: "scorecard1",
      uploadDate: '10/03/23',
      udername: "josue",
    },
    {
      userid: 2,
      scorecardid: 2,
      scorecardtitle: "scorecard2",
      uploadDate: '01/03/23',
      udername: "lisie",
    },
    {
      userid: 3,
      scorecardid: 3,
      scorecardtitle: "scorecard3",
      uploadDate: '9/03/22',
      udername: "Lucas",
    },
    {
      userid: 4,
      scorecardid: 4,
      scorecardtitle: "scorecard4",
      uploadDate: '05/03/22',
      udername: "josue",
    },
    {
      userid: 5,
      scorecardid: 5,
      scorecardtitle: "scorecard5",
      uploadDate: '01/03/22',
      udername: "josue",
    },
  ]
  return (
    <>
    <div className="top">
      <h1>History</h1>
    </div>
      <div className="history-top">
        <div className="history-content">
          {scorecard.map((data)=>(
            <Link className='react-link' to={`/SingleScorecard/${data.scorecardid}`}>
              <div className="col-1-contents " key={data.userid}>
                <div className="col-1 item-1">
                  <p>{data.scorecardtitle}</p>
                </div>
                <div className="col-1 item-2">
                  {data.uploadDate}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recents;
