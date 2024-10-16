import React from 'react';
import "./Access.css";

function Accessen(){
    return(
        <div style={{marginTop:'80px'}}>
            <div className='access-text'>
                LOCATION: <br/>
                Sandanzaka no Wakan
            </div>
            <div className='access-text'>
            ADDRESS: <br/>
            4-17-7 Ikenohata, Taito-ku, Tokyo
            </div>
            <div className='access-text'>
            ACCESS: <br/>
            Nezu Station(Chiyoda line)   8-minute walk<br/>
            Nippori Station(JR line)     15-minute walk<br/>
            Ueno Station(JR line,Ginza line,Hibiya line)   19-minute walk<br/>
            </div>
            <div className='access-text'>
            PRECAUTIONS:<br/>
            This gallery is a Japanese-style house. Please take off your shoes when entering inside. <br/>
            There is no parking spot for cars and bicycles at this gallery.
            </div>
            <div className='access-text'>
            ※Please search by address or follow the link. Entering the name of the gallery may show the wrong location.
            </div>
            <div className='mapToWakan'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.819062983834!2d139.76854611855867!3d35.719423943423074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d00155e113f%3A0xbeb57f3cb07c36b0!2z5LiJ5q615Z2C44Gu5ZKM6aSo!5e0!3m2!1sen!2sjp!4v1729073642549!5m2!1sen!2sjp"
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
export default Accessen;