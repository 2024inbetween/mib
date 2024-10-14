import React from 'react';
import './Dateh.css';  // CSSをインポート
import MoreButton from'./MoreButton.js'
import { Link } from 'react-router-dom';


function Date() {
  return (
<div className="event-schedule">
  <div className="event-details">
    <div className="event-row">会期</div>
    <div className="event-date-time">
      <div className='event-kikan'>
        11月1日(金)〜11月4日(月・祝)
      </div>
      <div className="event-row">
        <span>※開館時間は以下のようになります</span>
      </div>
      <div className="event-row">
        <span>11月1日：13:00-20:00</span>
      </div>
      <div className="event-row">
        <span>11月2日と3日：10:00-20:00</span>
      </div>
      <div className="event-row">
        <span>11月4日：10:00-17:00</span>
      </div>
      <div className="event-row">
        <span>※入場無料</span>
      </div>
    </div>
  </div>
  <div className="event-location">
    <p>会場</p>
    <p className="big">三段坂の和館</p>
    <p>東京都台東区池之端4-17-7</p>
    <p>※名前で検索すると間違った場所が表示されることがあります。住所を使って検索してください。</p>
  </div>
  <div className='morebutton'>
    <Link to="/Access" >
      <MoreButton />
    </Link>
  </div>

</div>

  )
}

export default Date;