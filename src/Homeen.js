import React,{useEffect} from 'react'
import './Home.css'
import NewNewshen from './components/NewNewshen'
import Datehen from './components/Datehen'
import {useInView,useSpring,animated} from '@react-spring/web'
//import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
//import Worksh from './components/Worksh'


function Homeen() {
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
      <div className="Home">
        <animated.div style={styles} className="full-screen-background">
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        className="center-image"
      />
        </animated.div>
      </div>
      <animated.div ref={ref1} style={springs1} className='home-component'>
        <Datehen />
      </animated.div>
      <animated.div ref={ref2} style={springs2} className='home-component'>
        <NewNewshen />
      </animated.div>
      {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <Worksh />
      </div>*/}
      <animated.div ref={ref3} style={springs3} className='home-component'>
        <div style={{fontSize:22,paddingLeft:20,marginBottom:10,textAlign:'left'}}>
        What is “MAKING INBETWEEN”?
        </div>
        <div style={{fontSize:16, paddingRight:20,paddingLeft:20,textAlign:'left'}}>
        An exhibition by architecture students at the University of Tokyo will be held from November 7th (Fri) to 9th (Sun), 2025, with the gallery open daily from noon to 6 p.m. The exhibition will showcase works created in the “Architectural Media Studies 6” class, supervised by architect Manabu Chiba and artist Asao Tokyo. Since 2016, this course has focused on the theme “CONDITION SPECIFIC”, encouraging students to explore creative expressions beyond the boundaries of architecture. This year’s sub-theme, “MAKING INBETWEEN” inspired the creation of five pieces using various media, including graphics, sculpture, software, and more. Many of the works are interactive or hands-on, inviting visitors of all ages to engage with them.
        </div>
      </animated.div>
    </div>
  )
}

export default Homeen
