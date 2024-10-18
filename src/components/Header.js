import React, { useState } from 'react';
import './Header.css';  // CSSをインポート
import { slide as Menu } from 'react-burger-menu';
import {Link, useLocation} from 'react-router-dom';

function JPtoEn(){
  const location=useLocation();
  const currentPath=location.pathname;
  const englishPath=`/en${currentPath}`;

  return(
    <Link to={englishPath} className="no-scroll"> {/*classNameは付け足さない*/}
    <span style={{fontWeight:600,fontSize:20}}>JP</span>/EN
    </Link>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);  // メニューの開閉状態を管理

  // メニューを閉じる処理
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-container">

      <div className="header-text-container">
        <div className="header-logo">
          <img
            src={`${process.env.PUBLIC_URL}/headerlogo.jpg`}
            alt="Header Logo"
          />
        </div>
      </div>

      <div className="LanguageSwitcher">
        <JPtoEn />
      </div>

      {/* メニューバーアイコン */}
      <Menu
      isOpen={isOpen}  // メニューの開閉状態をバインド
      onStateChange={({ isOpen }) => setIsOpen(isOpen)}  // 状態が変わるたびに開閉状態を更新
      >
        <div className="menu-item"><Link to="/" onClick={closeMenu}>TOP</Link></div>
        <div className="menu-item"><Link to="/Access" onClick={closeMenu}>VISIT</Link></div>
        <div className="menu-item"><Link to="/News" onClick={closeMenu}>NEWS</Link></div>
        {/*<div className="menu-item"><Link to="/About" onClick={closeMenu}>ABOUT US</Link></div>
        <div className="menu-item"><Link to="/AboutFont" onClick={closeMenu}>FONT</Link></div>
        <div className="menu-item"><Link to="/Works" onClick={closeMenu}>WORKS</Link></div>
        <div className="menu-item"><Link to="/News" onClick={closeMenu}>NEWS</Link></div> */}
      </Menu>
    </div>
  );
}

export default Header;
