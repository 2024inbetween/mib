import React from 'react'
import './Home.css'
import NewNewsh from './components/NewNewsh'
import Dateh from './components/Dateh'
//import Worksh from './components/Worksh'


function Home() {
  return (
    <div className="Home">
      <div>
        <div style={{width: '100vw', height: 'auto', position: 'relative',marginTop: '100px' }}>
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        style={{
          width: '100%',        // 親要素の幅に合わせる
          height: 'auto',        // アスペクト比を維持して高さを自動調整
          objectFit: 'cover',    // 画像が親要素をカバーする
          objectPosition: 'center', // 画像の中央部分を表示
        }}
      />
        </div>
      </div>
      <div style={{padding:'20px',color: '#00144E', fontSize: 15, fontWeight: '300', wordWrap: 'break-word'}}>
      </div>
      <div style={{marginBottom:('80px')}}>
        <Dateh />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <NewNewsh />
      </div>
      {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <Worksh />
      </div>*/}
      <div style={{marginBottom:'80px'}}>
        <div style={{fontSize:22}}>
        “MAKING INBETWEEN” とは
        </div>
        <div style={{fontSize:16, paddingRight:20,paddingLeft:20,textAlign:'left'}}>
        東京大学建築学科3年の有志学生による企画展”MAKING INBETWEEN”を11月1日（金）から11月4日（月・祝）にかけて開催します。会場は本郷キャンパスから根津を超えたところにある三段坂の和館。建築家の千葉学教授と美術家の野老朝雄氏が講師を務める授業「造形第六」での成果物から生まれた5つの作品を展示します。造形第六では2016年以降”CONDITION SPECIFIC”という枠組みに沿って作品が制作され、建築という領域を超えた表現が試みられてきました。今年度は野老氏による主題”MAKING INBETWEEN”を起点とするグループワークにより、グラフィックや彫刻、ソフトウェアなど、多様なメディアを用いた作品が制作されました。体験型の作品や手にとってご覧いただける作品も多くございますので、老若男女問わずお越しください。
        </div>
      </div>
    </div>
  )
}

export default Home
