import React,{useEffect} from 'react'
import './Home.css'
import NewNewsh from './components/NewNewsh'
import Dateh from './components/Dateh'
import {useInView,useSpring,animated} from '@react-spring/web'
//import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
//import Worksh from './components/Worksh'


function Home() {
  const[styles,api]=useSpring(()=>({
    from:{
      backgroundColor:'white',
      clipPath:'circle(0% at 50% 50%)',
    },
    to:{
      backgroundColor:'#01195C',
      clipPath:'circle(150% at 50% 50%)',
    },
    config:{duration:2000},
  }));

  useEffect(()=>{
    api.start();
  },[api]);

  const [ref1, springs1] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(50px)' }, // 初期状態
      to: { opacity: 1, transform: 'translateY(0px)' },     // アニメーション後の状態
    }),
    { rootMargin: '-15% 0%' } // トリガーする位置を指定
  );

  const [ref2, springs2] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(50px)' }, // 初期状態
      to: { opacity: 1, transform: 'translateY(0px)' },     // アニメーション後の状態
    }),
    { rootMargin: '-15% 0%' } // トリガーする位置を指定
  );

  const [ref3, springs3] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(50px)' }, // 初期状態
      to: { opacity: 1, transform: 'translateY(0px)' },     // アニメーション後の状態
    }),
    { rootMargin: '-15% 0%' } // トリガーする位置を指定
  );

  return (
    <div>
      <div className='Home'>
        <animated.div style={styles} className="full-screen-background">
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        className="center-image"
      />
        </animated.div>
      </div>
      <animated.div ref={ref1} style={springs1} className='home-component'>
        <Dateh />
      </animated.div>
      <animated.div ref={ref2} style={springs2} className='home-component'>
        <NewNewsh />
      </animated.div>
      {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <Worksh />
      </div>*/}
      <animated.div ref={ref3} style={springs3} className='home-component'>
        <div style={{fontSize:22,paddingLeft:20,marginBottom:10,textAlign:'left'}}>
        “MAKING INBETWEEN” とは
        </div>
        <div style={{fontSize:16, paddingRight:20,paddingLeft:20,textAlign:'left'}}>
        東京大学建築学科3年の有志学生による企画展”MAKING INBETWEEN”を11月1日（金）から11月4日（月・祝）にかけて開催します。会場は本郷キャンパスから根津を超えたところにある三段坂の和館。建築家の千葉学教授と美術家の野老朝雄氏が講師を務める授業「造形第六」での成果物から生まれた5つの作品を展示します。造形第六では2016年以降”CONDITION SPECIFIC”という枠組みに沿って作品が制作され、建築という領域を超えた表現が試みられてきました。今年度は野老氏による主題”MAKING INBETWEEN”を起点とするグループワークにより、グラフィックや彫刻、ソフトウェアなど、多様なメディアを用いた作品が制作されました。体験型の作品や手にとってご覧いただける作品も多くございますので、老若男女問わずお越しください。
        </div>
      </animated.div>
    </div>
  )
}

export default Home
