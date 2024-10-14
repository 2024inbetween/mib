import React from 'react';
import "./AboutFont.css";

function AboutFont(){
    return(
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/Font.png`}
                alt="Font Logo"
                style={{
                    width: '40%',        // 親要素の幅に合わせる
                    height: 'auto',        // アスペクト比を維持して高さを自動調整
                    objectFit: 'cover',    // 画像が親要素をカバーする
                    objectPosition: 'center',
                    marginTop:60, 
                }}
                />

            <br/>

            <img
                src={`${process.env.PUBLIC_URL}/tokolofont.png`}
                alt="Access Logo"
                style={{
                    width: 'calc(100% - 40px)',        // 親要素の幅に合わせる
                    height: 'auto',        // アスペクト比を維持して高さを自動調整
                    objectFit: 'cover',    // 画像が親要素をカバーする
                    objectPosition: 'center',
                    paddingTop:20, 
                    margin:'0 20px'
                }}
                />

            <div className='fontText'>
            東京大学の授業「造形第六」の講師である野老朝雄さんが、今回の展覧会のために特別にフォントをデザインしてくださいました。<br/>
            このフォントは、大きさの異なる2種類の円が集まることで構成されています。円の大きさは、基準となる正方形の枠組に対し、それぞれ80%と40%です。<br/>
            野老さんが以前デザインした建築情報学会のフォントは、80%と20%の2種類の円を用いて作られています。今回の展覧会のフォントは、これをベースにしながら、20%の円を40%に変更し、中間的な大きさを採用することで、より「段階性」や「間」の感覚を強調しています。<br/>
            こうして生まれたフォントは、展覧会のテーマ「MAKING INBETWEEN」にぴったりのデザインと言えるでしょう。<br/>
            さらにこのフォントは、近くで見ると文字として認識しにくいですが、遠くから見るとスラスラ読めるという特性があります。ドットと文字の「間」や「段階的変化」をぜひ体感してみてください。<br/>
            </div>
        </div>
    )
}

export default AboutFont;