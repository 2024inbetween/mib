import React from 'react'
import './Home.css'
import NewNewshen from './components/NewNewshen'
import Datehen from './components/Datehen'
//import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
//import Worksh from './components/Worksh'


function Homeen() {
  return (
    <div className="Home">
      <div>
        <div style={{marginTop: '50px' }}>
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth:'100%',
          maxHeight:'90vh',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
        </div>
      </div>
      <div style={{padding:'20px',color: '#00144E', fontSize: 15, fontWeight: '300', wordWrap: 'break-word'}}>
      </div>
      <div style={{marginBottom:('80px')}}>
        <Datehen />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <NewNewshen />
      </div>
      {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'80px'}}>
        <Worksh />
      </div>*/}
      <div style={{marginBottom:'80px'}}>
        <div style={{fontSize:22,paddingLeft:20,marginBottom:10,textAlign:'left'}}>
        What is “MAKING INBETWEEN”?
        </div>
        <div style={{fontSize:16, paddingRight:20,paddingLeft:20,textAlign:'left'}}>
        An exhibition by architecture students at the University of Tokyo will be held from November 1st to 4th. The exhibition will showcase works created in the “Architectural Media Studies 6” class, supervised by architect Manabu Chiba and artist Asao Tokyo. Since 2016, this course has focused in the theme “CONDITION SPECIFIC”, encouraging students to explore creative expressions beyond the boundaries of architecture. This year’s sub-theme, “MAKING INBETWEEN” inspired the creation of five pieces using various media, including graphics, sculpture, software, and more. Many of the works are interactive or hands-on, inviting visitors of all ages to engage with them.
        </div>
      </div>
    </div>
  )
}

export default Homeen
