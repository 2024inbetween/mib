import React from 'react';
import './Worksh.css';
import MoreButton from './MoreButton';
//import {Link} from 'react-router-dom';

function Worksh() {
  return (
    <div>
      <div className="works-details">
        <div className="works-row">作品</div>
        <div className="works-row">主題”MAKING INBETWEEN”を起点として、ある二つのものの中間について考察した作品を展示します。</div>
    </div>
      <div className='morebutton'>
        <MoreButton />
      </div>
    </div>
      )
}

export default Worksh;

