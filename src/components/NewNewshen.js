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
          News Coming...
          </Link>
          </div>
          {/*<div className="news-eyecatch">
            *ここに写真を入れる
          </div>*/}
          <div className="news-row">
            News Coming...
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

