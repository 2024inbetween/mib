import React from 'react';
import './styles.css';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Access from './Access';
import AboutFont from './AboutFont';
import News from './News';
import Works from './Works';
import NewsDetail from './NewsDetail';
import WorksDetail from './WorksDetail';
import Footer from './components/Footer';
import Header from './components/Header';

function useScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const handleScrollToTop = (event) => {
      // クリックした要素が <a> 要素（リンク）であればスクロール
      if (event.target.tagName === 'A') {
        window.scrollTo(0, 0);
      }
    };

    // ページ遷移やリンククリック時にスクロールをトリガー
    window.scrollTo(0, 0);

    // クリックイベントを監視してリンククリック時にトップへスクロール
    window.addEventListener('click', handleScrollToTop);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      window.removeEventListener('click', handleScrollToTop);
    };
  }, [pathname]);  // `pathname` が変わるたびに再実行

  return null;  // UI は返さない
}

function App() {
  useScrollToTop();  // ページ遷移時にトップへスクロール

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/access" element={<Access />} />
        <Route path="/aboutfont" element={<AboutFont />} />
        <Route path="/news" element={<News />} />
        <Route path="/works" element={<Works />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/works/:id" element={<WorksDetail />} />
      </Routes>
      <div className='footer-bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>  {/* App全体をRouterでラップ */}
      <App />
    </Router>
  );
}