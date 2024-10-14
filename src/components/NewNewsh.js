import React from 'react';
import './NewNewsh.css';
import MoreButton from './MoreButton';
import {Link} from 'react-router-dom';

function NewNewsh() {
  return (
    <div>
      <div className="news-details">
        <div className="news-row">お知らせ</div>
        <div className="news-content">
          <div className='news-title_2'>
            スペシャルトークセッション開催決定！
          </div>
          {/*<div className="news-eyecatch">
            *ここに写真を入れる
          </div>*/}
          <div className="news-row">
            <span>最終日の11月4日(月・祝)に会場内にて、ゲストに造形第六の講師である建築家の千葉学教授と美術家の野老朝雄氏をお招きしてトークセッションを開催することが決定しました。</span>
          </div>
        </div>
      </div>
      <div className='morebutton'>
        <Link to="/News" >
          <MoreButton />
        </Link>
      </div>
    </div>
      )
}

export default NewNewsh;

