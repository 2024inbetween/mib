import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WorksDetail() {
    const { id } = useParams();
    const [worksItem, setWorksItem] = useState(null);

    useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/worksData.json`)
        .then((response) => response.json())
        .then((data) => {
        const foundWorks = data.find((works) => works.id === parseInt(id));
        setWorksItem(foundWorks);
        });
    }, [id]);

    if (!worksItem) {
    return <h1>作品が見つかりません</h1>;
    }

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
        <div style={{fontSize:'30px',fontWeight:'800', margin:'20px'}}>{worksItem.title}</div>
        <div style={{margin: '20px',fontSize:'15px'}}>{worksItem.date}</div>
        <img
        src={`${process.env.PUBLIC_URL}${worksItem.thumbnail}`}
        alt={worksItem.title}
        style={{ width: '90%', height: 'auto', objectFit: 'cover', margin:'0 auto' }}
        />
        <div style={{margin: '20px',fontSize:'15px'}}>{worksItem.content}</div>
    </div>
    );
}

export default WorksDetail;