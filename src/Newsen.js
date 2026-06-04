import React from 'react';
//import { Link } from 'react-router-dom';
import './News.css';

function Newsen() {
    return (
        <div style={{marginTop:'80px'}}>
            <div className='news-text'>
            NEWS:
            </div>
            <div className='news-text big'>
            Panel Discussion coming up!
            </div>
            <div className='news-text'>
            Panel Discussion<br/>
                &quot;Between Architecture and Form&quot;
            </div>
            <div className='news-text'>
            About the Presenters:<br/>
            Chiba Manabu<br/>
            Architect / University of Tokyo, Graduate School of Engineering Professor<br/>
            </div>
            <div className='news-text'>
            Tokolo Asao<br/>
            Artist / University of Tokyo, Graduate School of Engineering Adjunct Professor
            </div>
            <div className='news-text'>
            DATE：Monday, November 4th, 1 P.M.<br/>
            LOCATION：Sandanzaka no Wakan<br/>
            FREE ENTRY
            </div>
            <div className='news-text'>
            You can make reservations/subscribe <a href="https://forms.gle/MJYiEG2DbsoPoMRw7">here</a>.<br/>
            (People who submitted the reservation form will be prioritized. If there is vacancy, we welcome participation on the day.)
            </div>
            <div className='news-text'>
            The gallery will be a traditional Japanese room with tatami mats. If you have difficulty sitting on tatami, use a wheelchair, or require any special accommodations, please contact us.
            </div>

        </div>
    );
}

export default Newsen;

