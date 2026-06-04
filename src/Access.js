import React from 'react';
import "./Access.css";

function Access(){
    return(
        <div style={{marginTop:'80px'}}>
            <div className='access-text'>
                会場:<br/>
                三段坂の和館
            </div>
            <div className='access-text'>
                住所:<br/>
                東京都台東区池之端4-17-7
            </div>
            <div className='access-text'>
                公共交通機関：<br/>
                千代田線　根津駅　徒歩8分<br/>
                JR各線　日暮里駅　徒歩15分<br/>
                JR各線・東京メトロ銀座線・日比谷線　上野駅　徒歩19分<br/>
            </div>
            <div className='access-text'>
                ご案内：<br/>
                会場には靴を脱いでお入りいただきます。駐車場や駐輪場はございません。
            </div>
            <div className='access-text'>
                ※名前で検索すると間違った場所が表示されることがあります。下記の地図（Google Map）か、住所を使って検索してください。
            </div>
            <div className='mapToWakan'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.277250846479!2d139.7666815760435!3d35.71939937257499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d00155e113f%3A0xbeb57f3cb07c36b0!2z5LiJ5q615Z2C44Gu5ZKM6aSo!5e0!3m2!1sja!2sjp!4v1726801587470!5m2!1sja!2sjp"
                    width="90%"
                    height="300"
                    style={{ border: "0" }}  // オブジェクト形式
                    title="small Google Map showing the location of 和館"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Access;