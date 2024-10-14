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
            {/*<div className='news-text'>
                〜トークセッションの売り文句〜
            </div>*/}
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
                日時：11月4日(月・祝)　13時〜
            </div>
            <div className='news-text'>
                場所：本展覧会会場内
            </div>
            <div className='news-text'>
                参加費：無料
            </div>
            {/*<div className='news-text'>
                予約はこちらから<br/>
                （当日参加も可能ですが、混雑した場合、フォームに回答していただいている方を優先的にご案内いたします。）
            </div>*/}


        </div>
    );
}

export default News;

