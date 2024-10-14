import React from 'react';
import './MoreButton.css';  // CSSを別ファイルに分ける

const MoreButton = () => {
  return (
    <button className="more-button">
      <span className="text">＞ もっと見る</span>
    </button>
  );
};

export default MoreButton;
