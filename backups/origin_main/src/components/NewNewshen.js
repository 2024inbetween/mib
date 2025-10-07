import React from 'react';
import './NewNewsh.css';
import MoreButtonen from './MoreButtonen';
import {Link} from 'react-router-dom';

function NewNewshen() {
  return (
    <div>
      <div className="news-details">
        <div className="news-row">Announcement</div>
        <div className="news-content">
          <div className='news-title_2' style={{marginBottom:10}}>
          <Link to="/en/News" >
          EVENTS: Upcoming Symposium on Nov. 4th
          </Link>
          </div>
          {/*<div className="news-eyecatch">
            *ここに写真を入れる
          </div>*/}
          <div className="news-row">
            Don&apos;t miss our final day! Panel Discussion will take place on Nov. 4th. The presenters are architect/professor Manabu Chiba and artist Tokolo Asao who supervised the course &quot;Architectural Media Studies 6.&quot;
          </div>
        </div>
      </div>
      <div className='morebutton'>
        <Link to="/en/News" >
          <MoreButtonen />
        </Link>
      </div>
    </div>
      )
}

export default NewNewshen;

