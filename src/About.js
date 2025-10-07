import React from 'react';
import "./About.css";

function About(){
    return(
        <div className='About'>
            <img
                src={`${process.env.PUBLIC_URL}/aboutus.png`}
                alt="Aboutus Logo"
                style={{
                    width: '40%',        // 親要素の幅に合わせる
                    height: 'auto',        // アスペクト比を維持して高さを自動調整
                    objectFit: 'cover',    // 画像が親要素をカバーする
                    objectPosition: 'center',
                    marginTop:60,
                }}
            />
            <div className='sectionTitle'>
            About Us
            </div>
            <div className='introduction'>
            美術家・野老朝雄氏が講師を務める東京大学の授業「造形第六」において、制作活動に参加した学生の中から、有志メンバーによる展示が行われることになりました。<br/>
            造形第六では2014年以降”CONDITION SPECIFIC”という通底するテーマに沿って作品が制作され、建築という枠組みを超えた表現が試みられてきました。<br/>
            今年度はサブテーマ”MAKING INBETWEEN”を起点としてグラフィックや彫刻、ソフトウェアなど、さまざまなメディアを用いた作品が制作されました。<br/>
            ここでは、それぞれの制作メンバーをご紹介します。
            </div>

            <div className='ProjectTeam'>
                <div className='sectionTitle'>
                Project Team
                </div>
                <div className='teamTitle'>
                    teamTitle
                </div>
                <div className='teamDoing'>
                    teamDoing
                </div>
                <div className='teamMenber'>
                    <span>teamMenber</span>
                    <span>teamMenber</span>
                    <span>teamMenber</span>
                    <span>teamMenber</span>
                    <span>teamMenber</span>
                </div>
            </div>
            <div className='operationTeam'>
                <div className='sectionTitle'>
                Oparation Team
                </div>
                <div className='introduction'>
                本展示の開催にあたり、運営チームを発足いたしました。<br/>
                ここでは、様々な業務に携わったメンバーをご紹介いたします。
                </div>

                <div className='teamTitle'>
                    Operational Management
                </div>
                <div className='teamDoing'>
                    全体の統括
                </div>
                <div className='teamMenber'>
                    <span>teamMenber</span>
                    <span>teamMenber</span>
                    <span>teamMenber</span>    
                </div>

                <div className='teamTitle migi'>
                    Design
                </div>
                <div className='teamDoing migi'>
                    ポスターなどのデザイン
                </div>
                <div className='teamMenber migi'>
                    <span>teamMenber</span>
                </div>

                <div className='teamTitle'>
                    Public Relations
                </div>
                <div className='teamDoing'>
                    SNS,ホームページの運用
                </div>
                <div className='teamMenber'>
                    <span>teamMenber</span>
                </div>

                <div className='teamTitle migi'>
                    Accounting
                </div>
                <div className='teamDoing migi'>
                    会計作業
                </div>
                <div className='teamMenber migi'>   
                    <span>teamMenber</span>
                </div>

                <div className='teamTitle'>
                    Venue Configuration
                </div>
                <div className='teamDoing'>
                    会場の動線計画やサイン計画
                </div>
                <div className='teamMenber'>
                    <span>teamMenber</span>
                </div>

                <div className='teamTitle migi'>
                    External Relations
                </div>
                <div className='teamDoing migi'>
                    外部とのやりとり
                </div>
                <div className='teamMenber migi'>
                    <span>teamMenber</span>
                </div>
            </div>
        </div>
    )
}

export default About;
