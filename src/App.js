import React from 'react';
import './styles.css';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Homeen from './Homeen';
import About from './About';
import Access from './Access';
import Accessen from './Accessen';
import AboutFont from './AboutFont';
import News from './News';
import Newsen from './Newsen';
import Works from './Works';
import NewsDetail from './NewsDetail';
import WorksDetail from './WorksDetail';
import Footer from './components/Footer';
import Footeren from './components/Footeren';
import Header from './components/Header';
import Headeren from './components/Headeren';
import { useTransition, animated } from '@react-spring/web';  // react-spring をインポート


function useScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const handleScrollToTop = (event) => {
      // クリックした要素が <a> 要素（リンク）であればスクロール
      const anchor = event.target.closest('a');
      console.log("Clicked element:", event.target);

      if (anchor && anchor.className!=="no-scroll") {
        window.scrollTo(0, 0);
      }
    };

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

  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  //ページ遷移アニメーション
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(20px)' }, // 表示前の状態
    enter: { opacity: 1, transform: 'translateY(0px)' }, // 表示後の状態
    leave: { opacity: 0, transform: 'translateY(20px)' }, // 消えるときの状態
    config: { duration: 500 },  // アニメーションの速度
    exitBeforeEnter: true,  // ページが完全に消える前に次のページが入るのを防ぐ
    trail: 500, // 次のアニメーションが開始される前に500msの遅延を入れる
  });

  return (
    <div>
      {isEnglish ? <Headeren /> : <Header />}
      <div className='maincontent'>
      {transitions((style, item) => (
          <animated.div style={style}>
            <Routes location={item}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/access" element={<Access />} />
              <Route path="/aboutfont" element={<AboutFont />} />
              <Route path="/news" element={<News />} />
              <Route path="/works" element={<Works />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/works/:id" element={<WorksDetail />} />

              <Route path="/en" element={<Homeen />} />
              <Route path="/en/access" element={<Accessen />} />
              <Route path="/en/news" element={<Newsen />} />
            </Routes>
          </animated.div>
        ))}
      </div>
      {isEnglish ? <Footeren /> : <Footer />}
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