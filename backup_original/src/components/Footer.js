import React from 'react';
import './Footer.css';  // CSSファイルをインポート

// Font Awesomeのライブラリからアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <div className="footer-container">

      <div className="footer-component contributions">
        主催：東京大学工学部建築学科3年有志<br/>
        協力：NPO法人たいとう歴史都市研究会<br/>
        ロゴタイプ：野老朝雄
      </div>

      <div className="footer-component contact">
        <div className="contact-text">
          Instagram：@utokyoarchitecture2024<br/>
          X：@UTarch2024<br/>
          Email:2024inbetween@gmail.com
        </div>
          <div className="footer-follow">
            <a href="https://www.instagram.com/utokyoarchitecture2024?igsh=MmVIMjlkMTBhMg==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/utarch2024?s=21" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
      </div>

    </div>
  );
}

export default Footer;

