import React from 'react';
//import { Link } from 'react-router-dom';
import './News.css';

function News() {
    return (
        <div style={{marginTop:'80px'}}>
            <div className='news-text'>
                お知らせ：
            </div>
            <div className='news-text big'>
                スペシャルトークセッション開催決定！
            </div>
            <div className='news-text'>
                パネルディスカッション<br/>
                「建築と造形のあいだ」
            </div>
            <div className='news-text'>
                ゲスト：<br/>
                千葉学教授<br/>
                建築家・東京大学大学院工学系研究科建築学専攻教授・造形第六の講師を務める<br/>
            </div>
            <div className='news-text'>
                野老朝雄氏<br/>
                美術家・東京大学工学部非常勤講師
            </div>
            <div className='news-text'>
                日時：11月4日(月・祝)　13時〜<br/>
                場所：三段坂の和館／配信<br/>
                参加費：無料
            </div>
            <div className='news-text'>
                予約／配信申し込みは<a href="https://forms.gle/MJYiEG2DbsoPoMRw7">こちら</a>から<br/>
                （当日参加も可能ですが、混雑した場合、フォームに回答していただいている方を優先的にご案内いたします。）
            </div>
            <div className='news-text'>
                会場は和室となります。畳に座ることが難しい方や、車椅子を利用される方、その他特別な配慮が必要な方はご連絡ください。
            </div>

        </div>
    );
}

export default News;

