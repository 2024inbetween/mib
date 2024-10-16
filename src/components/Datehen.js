import React from 'react';
import './Dateh.css';  // CSSをインポート
import MoreButtonen from'./MoreButtonen.js'
import { Link } from 'react-router-dom';


function Dateen() {
  return (
<div className="event-schedule">
  <div className="event-details">
    <div className="event-row">DATE:</div>
    <div className="event-date-time">
      <div className='event-kikan'>
      From Friday, November 1st to Monday, November 4th
      </div>
      <div className="event-row">
        <span>※The opening hours are as follows</span>
      </div>
      <div className="event-row">
        <span>Nov. 1st: 13:00 - 20:00</span>
      </div>
      <div className="event-row">
        <span>Nov. 2nd and 3rd: 10:00 - 20:00</span>
      </div>
      <div className="event-row">
        <span>Nov. 4th: 10:00 - 17:00</span>
      </div>
      <div className="event-row">
        <span>※Admission Free</span>
      </div>
    </div>
  </div>
  <div className="event-location">
    <p>GALLERY:</p>
    <p className="big_wakan">Sandanzaka no Wakan</p>
    <p>4-17-7 Ikenohata, Taito-ku, Tokyo</p>
    <p>※Searching by the name may show the wrong location. Please search by address.</p>
  </div>
  <div className='morebutton'>
    <Link to="/en/Access" >
      <MoreButtonen />
    </Link>
  </div>

</div>

  )
}

export default Dateen;