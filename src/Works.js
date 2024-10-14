import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Works.css';

function Works() {
    const [worksData, setWorksData] = useState([]);

// 外部JSONファイルからニュースデータを取得
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/worksData.json`)
        .then((response) => response.json())
        .then((data) => setWorksData(data))
        .catch((error) => console.error("ニュースデータの取得に失敗しました", error));
    }, []);

    return (
        <div>
        <img
        src={`${process.env.PUBLIC_URL}/works.png`}
        alt="Works Logo"
        style={{
            width: '40%',        // 親要素の幅に合わせる
            height: 'auto',      // アスペクト比を維持して高さを自動調整
            objectFit: 'cover',  // 画像が親要素をカバーする
            objectPosition: 'center',
            marginTop: 60, 
        }}
        />
        <div class='title'>contents</div>

        <div className="news-list">
        {worksData.map((works) => (
            <Link to={`/works/${works.id}`} style={{textDecoration:'none'}}>
            <div key={works.id} className="works-item">
                <img
                src={`${process.env.PUBLIC_URL}${works.thumbnail}`} 
                alt={works.title}
                style={{ width: '60%', height: 'auto', objectFit: 'cover' }}
                />
                <div className='contentsTitle' style={{textDecoration:'none'}}>{works.title}</div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    );
}

export default Works;