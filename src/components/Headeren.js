import React,{useState} from 'react';
import './Header.css';  // CSSをインポート
//import { slide as Menu } from 'react-burger-menu';
import { Link,useLocation} from 'react-router-dom';

function ENtoJP(){
  const location=useLocation();
  const currentPath=location.pathname;
  const japanesePath=currentPath.replace('/en', '');

  return(
    <Link to={japanesePath} className="no-scroll"> {/*classNameは付け足さない*/}
    JP/<span style={{fontWeight:600,fontSize:20}}>EN</span>
    </Link>
  );
}

function Headeren() {
  const [isOpen, setIsOpen] = useState(false); // メニューの開閉状態を管理

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // リンクをクリックした際にメニューを閉じる関数
  const closeMenu = () => {
    setIsOpen(false);
  };

  const location = useLocation(); // 現在のURLを取得
  const isTopPage = location.pathname === '/en'; // トップページかどうかを確認
  const isAccessPage=location.pathname === '/en/Access';
  const isNewsPage = location.pathname === '/en/News';

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // ホバー中
  };

  // ホバーが外れた時にクラスを再追加
  const handleMouseLeave = () => {
    setIsHovered(false); // ホバー終了
  };

  return (
    <div className="header-container">

      <input type="checkbox" className="menu-btn" id="menu-btn" checked={isOpen} onChange={toggleMenu} />
      <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className="top"><Link to='/en' onClick={closeMenu}>Top</Link></li>
        <li><Link to='/en/Access' onClick={closeMenu}>Visit</Link></li>
        <li><Link to='/en/News' onClick={closeMenu}>News</Link></li>
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

      <div className='menu-inline'><Link to='/en'><button className={isTopPage && !isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Top</button></Link></div>
      <div className='menu-inline'><Link to='/en/Access'><button className={isAccessPage && !isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Visit</button></Link></div>
      <div className='menu-inline'><Link to='/en/News'><button className={isNewsPage && !isHovered ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>News</button></Link></div>

      <div className="LanguageSwitcher">
        <ENtoJP />
      </div>
    </div>
  );
}

export default Headeren;
