import React from 'react';
import "./Access.css";

function Accessen(){
    return(
        <div style={{marginTop:'80px'}}>
            <div className='access-text'>
                LOCATION: <br/>
                Denchu Hirakushi House and Atelier
            </div>
            <div className='access-text'>
            ADDRESS: <br/>
            2-20-3 Uenosakuragi, Taito-ku, Tokyo
            </div>
            <div className='access-text'>
            ACCESS: <br/>
            Nezu Station (Chiyoda Line) - 8-minute walk<br/>
            Uguisudani Station (JR Line) - 12-minute walk<br/>
            Ueno Station (JR, Ginza, Hibiya Lines) - 18-minute walk<br/>
            </div>
            <div className='access-text'>
            PRECAUTIONS:<br/>
            This gallery is a historic Japanese-style atelier. Please take off your shoes when entering inside. <br/>
            There is no parking spot for cars and bicycles at this gallery.
            </div>
            <div className='access-text'>
            ※Please search by address or follow the link. Entering the name of the gallery may show the wrong location.
            </div>
            <div className='mapToWakan'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.277250846479!2d139.7666815760435!3d35.71939937257499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d00155e113f%3A0xbeb57f3cb07c36b0!2zRGVuY2h1IEhpcmFrdXNoaSBIb3VzZSBhbmQgQXRlbGllcg!5e0!3m2!1sen!2sjp!4v1726801980000!5m2!1sen!2sjp"
                    width="90%"
                    height="300"
                    style={{ border: "0" }}  // オブジェクト形式
                    title="Google Map showing the location of Denchu Hirakushi House and Atelier"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}
export default Accessen;
