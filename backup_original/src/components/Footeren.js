import React from 'react';
import './Footer.css';  // CSSファイルをインポート

// Font Awesomeのライブラリからアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footeren() {

  return (
    <div className="footer-container">

      <div className="footer-component contributions">
      ORGANIZED BY: volunteer from the University of Tokyo&apos;s architecture students<br/>
      SUPPORTED BY: NPO Taito Cultural & Historical Society<br/>
      LOGOTYPE BY: Tokolo Asao
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

export default Footeren;

