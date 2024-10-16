import React, { useState } from 'react';
import './Header.css';  // CSSをインポート
import { slide as Menu } from 'react-burger-menu';
import { Link,useLocation} from 'react-router-dom';

function ENtoJP(){
  const location=useLocation();
  const currentPath=location.pathname;
  const japanesePath=currentPath.replace('/en', '');

  return(
    <Link to={japanesePath}>
    JP/<span style={{fontWeight:600,fontSize:25}}>EN</span>
    </Link>
  );
}

function Headeren() {
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
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              objectPosition: 'center',
              display:'block',
              marginLeft:'auto',
              marginRight:'auto'
            }}
          />
        </div>
      </div>

      <div className="LanguageSwitcher">
        <ENtoJP />
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

export default Headeren;
