import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetail() {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/newsData.json`)
        .then((response) => response.json())
        .then((data) => {
        const foundNews = data.find((news) => news.id === parseInt(id));
        setNewsItem(foundNews);
        });
    }, [id]);

    if (!newsItem) {
    return <h1>ニュースが見つかりません</h1>;
    }

    return (
    <div>
        <img
        src={`${process.env.PUBLIC_URL}/news.png`}
        alt="News Logo"
        style={{
            width: '40%',        // 親要素の幅に合わせる
            height: 'auto',      // アスペクト比を維持して高さを自動調整
            objectFit: 'cover',  // 画像が親要素をカバーする
            objectPosition: 'center',
            marginTop: 60, 
        }}
        />
        <div style={{fontSize:'30px',fontWeight:'800' ,margin:'20px'}}>{newsItem.title}</div>
        <div style={{margin: '20px',fontSize:'15px'}}>{newsItem.date}</div>
        <img
        src={`${process.env.PUBLIC_URL}${newsItem.thumbnail}`}
        alt={newsItem.title}
        style={{ width: '90%', height: 'auto', objectFit: 'cover',margin:'0 auto' }}
        />
        <div style={{margin: '20px',fontSize:'15px'}}>{newsItem.content}</div>
    </div>
    );
}

export default NewsDetail;
