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
            今年度はサブテーマ”MAKING INBETWEEN”を起点としてグラフィックや彫刻、ソフトウェアなど、さまざまなメディアを用いた5つの作品が制作されました。<br/>
            ここでは、それぞれの制作メンバーをご紹介します。
            </div>

            <div className='ProjectTeam'>
                <div className='sectionTitle'>
                Project Team
                </div>
                
                <div className='teamTitle'>
                    0と1のあいだ
                </div>
                <div className='teamDoing'>
                    有と無
                </div>
                <div className='teamMenber'>
                    <span>Lisa Kudo</span>
                    <span>Mai Kawakami</span>
                    <span>Mayu Watanabe</span>
                    <span>Suzuka Shoji</span>
                    <span>Yuuka Sayama</span>
                </div>

                <div className='teamTitle migi'>
                    カオスとコスモス
                </div>
                <div className='teamDoing migi'>
                    多様なメディアの調和を探求
                </div>
                <div className='teamMenber migi'>
                    <span>Hiroka Tsuyoshi</span>
                    <span>Jun Takaura</span>
                    <span>Sae Fujinaga</span>
                    <span>Saki Kanouchi</span>
                    <span>Shuji Hisatomi</span>
                    <span>Taiga Yamaguchi</span>
                    <span>Yuki Watanabe</span>
                </div>

                <div className='teamTitle'>
                    偏光板
                </div>
                <div className='teamDoing'>
                    光と影の対立を表現
                </div>
                <div className='teamMenber'>
                    <span>Akira Takeuchi</span>
                    <span>Ikumi Hirai</span>
                    <span>Kai Matsumoto</span>
                    <span>Kenjiro Kawai</span>
                    <span>Tomoya Matsuki</span>
                    <span>Yuki Matsuhisa</span>
                </div>

                <div className='teamTitle migi'>
                    東京と故郷のあいだ
                </div>
                <div className='teamDoing migi'>
                    都市と故郷をつなぐアート
                </div>
                <div className='teamMenber migi'>
                    <span>Akira Takeuchi</span>
                    <span>Issa Takagi</span>
                    <span>Mebuki Kanda</span>
                    <span>Ryo Sakai</span>
                    <span>Shuji Hisatomi</span>
                    <span>Yuri Sakomoto</span>
                </div>

                <div className='teamTitle'>
                    日本語と英語のInbetween
                </div>
                <div className='teamDoing'>
                    言語を超えた表現の探求
                </div>
                <div className='teamMenber'>
                    <span>Eisuke Takahashi</span>
                    <span>Kaisei Ota</span>
                    <span>Kenjiro Kawai</span>
                    <span>Lisa Kudo</span>
                    <span>Masato Tominaga</span>
                    <span>Mayu Watanabe</span>
                    <span>Shuji Hisatomi</span>
                    <span>Shunsuke Oshima</span>
                    <span>Suzuka Shoji</span>
                    <span>Yuri Sakomoto</span>
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
                    <span>Issa Takagi</span>
                    <span>Saki Kanouchi</span>
                    <span>Shuji Hisatomi</span>    
                </div>

                <div className='teamTitle migi'>
                    Design
                </div>
                <div className='teamDoing migi'>
                    ポスターなどのデザイン
                </div>
                <div className='teamMenber migi'>
                    <span>Ikumi Hirai</span>
                    <span>Issa Takagi</span>
                    <span>Jun Takaura</span>
                    <span>Kai Matsumoto</span>
                    <span>Mayu Watanabe</span>
                    <span>Ozan Ishii</span>
                    <span>Shuji Hisatomi</span>
                    <span>Tomoya Matsuki</span>
                    <span>Yuki Matsuhisa</span>
                    <span>Yuuka Sayama</span>
                </div>

                <div className='teamTitle'>
                    Public Relations
                </div>
                <div className='teamDoing'>
                    SNS,ホームページの運用
                </div>
                <div className='teamMenber'>
                    <span>Ikumi Hirai</span>
                    <span>Issa Takagi</span>
                    <span>Jun Takaura</span>
                    <span>Kai Matsumoto</span>
                    <span>Mebuki Kanda</span>
                    <span>Mai Kawakami</span>
                    <span>Ozan Ishii</span>
                    <span>Sae Fujinaga</span>
                    <span>Saki Kanouchi</span>
                    <span>Yuki Watanabe</span>
                    <span>Yuri Sakomoto</span>
                </div>

                <div className='teamTitle migi'>
                    Accounting
                </div>
                <div className='teamDoing migi'>
                    会計作業
                </div>
                <div className='teamMenber migi'>   
                    <span>Hiroka Tshuyoshi</span>
                    <span>Kaisei Ota</span>
                    <span>Suzuka Shoji</span>
                </div>

                <div className='teamTitle'>
                    Venue Configuration
                </div>
                <div className='teamDoing'>
                    会場の動線計画やサイン計画
                </div>
                <div className='teamMenber'>
                    <span>Eisuke Takahashi</span>
                    <span>Issa Takagi</span>
                    <span>Kaisei Ota</span>
                    <span>Kai Matsumoto</span>
                    <span>Mai Kawakami</span>
                    <span>Masato Tominaga</span>
                    <span>Mebuki Kanda</span>
                    <span>Mayu Watanabe</span>
                    <span>Shuji Hisatomi</span>
                    <span>Suzuka Shoji</span>
                    <span>Tomoya Matsuki</span>
                    <span>Yuri Sakomoto</span>
                </div>

                <div className='teamTitle migi'>
                    External Relations
                </div>
                <div className='teamDoing migi'>
                    外部とのやりとり
                </div>
                <div className='teamMenber migi'>
                    <span>Issa Takagi</span>
                    <span>Saki Kanouchi</span>
                    <span>Shuji Hisatomi</span>
                    <span>Tomoya Matsuki</span>
                </div>
            </div>
        </div>
    )
}

export default About;
