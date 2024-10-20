import React,{useState} from 'react';
import './Header.css';  // CSSをインポート
//import { slide as Menu } from 'react-burger-menu';
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
  const [isOpen, setIsOpen] = useState(false); // メニューの開閉状態を管理

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // リンクをクリックした際にメニューを閉じる関数
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-container">

      <input type="checkbox" className="menu-btn" id="menu-btn" checked={isOpen} onChange={toggleMenu} />
      <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
      <ul className="menu">
        <li className="top"><Link to='/' onClick={closeMenu}>Top</Link></li>
        <li><Link to='/Access' onClick={closeMenu}>Visit</Link></li>
        <li><Link to='/News' onClick={closeMenu}>News</Link></li>
      </ul>

      <div className="header-text-container">
      <Link to="/">
        <div className="header-logo">
          <img
            src={`${process.env.PUBLIC_URL}/headerlogo.jpg`}
            alt="Header Logo"
          />
        </div>
      </ Link>
      </div>

      <div className="LanguageSwitcher">
        <JPtoEn />
      </div>
    </div>
  );
}

export default Header;
